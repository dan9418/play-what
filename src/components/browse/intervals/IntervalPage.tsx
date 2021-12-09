import React from "react";
import styled from 'styled-components';
import IntervalSpan from "../../../core/models/Interval";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import SoundCard from "../_shared/cards/SoundCard";
import ViewerCard from "../_shared/cards/ViewerCard";

const StyledIntervalPage = styled(StyledPageBody)`
    
`;


const IntervalPage: React.FC<any> = props => {
    const interval = new IntervalSpan(props.params.id);

    return (
        <StyledIntervalPage>
            <BreadcrumbList id={interval.preset.id} name={interval.getName()} path={props.path} />
            <PageTitle title={interval.preset.name} subtitle={JSON.stringify(interval.preset.value)} />
            <StyledDoublePane>
                <StyledPane>
                    <IntervalsCard model={interval} />
                    <SoundCard model={interval} />
                </StyledPane>
                <StyledPane>
                    <ViewerCard model={interval} />
                    <RelatedCard model={interval} />
                </StyledPane>
            </StyledDoublePane>
        </StyledIntervalPage >
    );
};

export default IntervalPage;
