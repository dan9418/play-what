import Scale from "@pw-core/models/Scale";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { rootState } from "../../state/state";
import BreadcrumbList from "../_shared/breadcrumb-list/BreadcrumbList";
import DetailsCard from "../_shared/cards/DetailsCard";
import GuitarCard from "../_shared/cards/GuitarCard";
import ModeCard from "../_shared/cards/ModeCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RomanNumeralsCard from "../_shared/cards/RomanNumeralsCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import { StyledPane } from "../_shared/layout/Pane";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {

    const root = useRecoilValue(rootState)

    const scale = new Scale(props.params.id, { root });

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.name} path={props.path} />
            <PageTitle title={scale.name} subtitle="Scale" />
            <StyledPane>
                <DetailsCard model={scale} />
                <RootCard model={scale} />
                <GuitarCard model={scale} />
                <RomanNumeralsCard model={scale} />
                <ModeCard model={scale} />
                <RelatedCard model={scale} />
                <SoundCard model={scale} />
            </StyledPane>
        </StyledScalePage >
    );
};

export default ScalePage;