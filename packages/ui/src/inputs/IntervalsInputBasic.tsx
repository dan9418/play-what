
import React, { useState } from "react";
import styled from 'styled-components';
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import { PresetTag, PRESET_TYPES } from "../../../core/src/models/Model.constants";
import MASTER_PRESETS from "../../../core/src/models/PodList/PodList.constants";
import DropdownInput from "./DropdownInput";

const StyledIntervalsInputBasic = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    select {
        width: 100%;
        margin-bottom: 8px;
    }
`;

const IntervalsInputBasic: React.FC<any> = editProps => {

    const { intervals, setIntervals } = editProps;

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
            setIntervals([]);
        }
        else {
            setIntervals(x.value);
        }
        _setPreset(x);
    }

    return (
        <StyledIntervalsInputBasic>
            <LabelledInput text="Type">
                <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
            </LabelledInput>
            <LabelledInput text="Preset">
                <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
            </LabelledInput>
        </StyledIntervalsInputBasic>
    );
};

export default IntervalsInputBasic;
