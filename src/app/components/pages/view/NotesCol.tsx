import React from "react";
import CardSection from "./CardSection";
import { PresetType } from "../../../../core/Core.constants";
import { CHORD_PRESETS } from "../../../../core/Chord.constants";
import { SCALE_PRESETS } from "../../../../core/Scale.constants";
import { IColorSchemePreset } from "../../../../core/Color.utils";
import { NOTE_PRESETS, NoteId } from "../../../../core/Note.constants";
import { PresetId } from "../../../../core/Core.derived";

export const MODEL_TYPE_OPTIONS = [
  {
    id: PresetType.Chord,
    name: "Chords",
    value: PresetType.Chord,
    data: CHORD_PRESETS,
  },
  {
    id: PresetType.Scale,
    name: "Scales",
    value: PresetType.Scale,
    data: SCALE_PRESETS,
  },
];

// export interface INotesColProps {
//   modelType: typeof MODEL_TYPE_OPTIONS[0];
//   modelConfig;
//   root:  any;
//   model: any;
//   setModelType?;
//   setModelConfig?;
//   setRoot?;
//   setModel?;
//   colorScheme: IColorSchemePreset;
//   setColorScheme;
//   colorConfig: string[];
//   setColorConfig;
// }

// export const DEFAULT_MODEL_TYPE = MODEL_TYPE_OPTIONS[0];
// export const DEFAULT_MODEL_CONFIG = MODEL_TYPE_OPTIONS[0].data[0];
// export const DEFAULT_ROOT = NOTE_PRESETS[0];

// export const getNewModel = (
//   presetType: PresetType,
//   presetId: PresetId,
//   root: NoteId
// ) => {
//   let newModel;
//   if (presetType === PresetType.Chord) {
//     newModel = new Chord(presetId as ChordId, { root: getNoteFromId(root) });
//   } else if (presetType === PresetType.Scale) {
//     newModel = new Scale(presetId as ScaleId, { root: getNoteFromId(root) });
//   }
//   return newModel;
// };

// const NotesCol: React.FC<INotesColProps> = (props) => {
//   const {
//     modelType,
//     modelConfig,
//     root,
//     setModelType: _setModelType,
//     setModelConfig: _setModelConfig,
//     setRoot: _setRoot,
//     model,
//     setModel,
//     colorScheme,
//     setColorScheme,
//     colorConfig,
//     setColorConfig,
//   } = props;
//   const modelOptions = modelType.data;

//   const setModelType = (type) => {
//     _setModelType(type);
//     _setModelConfig(type.data[0]);
//   };
//   const setModelConfig = (config) => {
//     let newModel = getNewModel(
//       config.modelType,
//       config.presetId,
//       root.presetId
//     );
//     _setModelConfig(config);
//     setModel(newModel);
//   };
//   const setRoot = (newRoot) => {
//     let newModel = getNewModel(
//       modelConfig.modelType,
//       modelConfig.presetId,
//       newRoot.presetId
//     );
//     _setRoot(newRoot);
//     setModel(newModel);
//   };

//   //console.log('dpb', MODEL_TYPE_OPTIONS, modelType, modelOptions, modelConfig)

//   return (
//     <>
//       <CardSection title="Root">
//         <InputRow label="Key Center">
//           <DropdownInput
//             value={root}
//             setValue={setRoot}
//             options={NOTE_PRESETS}
//             idProperty="presetId"
//           />
//         </InputRow>
//       </CardSection>
//       <CardSection title="Intervals">
//         <InputRow label="Model Type">
//           <DropdownInput
//             value={modelType}
//             setValue={setModelType}
//             options={MODEL_TYPE_OPTIONS}
//             idProperty="id"
//           />
//         </InputRow>
//         <InputRow label="Preset">
//           <DropdownInput
//             value={modelConfig}
//             setValue={setModelConfig}
//             options={modelOptions}
//             idProperty="presetId"
//           />
//         </InputRow>
//       </CardSection>
//       <CardSection title="Colors">
//         <InputRow label="Color Scheme">
//           <DropdownInput
//             value={colorScheme}
//             setValue={setColorScheme}
//             options={COLOR_SCHEMES}
//             idProperty="id"
//           />
//         </InputRow>
//         <InputRow label="Color Config">
//           <ColorSchemeInput
//             value={colorConfig}
//             setValue={setColorConfig}
//             labelFn={colorScheme.labelFn}
//           />
//         </InputRow>
//       </CardSection>
//     </>
//   );
// };

// export default NotesCol;
