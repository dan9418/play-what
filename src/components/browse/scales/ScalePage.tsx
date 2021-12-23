import Scale from "@pw-core/models/Scale";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { rootState } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import DetailsCard from "../_shared/cards/DetailsCard";
import GuitarCard from "../_shared/cards/GuitarCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {

    const root = useRecoilValue(rootState)

    const scale = new Scale(props.params.id, { root });

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.getName()} path={props.path} />
            <PageTitle title={scale.getName()} subtitle="Scale" />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={scale} />
                    <RelatedCard model={scale} />
                    <SoundCard model={scale} />
                </StyledPane>
                <StyledPane>
                    <GuitarCard model={scale} />
                    <DetailsCard model={scale} />
                </StyledPane>
            </StyledDoublePane>
        </StyledScalePage >
    );
};

export default ScalePage;
