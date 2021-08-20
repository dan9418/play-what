import React from 'react';
import styled from 'styled-components';
import { INTERVAL_PRESETS } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';

const StyledIntervalButton = styled.button`
    appearance: none;
    color: ${({ theme }) => theme.medium};
    background-color: #efefef;
    font-weight: bold;

    border: 1px solid #aaa;
    padding: 16px;
    margin: 8px;
    border-radius: 100%;

    &.insert {
        background-color: ${({ theme }) => theme.accent};
        color: white;
        
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

const IntervalSelector: React.FC<any> = ({ intervals, selectedIvl, setSelectedIvl }) => {
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

export default IntervalSelector;
