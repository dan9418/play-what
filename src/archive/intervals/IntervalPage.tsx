import IntervalSpan from "@pw-core/models/Interval";
import React from "react";
import styled from 'styled-components';
import BreadcrumbList from "../../_shared/breadcrumb-list/BreadcrumbList";
import { StyledPageBody } from "../../_shared/layout/PageBody";
import PageTitle from "../../_shared/layout/PageTitle";
import { StyledDoublePane, StyledPane } from "../../_shared/layout/Pane";
import Card from "../../_shared/ui/Card";
import DetailsCard from "../_shared/cards/DetailsCard";
import RelatedCard from "../_shared/cards/RelatedCard";
import SoundCard from "../_shared/cards/SoundCard";

const StyledIntervalPage = styled(StyledPageBody)`
    
`;


const IntervalPage: React.FC<any> = props => {
    const interval = new IntervalSpan(props.params.id);

    return (
        <StyledIntervalPage>
            <BreadcrumbList id={interval.id} name={interval.getName()} path={props.path} />
            <PageTitle title={interval.name} subtitle="Interval" />
            <StyledDoublePane>
                <StyledPane>
                    <Card title="Ratio" />
                    <RelatedCard model={interval} />
                    <SoundCard model={interval} />
                </StyledPane>
                <StyledPane>
                    <DetailsCard model={interval} />
                </StyledPane>
            </StyledDoublePane>
        </StyledIntervalPage >
    );
};

export default IntervalPage;
