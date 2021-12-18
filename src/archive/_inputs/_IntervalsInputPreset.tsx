
// import React, { useState } from 'react';
// import { PresetTag, PRESET_TYPES } from '../../core/models/Model.constants';
// import MASTER_PRESETS from '../../core/models/Model.constants';
// import InputRow from '../InputRow';
// import DropdownInput from './DropdownInput';

// const IntervalsInputPreset: React.FC<any> = ({ setIntervals, intervals }) => {
//     const [presetType, _setPresetType] = useState(PresetTag.Chord);
//     const presetTagSet = new Set();
//     const presetOptions = MASTER_PRESETS.filter(preset => {
//         if (preset.tags.includes(presetType)) {
//             preset.tags.forEach(t => presetTagSet.add(t))
//             return true;
//         }
//     });
//     const subtypeOptions = [
//         { id: 'unselected', name: '---' },
//         ...Array.from(presetTagSet).map((v) => ({ name: v, id: v })).slice(1)
//     ];

//     const [presetSubtype, setPresetSubtype] = useState('unselected');

//     const [preset, _setPreset] = useState(null);
//     const filteredPresetOptions = presetSubtype === 'unselected' ?
//         presetOptions :
//         presetOptions.filter(preset => preset.tags.includes(presetSubtype as any));
//     const finalPresetOptions = [
//         { id: 'unselected', name: '---' },
//         ...filteredPresetOptions
//     ];

//     const setPresetType = x => {
//         _setPresetType(x);
//         setPresetSubtype('unselected');
//         _setPreset(null);
//     }

//     const setPreset = (x) => {
//         if (x.id === 'unselected') {
//             setIntervals([]);
//         }
//         else {
//             setIntervals(x.value);
//         }
//         _setPreset(x);
//     }

//     return (
//         <>
//             <InputRow label="Select Category">
//                 <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
//             </InputRow>
//             <InputRow label="Subcategory (optional)">
//                 <DropdownInput value={{ id: presetSubtype }} setValue={x => setPresetSubtype(x.id)} options={subtypeOptions} />
//             </InputRow>
//             <InputRow label="Select Preset">
//                 <DropdownInput value={preset} setValue={setPreset} options={finalPresetOptions} />
//             </InputRow>
//         </>
//     );
// }

// export default IntervalsInputPreset;
