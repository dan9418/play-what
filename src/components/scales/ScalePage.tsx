import Scale from "@pw-core/models/Scale";
import React from "react";
import styled from 'styled-components';
import { useRoot } from "../../contexts/PagePropsContext";
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

    const root = useRoot();
    const scale = new Scale(props.pageContext.modelId, { root });

    return (
        <StyledScalePage>
            <BreadcrumbList path={props.path} />
            <PageTitle title={scale.name} subtitle="Scale" />
            <StyledPane>
                <DetailsCard model={scale} />
                <RootCard />
                <RomanNumeralsCard model={scale} />
                <ModeCard model={scale} />
                <GuitarCard model={scale} />
                <RelatedCard model={scale} />
                <SoundCard model={scale} />
            </StyledPane>
        </StyledScalePage >
    );
};

export default ScalePage;
