import PW from '@play-what/core';
import React from 'react';
import DropdownInput from '../../UI/DropdownInput/DropdownInput';
import './PresetInput.css';

const formatArray = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const type = arr[i];
        result.push({
            id: type.type,
            name: `=== ${type.type} ===`,
            value: []
        });
        result = [...result, ...Object.values(type.value)];
    }
    return result;
}

const PresetInput = ({ presetData, preset, setPreset }) => {
    const options = Array.isArray(presetData) ? formatArray(presetData) : Object.values(presetData);
    return (
        <div className="preset-input">
            <DropdownInput options={options} value={preset.id} setValue={setPreset} />
        </div>
    );
};

export default PresetInput;
