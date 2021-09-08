import React, { useState } from 'react';
import styled from 'styled-components';
import { PresetTag, PRESET_TYPES } from '../../../../../core/src/models/Model.constants';
import { IntervalId, INTERVAL_PRESET_MAP } from '../../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../../core/src/models/Pod/Pod.utils';
import MASTER_PRESETS from '../../../../../core/src/models/PodList/PodList.constants';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import THEME, { COLOR } from '../../../styles/theme';
import InputRow from '../ui/InputRow';
import ButtonInput from './ButtonInput';
import DropdownInput from './DropdownInput';

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

const StyledIntervalPresetInput = styled.div`
    width: 100%;
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


const IntervalTable: React.FC<any> = ({ setIntervals, intervals }) => {
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


const IntervalPresetInput: React.FC<any> = ({ setIntervals, intervals }) => {
    const [presetType, _setPresetType] = useState(PresetTag.Chord);
    const presetTagSet = new Set();
    const presetOptions = MASTER_PRESETS.filter(preset => {
        if (preset.tags.includes(presetType)) {
            preset.tags.forEach(t => presetTagSet.add(t))
            return true;
        }
    });
    const subtypeOptions = [
        { id: 'unselected', name: '---' },
        ...Array.from(presetTagSet).map((v) => ({ name: v, id: v })).slice(1)
    ];

    const [presetSubtype, setPresetSubtype] = useState('unselected');

    const [preset, _setPreset] = useState(null);
    const filteredPresetOptions = presetSubtype === 'unselected' ?
        presetOptions :
        presetOptions.filter(preset => preset.tags.includes(presetSubtype as any));
    const finalPresetOptions = [
        { id: 'unselected', name: '---' },
        ...filteredPresetOptions
    ];

    const setPresetType = x => {
        _setPresetType(x);
        setPresetSubtype('unselected');
        _setPreset(null);
    }

    const setPreset = (x) => {
        if (x.id === 'unselected') {
            setIntervals([]);
        }
        else {
            setIntervals(x.value);
        }
        _setPreset(x);
    }

    return (
        <StyledIntervalPresetInput>
            <InputRow label="Type">
                <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
            </InputRow>
            <InputRow label="Filter">
                <DropdownInput value={{ id: presetSubtype }} setValue={x => setPresetSubtype(x.id)} options={subtypeOptions} />
            </InputRow>
            <InputRow label="Preset">
                <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
            </InputRow>
        </StyledIntervalPresetInput>
    );
}

const StyledIntervalInput = styled.div`

    .preset-box {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        &.active {
            border: 2px solid ${props => props.theme.text.medium};
            // background-color: ${COLOR.mediumLight};
            border-radius: 8px;
            padding: 16px;
        }
    }

    .button-bar {
        display: flex;
        justify-content: flex-end;

        > button:first-child {
			background-color: ${({ theme }) => theme.surface.highlight};
			color: ${({ theme }) => theme.text.mediumDark};
		}
    }
`

const IntervalInput: React.FC<any> = ({ setIntervals, intervals }) => {
    const [isImporting, setIsImporting] = useState(false);

    return (
        <StyledIntervalInput>
            <IntervalTable setIntervals={setIntervals} intervals={intervals} />
            <div className={`preset-box ${isImporting ? 'active' : ''}`}>
                {!isImporting && <ButtonInput onClick={() => setIsImporting(true)}>Import Preset</ButtonInput>}
                {isImporting &&
                    <>
                        <IntervalPresetInput setIntervals={setIntervals} intervals={intervals} />
                        <div className="button-bar">
                            <ButtonInput onClick={() => setIsImporting(false)}>Cancel</ButtonInput>
                            <ButtonInput onClick={() => setIsImporting(false)}>Done</ButtonInput>
                        </div>
                    </>
                }
            </div>
        </StyledIntervalInput >
    );
}

export default IntervalInput;
