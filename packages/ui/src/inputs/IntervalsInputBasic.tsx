
import React, { useState } from "react";
import styled from 'styled-components';
import { PresetTag, PRESET_TYPES } from "../../../core/src/models/Model.constants";
import MASTER_PRESETS from "../../../core/src/models/PodList/PodList.constants";
import DropdownInput from "./DropdownInput";

const StyledIntervalsInputBasic = styled.div`

    label {
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
        letter-spacing: 1px;
        color: #555;
        margin-bottom: 4px;
        display: block;
    }

    select {
        width: 100%;
        margin-bottom: 8px;
    }
`;

const IntervalsInputBasic: React.FC<any> = editProps => {

    const { beforeIntervals, setBeforeIntervals } = editProps;

    const [presetType, _setPresetType] = useState(PresetTag.Chord);

    const presetOptions = MASTER_PRESETS.filter(preset => preset.tags.includes(presetType));

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
            setBeforeIntervals([]);
        }
        else {
            setBeforeIntervals(x.value);
        }
        _setPreset(x);
    }

    return (
        <StyledIntervalsInputBasic>
            <label>Type</label>
            <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
            <label>Preset</label>
            <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
        </StyledIntervalsInputBasic>
    );
};

export default IntervalsInputBasic;
