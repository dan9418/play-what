import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { INTERVAL_PRESETS } from "../../../../core/models/Pod/Interval/Interval.constants";
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

    console.log('xxx i', intervals);


    if (!intervals || !intervals.length) return null;

    return (
        <Card title="Intervals">
            <StyledIntervals>
                <ul>
                    {intervals.map(ivl => {
                        const preset = INTERVAL_PRESETS.find(p => PodUtils.areEqual(p.value, ivl));
                        return (
                            <li>
                                <Link to={`/browse/intervals/${preset.id}`}>{preset.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledIntervals>
        </Card>
    );
};

export default IntervalsCard;
