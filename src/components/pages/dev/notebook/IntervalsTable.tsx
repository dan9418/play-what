
import React from 'react';
import styled from 'styled-components';
import { IntervalId } from '../../../../core/models/Model.constants';
import { INTERVAL_PRESET_MAP } from '../../../../core/models/Model.presets';

const StyledIntervalTable = styled.table`
    width: 100%;
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    color: ${({ theme }) => theme.dark1};

    tfoot {
        display: none;
        //border-top: 1px solid ${({ theme }) => theme.utils.border};
        th {
            padding: 4px;    
            text-align: center;
            font-weight: normal;
            color: ${({ theme }) => theme.utils.border};
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
            background-color: ${({ theme }) => theme.action.interactive};
            color: white;
        }

        &.inactive {
            //background-color: ${({ theme }) => theme.light};
            //color: ${({ theme }) => theme.dark1};
        }

        &.active {
            color: white;
            background-color: ${({ theme }) => theme.action.active};
        }
    }
`;

const IntervalButton: React.FC<any> = ({ preset, setIntervals, intervals }) => {
    return (
        <button type="button" className="" onClick={null}>{preset.id}</button>
    );
}


export const IntervalsTable: React.FC = () => {
    return (
        <StyledIntervalTable>
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
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.A2)} /></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.A3)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.A4)} /></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.A5)} /></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.A6)} /></td>
                    <td><div /></td>
                </tr>

                <tr>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.P1)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.m2)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.M2)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.m3)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.M3)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.P4)} /></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.P5)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.m6)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.M6)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.m7)} /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.M7)} /></td>
                </tr>

                <tr>
                    <td><div /></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.d3)}>d3</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.d4)}>d4</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.d5)}>d5</IntervalButton></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.d6)}>d6</IntervalButton></td>
                    <td><div /></td>
                    <td><IntervalButton preset={INTERVAL_PRESET_MAP.get(IntervalId.d7)}>d7</IntervalButton></td>
                    <td><div /></td>
                    <td><div /></td>
                </tr>
            </tbody>
        </StyledIntervalTable>
    );
}
