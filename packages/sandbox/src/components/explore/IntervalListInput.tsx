import React, { useState } from 'react';
import styled from 'styled-components';
import { IPod } from '../../../../core/src/models/Model.constants';
import { INTERVAL_PRESETS } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import IconButton from '../shared/ui/inputs/buttons/IconButton';
import IntervalInput from './IntervalInput';

const StyledIntervalButton = styled.button`
    appearance: none;
    background-color: #eee;
    border: 1px solid #aaa;
    padding: 8px 16px;
    border-radius: 4px 4px 0 0;

    &:hover {
        cursor: pointer;
        background-color: #aaa;
    }

    &.active {
        background-color: ${({ theme }) => theme.active};
        border-color: ${({ theme }) => theme.active};
        color: white;
        font-weight: bold;
    }
`;

const StyledIntervalListInput = styled.div`
    .box {
        border: 3px solid ${({ theme }) => theme.active};
        background-color: #f5f5f5;

        padding: 8px;
        border-radius: 0 8px 8px 8px;

        margin-bottom: 16px;
    }

    .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8px;
        margin-bottom: 8px;

        border-bottom: 1px solid #aaa;
    }
`;

const StyledIntervalList = styled.div`
`;

const IntervalButton: React.FC<any> = ({ pod, intervals, setSelectedIvl, selectedIvl }) => {
    const isSelected = PodUtils.areEqual(pod, selectedIvl);
    const selectedPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, pod));

    const onClick = () => setSelectedIvl(pod);

    return (
        <StyledIntervalButton type="button" className={isSelected ? 'active' : ''} onClick={onClick}>{selectedPreset.id}</StyledIntervalButton>
    );
}

const IntervalList: React.FC<any> = ({ intervals, selectedIvl, setSelectedIvl }) => {
    return (
        <StyledIntervalList>
            {intervals.map(ivl => <IntervalButton key={null} pod={ivl} setSelectedIvl={setSelectedIvl} selectedIvl={selectedIvl} intervals={intervals} />)}
        </StyledIntervalList>
    );
}

const IntervalListInput = ({ intervals, setIntervals }) => {
    const [selectedIvl, setSelectedIvl] = useState<IPod>(intervals[0]);
    const selectedPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, selectedIvl));

    const setIvl = newIvl => {
        const selectedIvlIndex = intervals.findIndex(ivl => PodUtils.areEqual(ivl, selectedIvl));
        console.log(selectedIvlIndex);
        let copy = [];
        // copy = [...intervals, preset.value];
        // copy = [...intervals.slice(0, selectedIvlIndex), ...intervals.slice(selectedIvlIndex + 1)];
        copy = [...intervals.slice(0, selectedIvlIndex), newIvl, ...intervals.slice(selectedIvlIndex + 1)];
        setIntervals(copy);
        setSelectedIvl(newIvl);
    };

    return (
        <StyledIntervalListInput>
            <IntervalList intervals={intervals} selectedIvl={selectedIvl} setSelectedIvl={setSelectedIvl} />
            <div className="box">
                <div className="controls">
                    <h3>{selectedPreset.name}</h3>
                    <div>
                        <IconButton iconId="prev" />
                        <IconButton iconId="next" />
                        <IconButton iconId="delete" />
                    </div>
                </div>
                <IntervalInput ivl={selectedIvl} setIvl={setIvl} />
            </div>
        </StyledIntervalListInput>
    );
}

export default IntervalListInput;
