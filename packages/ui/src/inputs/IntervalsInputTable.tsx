
import React from 'react';
import styled from 'styled-components';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';

const StyledIntervalTable = styled.table`
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    color: ${({ theme }) => theme.text.mediumDark};

    ${({ $inactiveCols }) => $inactiveCols.map(c => `th:nth-child(${c + 1})`).join(',')}, 
    ${({ $inactiveCols }) => $inactiveCols.map(c => `td:nth-child(${c + 1})`).join(',')} {
        background-color: ${({ theme }) => theme.surface.highlight};
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
                background-color: ${({ theme }) => theme.surface.highlight};
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
            //color: ${({ theme }) => theme.text.mediumDark};
        }

        &.active {
            color: white;
            background-color: ${({ theme }) => theme.active};
        }
    }
`;

const IntervalButton: React.FC<any> = ({ preset, setIntervals, intervals }) => {

    const intervalIndex = intervals.findIndex(ivl => PodUtils.areEqual(ivl, preset.value));
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
            setIntervals(PodListUtils.sort(newIvls));
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
                    <td><div /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.A2)} /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.A3)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.A4)} /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.A5)} /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.A6)} /></td>
                    <td><div /></td>
                </tr>

                <tr>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.P1)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.m2)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.M2)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.m3)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.M3)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.P4)} /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.P5)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.m6)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.M6)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.m7)} /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.M7)} /></td>
                </tr>

                <tr>
                    <td><div /></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.d3)}>d3</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.d4)}>d4</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.d5)}>d5</IntervalButton></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.d6)}>d6</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.d7)}>d7</IntervalButton></td>
                    <td><div /></td>
                    <td><div /></td>
                </tr>
            </tbody>
        </StyledIntervalTable>
    );
}

export default IntervalsInputTable;
