import React, { useState } from 'react';
import styled from 'styled-components';
import { IPod } from '../../../../core/src/models/Model.constants';
import { INTERVAL_PRESETS } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import IntervalInput from './IntervalInput';

const StyledIntervalButton = styled.button`
    appearance: none;
    background-color: white;
    border: 1px solid black;
    padding: 8px;
    margin: 0 8px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        background-color: #aaa;
    }

    &.active {
        background-color: ${({ theme }) => theme.active};
        color: white;
        font-weight: bold;
    }
`;

const StyledIconButton = styled.button`
    
`;

const StyledIntervalListInput = styled.div`
    
`;

const StyledIntervalList = styled.div`
    margin: 16px;
    display: flex;
    justify-content: center;
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
            <IntervalInput ivl={selectedIvl} setIvl={setIvl} />
        </StyledIntervalListInput>
    );
}

export default IntervalListInput;
