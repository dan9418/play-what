import Scale from "@pw-core/models/Scale";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import RelatedCard from "../_shared/cards/RelatedCard";
import RootCard from "../_shared/cards/RootCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";

const StyledScalePage = styled(StyledPageBody)`
   
`;


const ScalePage: React.FC<any> = props => {
    const scale = new Scale(props.params.id);

    return (
        <StyledScalePage>
            <BreadcrumbList id={scale.id} name={scale.name} path={props.path} />
            <PageTitle title={scale.name} subtitle="Scale" />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={scale} />
                    <RelatedCard model={scale} />
                </StyledPane>
                <StyledPane>
                    <ViewerCard model={scale} />
                    <SoundCard model={scale} />
                </StyledPane>
            </StyledDoublePane>
        </StyledScalePage >
    );
};

export default ScalePage;
