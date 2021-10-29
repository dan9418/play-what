
import React, { useState } from "react";
import { IntervalsInputManager, intervalsMapper } from "../../../app/src/components/explore/edit-panel/InputManagers";
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import { InputId, PresetTag, PRESET_TYPES } from "../../../core/src/models/Model.constants";
import MASTER_PRESETS from "../../../core/src/models/PodList/PodList.constants";
import DropdownInput from "./DropdownInput";

interface IInputProps {
    setValue: any;
    value: any;
}

export const IntervalsInput: React.FC<IInputProps> = ({ value, setValue }) => {

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
            setValue([]);
        }
        else {
            setValue(x.value);
        }
        _setPreset(x);
    }

    const selectedPresetType = { id: presetType };

    return (
        <>
            <LabelledInput text="Type">
                <DropdownInput value={selectedPresetType} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
            </LabelledInput>
            <LabelledInput text="Preset">
                <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
            </LabelledInput>
        </>
    );
};


export const INTERVALS_INPUTS = [
    {
        propName: '',
        inputMapper: intervalsMapper,
        inputId: InputId.Intervals
    }
];
