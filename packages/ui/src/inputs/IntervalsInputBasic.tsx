import { PresetTag, PRESET_TYPES } from "@pw/core/src/models/Model.constants";
import MASTER_PRESETS from "@pw/core/src/models/PodList/PodList.constants";
import React, { useState } from "react";
import styled from 'styled-components';
import DropdownInput from "./DropdownInput";

const StyledIntervalsInputBasic = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;
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
            <div className="top">
                <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
            </div>
            <div className="bottom">
                <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
            </div>
        </StyledIntervalsInputBasic>
    );
};

export default IntervalsInputBasic;
