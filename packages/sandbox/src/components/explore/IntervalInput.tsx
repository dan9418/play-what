import React from 'react';
import styled from 'styled-components';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';

const StyledIntervalInput = styled.div`

    button {
        background-color: #efefef;
        color: ${({ theme }) => theme.medium};
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 4px;
        cursor: pointer;
        font-weight: bold;
        height: 100%;
        width: 100%;

        :hover {
            background-color: ${({ theme }) => theme.active};
            color: white;
        }

        &.inactive {
            background-color: ${({ theme }) => theme.light};
            color: ${({ theme }) => theme.medium};
        }

        &.active {
            background-color: white;
            color: ${({ theme }) => theme.active};
        }
    }

    td, th {
        padding: 4px;
    }

    button {
        background-color: #efefef;
        color: background-color: ${({ theme }) => theme.medium};;
        cursor: pointer;

        &.inactive, &.active {
            background-color: ${({ theme }) => theme.active};
            color: white;
        }
    }

    ${({ $inactiveCols }) => $inactiveCols.map(c => `th:nth-child(${c + 1})`).join(',')}, 
    ${({ $inactiveCols }) => $inactiveCols.map(c => `td:nth-child(${c + 1})`).join(',')} {
        background-color: ${({ theme }) => theme.light};
    }

    tfoot {
        border-top: 1px solid #aaa;
        th {
            padding: 4px;    
            text-align: center;
            font-weight: normal;
            color: ${({ theme }) => theme.medium};
            &.active {
                background-color: ${({ theme }) => theme.light};
                color: ${({ theme }) => theme.medium};
            }
        }
    }
    table {
        width: 100%;
        table-layout: fixed;
        text-align: center;
        border-collapse: collapse;
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
            setIntervals([...intervals, preset.value]);
        }
    }

    return (
        <button type="button" className={classes.join(' ')} onClick={onClick}>{preset.id}</button>
    );
}

const IntervalInput: React.FC<any> = ({ setIntervals, intervals }) => {
    const inactiveCols = intervals.map(i => i[0]);
    return (
        <StyledIntervalInput $inactiveCols={inactiveCols}>
            <table>
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
            </table>
            {/*<table>
                <thead>
                    <tr>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>19</th>
                        <th>20</th>
                        <th>21</th>
                        <th>22</th>
                        <th>23</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.P8)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b9)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x9)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s9)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b11)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x11)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s11)} /></td>
                        <td><div /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.b13)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.x13)} /></td>
                        <td><IntervalButton  intervals={intervals} setIntervals={setIntervals} preset={INTERVAL_PRESET_MAP.get(IntervalId.s13)} /></td>
                    </tr>
                </tbody>
            </table>*/}
        </StyledIntervalInput>
    );
}

export default IntervalInput;
