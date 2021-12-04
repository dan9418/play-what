import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../../core/models/Pod/Interval/Interval.constants";
import PodUtils from "../../../../core/models/Pod/Pod.utils";
import Card from "../../../_shared/ui/Card";

const StyledIntervals = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const IntervalsCard: React.FC<any> = ({ chord }) => {

    const intervals = chord.value.map(pod => INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, pod)));

    return (
        <Card title="Intervals">
            <StyledIntervals>
                <ul>
                    {intervals.map(ivl => (
                        <li>
                            <Link to={`/browse/intervals/${ivl.id.toLowerCase()}`}>{ivl.id}</Link>
                        </li>
                    ))}
                </ul>
            </StyledIntervals>
        </Card>
    );
};

export default IntervalsCard;
