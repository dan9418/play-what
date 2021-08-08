import React from 'react';
import styled from 'styled-components';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';

const StyledIntervalInput = styled.div`
    border: 3px solid ${({ theme }) => theme.active};
    background-color: white;

    padding: 8px;
    border-radius: 8px;
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
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
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
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
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
