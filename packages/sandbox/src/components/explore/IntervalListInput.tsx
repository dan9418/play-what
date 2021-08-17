import React, { useState } from 'react';
import styled from 'styled-components';
import { IPod } from '../../../../core/src/models/Model.constants';
import { INTERVAL_PRESETS } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import IntervalInput from './IntervalInput';

const StyledIntervalButton = styled.button`
    appearance: none;
    background-color: ${({ theme }) => theme.accent};
    color: white;
    font-weight: bold;

    border: 1px solid #aaa;
    padding: 16px;
    margin: 8px;
    border-radius: 100%;

    &.insert {
        background-color: #eee;
        color: #aaa;
        
        padding: 8px;

        width: 32px;
        height: 32px;
    }

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.active};
        color: white;
    }

    &.active {
        background-color: ${({ theme }) => theme.active};
        border-color: ${({ theme }) => theme.active};
        color: white;
        font-weight: bold;
    }
`;

const StyledIntervalListInput = styled.div`
    // border: 1px solid ${({ theme }) => theme.medium};
    background-color: #f5f5f5;

    padding: 8px;
    border-radius: 4px;

    margin-bottom: 16px;

    .ivl-name {
        text-align: center;
        margin-top: 16px;
        margin-bottom: 0;
    }
    .ivl-summary {
        text-align: center;
        margin-bottom: 24px;
        margin-top: 4px;
        font-style: italic;
        color: #555;
    }
    
`;

const StyledIntervalList = styled.div`
    text-align: center;
    margin-bottom: 16px;
    //border: 1px solid ${({ theme }) => theme.medium};
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
            <StyledIntervalButton className="insert">+</StyledIntervalButton>
            {intervals.map(ivl => (
                <>
                    <IntervalButton key={null} pod={ivl} setSelectedIvl={setSelectedIvl} selectedIvl={selectedIvl} intervals={intervals} />
                    <StyledIntervalButton className="insert">+</StyledIntervalButton>
                </>
            ))}
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
            <h2 className="ivl-name">{selectedPreset.name}</h2>
            <div className="ivl-summary">p = {selectedIvl[0]}, d = {selectedIvl[1]}</div>
            <IntervalList intervals={intervals} selectedIvl={selectedIvl} setSelectedIvl={setSelectedIvl} />
            <IntervalInput intervals={intervals} ivl={selectedIvl} setIvl={setIvl} />
        </StyledIntervalListInput>
    );
}

export default IntervalListInput;
