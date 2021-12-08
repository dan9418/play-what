import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../../core/models/Interval/Interval.constants";
import IntervalUtils from "../../../../core/models/Interval/Interval.utils";
import ModelUtils from "../../../../core/models/Model.utils";
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

    if (!intervals) return null;

    return (
        <Card title="Intervals">
            <StyledIntervals>
                <ul>
                    {intervals.value.map(ivl => {
                        const preset = INTERVAL_PRESETS.find(p => ModelUtils.areEqual(p.value, ivl));
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
