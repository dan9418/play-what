
// import React from "react";
// import { MASTER_PRESETS } from "../../../core/models/Model.presets";
// import { InputId } from "../../../core/models/Model.constants";
// import TieredDropdownInput, { UNSELECTED_KEY } from "./TieredDropdownInput";

// interface IInputProps {
//     setValue: any;
//     value: any;
// }

// export const PRESET_TIER = {
//     id: 'cat',
//     name: 'Category',
//     options: [],
//     getNextTier: (cat, catIndex, currentTier, parentTiers) => {
//         const options = MASTER_PRESETS.filter(preset => preset.tags.includes(cat.id));
//         return {
//             id: cat.id,
//             name: cat.name,
//             options
//         };
//     }
// };

// export const IntervalsInput: React.FC<IInputProps> = ({ value, setValue }) => {

//     return (
//         <TieredDropdownInput
//             onChange={(v, i, cur, par) => {
//                 console.log(v, i, cur, par);
//                 let intervals = [];
//                 if (v.id !== UNSELECTED_KEY) {
//                     if (cur.id !== 'cat') {
//                         intervals = v.value;
//                     }
//                 }
//                 setValue(intervals);
//             }}
//             currentTier={PRESET_TIER}
//         />
//     );
// };


// export const INTERVALS_INPUTS = [
//     {
//         propName: '',
//         inputMapper: null,
//         inputId: InputId.Intervals
//     }
// ];
