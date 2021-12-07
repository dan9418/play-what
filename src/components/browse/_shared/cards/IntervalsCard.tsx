import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../../core/models/Pod/Interval/Interval.constants";
import IntervalUtils from "../../../../core/models/Pod/Interval/Interval.utils";
import PodUtils from "../../../../core/models/Pod/Pod.utils";
import { intervalsState } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledIntervals = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const IntervalsCard: React.FC<any> = () => {

    const [intervals, setIntervals] = useRecoilState(intervalsState);

    if (!intervals || !intervals.length) return null;

    return (
        <Card title="Intervals">
            <StyledIntervals>
                <ul>
                    {intervals.map(ivl => {
                        const preset = INTERVAL_PRESETS.find(p => PodUtils.areEqual(p.value, ivl));
                        if (!preset) return null;
                        return (
                            <li key={preset.id}>
                                <Link to={`/browse/intervals/${preset.id}`}>{IntervalUtils.getName(ivl)}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledIntervals>
        </Card>
    );
};

export default IntervalsCard;
