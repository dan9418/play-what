import React from "react";
import styled from 'styled-components';
import IntervalUtils from "../../../core/models/Interval/Interval.utils";
import { useIntervalPreset } from "../../../state/state";
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
    const interval = useIntervalPreset(props.params.id);

    return (
        <StyledIntervalPage>
            <BreadcrumbList id={interval.id} name={IntervalUtils.getName(interval.value)} path={props.path} />
            <PageTitle title={interval.name} subtitle={JSON.stringify(interval.value)} />
            <StyledDoublePane>
                <StyledPane>
                    <IntervalsCard />
                    <SoundCard />
                </StyledPane>
                <StyledPane>
                    <ViewerCard />
                    <RelatedCard />
                </StyledPane>
            </StyledDoublePane>
        </StyledIntervalPage >
    );
};

export default IntervalPage;
