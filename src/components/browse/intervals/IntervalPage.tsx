import React from "react";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../core/models/Pod/Interval/Interval.constants";
import { useHistory, useIntervalsPreset } from "../../../state/state";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane } from "../../_shared/layout/Pane";
import IntervalsCard from "../_shared/cards/IntervalsCard";
import ViewerCard from "../_shared/cards/ViewerCard";

const StyledIntervalPage = styled(StyledPageBody)`
    
`;


const IntervalPage: React.FC<any> = props => {
    console.log('dpb props', props);

    const interval = useIntervalsPreset(INTERVAL_PRESETS, props.params.id);

    const history = useHistory(interval.id, interval.name, props.path);

    return (
        <StyledIntervalPage>
            <BreadcrumbList />
            <PageTitle title={interval.name} subtitle={JSON.stringify(interval.value)} />
            <StyledDoublePane>
                <IntervalsCard />
                <ViewerCard />
            </StyledDoublePane>
        </StyledIntervalPage >
    );
};

export default IntervalPage;
