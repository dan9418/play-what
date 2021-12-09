import React from "react";
import styled from 'styled-components';
import Scale from "../../../core/models/Scale";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
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
            <BreadcrumbList id={scale.preset.id} name={scale.preset.name} path={props.path} />
            <PageTitle title={scale.preset.name} subtitle={scale.getIntervalListString()} />
            <StyledDoublePane>
                <StyledPane>
                    <RootCard model={scale} />
                    <IntervalsCard model={scale} />
                    <SoundCard model={scale} />
                </StyledPane>
                <StyledPane>
                    <ViewerCard model={scale} />
                    <RelatedCard model={scale} />
                </StyledPane>
            </StyledDoublePane>
        </StyledScalePage >
    );
};

export default ScalePage;
