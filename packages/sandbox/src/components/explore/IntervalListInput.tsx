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
    padding: 4px;
    margin: 0 8px;
    border-radius: 4px;
    cursor: pointer;

    &.active {
        background-color: ${({ theme }) => theme.accent};
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

    return (
        <StyledIntervalListInput>
            <IntervalList intervals={intervals} selectedIvl={selectedIvl} setSelectedIvl={setSelectedIvl} />
            <IntervalInput ivl={selectedIvl} setIvl={setSelectedIvl} />
        </StyledIntervalListInput>
    );
}

export default IntervalListInput;
