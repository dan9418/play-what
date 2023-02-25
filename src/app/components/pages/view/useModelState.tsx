// import { useState } from "react";
// import { NOTE_PRESETS } from "../../../core/models/Model.constants";
// import {
//   DEFAULT_MODEL_CONFIG,
//   DEFAULT_MODEL_TYPE,
//   DEFAULT_ROOT,
//   getNewModel,
//   MODEL_TYPE_OPTIONS,
// } from "./NotesCol";

// const getInitModelType = (qpModelType?: string) => {
//   const found = MODEL_TYPE_OPTIONS.find(
//     (type) => type.id && type.id === qpModelType
//   );
//   return found || DEFAULT_MODEL_TYPE;
// };

// const getInitModelConfig = (modelType, qpModelId?: string) => {
//   const found = modelType.data.find((preset) => preset.presetId === qpModelId);
//   return found || DEFAULT_MODEL_CONFIG;
// };

// const getInitRoot = (qpRootId?: string) => {
//   const found = NOTE_PRESETS.find((note) => note.presetId === qpRootId);
//   return found || DEFAULT_ROOT;
// };

// export const useModelState = (initModelType, initModelId, initRootId) => {
//   const [modelType, setModelType] = useState(getInitModelType(initModelType));
//   const [modelConfig, setModelConfig] = useState(
//     getInitModelConfig(modelType, initModelId)
//   );

//   const [root, setRoot] = useState(getInitRoot(initRootId));
//   const [model, setModel] = useState(
//     getNewModel(modelType.id, modelConfig.presetId, root.presetId)
//   );

//   return {
//     modelType,
//     setModelType,
//     modelConfig,
//     setModelConfig,
//     root,
//     setRoot,
//     model,
//     setModel,
//   };
// };
