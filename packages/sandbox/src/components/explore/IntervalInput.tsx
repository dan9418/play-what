import React from 'react';
import styled from 'styled-components';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../../core/src/models/Pod/Interval/Interval.constants';

const StyledIntervalInput = styled.div`
    th {    
        text-align: center;
    }
    table {
        width: 100%;
        table-layout: fixed;
        text-align: center;
        border-collapse: collapse;
    }
    button {
        background-color: ${({ theme }) => theme.accent};
        color: white;
        border: none;
        :hover {
            background-color: #eee;
            color: ${({ theme }) => theme.accent};
        }

        &.active {
            background-color: ${({ theme }) => theme.active};
            :hover {
                background-color: #eee;
                color: ${({ theme }) => theme.active};
            }
        }

        border-radius: 4px;
        padding: 4px;
        margin: 4px;
        font-size: 150%;
        cursor: pointer;
        height: 90%;
        width: 90%;
    }
`;

const IntervalButton: React.FC<any> = ({ preset, ivl, setIvl }) => {
    const onClick = () => setIvl(preset.value);

    return (
        <button type="button" className={''} onClick={onClick}>{preset.id}</button>
    );
}

const IntervalInput = ({ ivl, setIvl }) => {
    return (
        <StyledIntervalInput>
            <table>
                <thead>
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
                </thead>
                <tbody>
                    <tr>
                        <td><div /></td>
                        <td><div /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.A2)} /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.A3)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.A4)} /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.A5)} /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.A6)} /></td>
                        <td><div /></td>
                    </tr>

                    <tr>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.P1)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.m2)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.M2)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.m3)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.M3)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.P4)} /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.P5)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.m6)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.M6)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.m7)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.M7)} /></td>
                    </tr>

                    <tr>
                        <td><div /></td>
                        <td><div /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.d3)}>d3</IntervalButton></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.d4)}>d4</IntervalButton></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.d5)}>d5</IntervalButton></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.d6)}>d6</IntervalButton></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.d7)}>d7</IntervalButton></td>
                        <td><div /></td>
                        <td><div /></td>
                    </tr>
                </tbody>
            </table>
            <table>
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
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.P8)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.b9)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.x9)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.s9)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.b11)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.x11)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.s11)} /></td>
                        <td><div /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.b13)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.x13)} /></td>
                        <td><IntervalButton ivl={ivl} setIvl={setIvl} preset={INTERVAL_PRESET_MAP.get(IntervalId.s13)} /></td>
                    </tr>
                </tbody>
            </table>
        </StyledIntervalInput>
    );
}

export default IntervalInput;
