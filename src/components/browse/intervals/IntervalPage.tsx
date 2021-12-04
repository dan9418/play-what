import React from "react";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../core/models/Pod/Interval/Interval.constants";
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";

const StyledIntervalPage = styled(StyledPageBody)`
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        padding: 16px;

        .card {
            background: white;
            height: 100%;
            width: 100%;
            border-radius: 16px;
            padding: 16px;

            label {
                font-weight: bold;
                margin-right: 4px;
            }
        }
    }
`;


const IntervalPage: React.FC<any> = props => {
    console.log('dpb props', props);

    const interval = INTERVAL_PRESETS.find(c => c.id.toLowerCase() === props.params.id)
    return (
        <StyledIntervalPage>
            <BreadcrumbList path={props.path} />
            <PageTitle title={interval.name} subtitle={JSON.stringify(interval.value)} />
            <div className="grid">

            </div>
        </StyledIntervalPage >
    );
};

export default IntervalPage;
