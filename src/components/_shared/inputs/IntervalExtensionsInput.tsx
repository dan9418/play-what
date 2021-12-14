
import React from 'react';
import styled from 'styled-components';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../core/models/Interval.constants';
import Model from '../../../core/models/Model.utils';

const StyledIntervalTable = styled.table`
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    color: ${({ theme }) => theme.dark1};

    ${({ $inactiveCols }) => $inactiveCols.map(c => `th:nth-child(${c + 1})`).join(',')}, 
    ${({ $inactiveCols }) => $inactiveCols.map(c => `td:nth-child(${c + 1})`).join(',')} {
        background-color: ${({ theme }) => theme.light3};
    }

    tfoot {
        display: none;
        //border-top: 1px solid ${({ theme }) => theme.border};
        th {
            padding: 4px;    
            text-align: center;
            font-weight: normal;
            color: ${({ theme }) => theme.border};
            &.active {
                background-color: ${({ theme }) => theme.light3};
                color: ${({ theme }) => theme.medium};
            }
        }
    }

    td, th {
        padding: 8px;
    }

    button {
        color: ${({ theme }) => theme.medium};
        //border: 1px solid #aaa;
        border: none;
        border-radius: 4px;
        padding: 8px;
        cursor: pointer;
        font-weight: bold;
        height: 100%;
        width: 100%;
        background-color: transparent;
        box-sizing: border-box;

        :hover {
            background-color: ${({ theme }) => theme.clickable};
            color: white;
        }

        &.inactive {
            //background-color: ${({ theme }) => theme.light};
            //color: ${({ theme }) => theme.dark1};
        }

        &.active {
            color: white;
            background-color: ${({ theme }) => theme.active};
        }
    }
`;

const IntervalButton: React.FC<any> = ({ preset, setIntervals, intervals }) => {

    const intervalIndex = intervals.findIndex(ivl => Model.areEqual(ivl, preset.value));
    const intervalIsActive = intervalIndex !== -1;
    const indexOfIvlWithSamePitch = intervals.findIndex(ivl => ivl[0] === preset.value[0]);
    const pitchClassIsTaken = indexOfIvlWithSamePitch !== -1;

    const classes = [];
    if (intervalIsActive) {
        classes.push('active');
    }

    const onClick = () => {
        // Remove existing interval
        if (intervalIsActive) {
            setIntervals([
                ...intervals.slice(0, intervalIndex),
                ...intervals.slice(intervalIndex + 1)
            ])
        }
        // Replace interval
        else if (pitchClassIsTaken) {
            setIntervals([
                ...intervals.slice(0, indexOfIvlWithSamePitch),
                preset.value,
                ...intervals.slice(indexOfIvlWithSamePitch + 1)
            ])
        }
        // Add new interval
        else {
            const newIvls = [...intervals, preset.value];
            setIntervals(Model.sort(newIvls));
        }
    }

    return (
        <button type="button" className={classes.join(' ')} onClick={onClick}>{preset.id}</button>
    );
}


const IntervalsInputTable: React.FC<any> = ({ setIntervals, intervals }) => {
    const inactiveCols = intervals.map(i => i[0]);
    return (
        <StyledIntervalTable $inactiveCols={inactiveCols}>
            <tfoot>
                <tr>
                    <th>0</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b9)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x9)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s9)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b11)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x11)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s11)} /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b13)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x13)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s13)} /></td>
                    <td><div /></td>
                </tr>
            </tbody>
        </StyledIntervalTable >
    );
}

export default IntervalsInputTable;
