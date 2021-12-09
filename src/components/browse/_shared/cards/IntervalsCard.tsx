import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import IntervalSpan from "../../../../core/models/Interval";
import Card from "../../../_shared/ui/Card";

const StyledIntervals = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const IntervalsCard: React.FC<any> = ({ model }) => {

    const intervals = model.getIntervalListPods();

    return (
        <Card title="Intervals">
            <StyledIntervals>
                <ul>
                    {intervals.map(ivl => {
                        const interval = IntervalSpan.fromValue(ivl);
                        return (
                            <li key={interval.preset.id}>
                                <Link to={`/browse/intervals/${interval.preset.id}`}>{interval.getName()}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledIntervals>
        </Card>
    );
};

export default IntervalsCard;
