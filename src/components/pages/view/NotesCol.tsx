import React from "react";
import { COLOR_SCHEMES, IColorScheme } from "../../../core/color/Color.utils";
import Chord from "../../../core/models/Chord";
import {
  ChordId,
  IModelConfig,
  ModelId,
  ModelType,
  NoteId,
  ScaleId,
} from "../../../core/models/Model.constants";
import {
  CHORD_PRESETS,
  NOTE_PRESETS,
  SCALE_PRESETS,
} from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import ColorSchemeInput from "../../inputs/ColorSchemeInput";
import DropdownInput from "../../inputs/DropdownInput";
import InputRow from "../../ui/InputRow";
import CardSection from "./CardSection";

export const MODEL_TYPE_OPTIONS = [
  {
    id: ModelType.Chord,
    name: "Chords",
    value: ModelType.Chord,
    data: CHORD_PRESETS,
  },
  {
    id: ModelType.Scale,
    name: "Scales",
    value: ModelType.Scale,
    data: SCALE_PRESETS,
  },
];

export interface INotesColProps {
  modelType: typeof MODEL_TYPE_OPTIONS[0];
  modelConfig;
  root: IModelConfig | any;
  model: Chord | Scale;
  setModelType?;
  setModelConfig?;
  setRoot?;
  setModel?;
  colorScheme: IColorScheme;
  setColorScheme;
  colorConfig: string[];
  setColorConfig;
}

export const DEFAULT_MODEL_TYPE = MODEL_TYPE_OPTIONS[0];
export const DEFAULT_MODEL_CONFIG = MODEL_TYPE_OPTIONS[0].data[0];
export const DEFAULT_ROOT = NOTE_PRESETS[0];

export const getNewModel = (
  modelType: ModelType,
  presetId: ModelId,
  root: NoteId
) => {
  let newModel;
  if (modelType === ModelType.Chord) {
    newModel = new Chord(presetId as ChordId, { root: Note.fromId(root) });
  } else if (modelType === ModelType.Scale) {
    newModel = new Scale(presetId as ScaleId, { root: Note.fromId(root) });
  }
  return newModel;
};

const NotesCol: React.FC<INotesColProps> = (props) => {
  const {
    modelType,
    modelConfig,
    root,
    setModelType: _setModelType,
    setModelConfig: _setModelConfig,
    setRoot: _setRoot,
    model,
    setModel,
    colorScheme,
    setColorScheme,
    colorConfig,
    setColorConfig,
  } = props;
  const modelOptions = modelType.data;

  const setModelType = (type) => {
    _setModelType(type);
    _setModelConfig(type.data[0]);
  };
  const setModelConfig = (config) => {
    let newModel = getNewModel(
      config.modelType,
      config.presetId,
      root.presetId
    );
    _setModelConfig(config);
    setModel(newModel);
  };
  const setRoot = (newRoot) => {
    let newModel = getNewModel(
      modelConfig.modelType,
      modelConfig.presetId,
      newRoot.presetId
    );
    _setRoot(newRoot);
    setModel(newModel);
  };

  //console.log('dpb', MODEL_TYPE_OPTIONS, modelType, modelOptions, modelConfig)

  return (
    <>
      <CardSection title="Root">
        <InputRow label="Key Center">
          <DropdownInput
            value={root}
            setValue={setRoot}
            options={NOTE_PRESETS}
            idProperty="presetId"
          />
        </InputRow>
      </CardSection>
      <CardSection title="Intervals">
        <InputRow label="Model Type">
          <DropdownInput
            value={modelType}
            setValue={setModelType}
            options={MODEL_TYPE_OPTIONS}
            idProperty="id"
          />
        </InputRow>
        <InputRow label="Preset">
          <DropdownInput
            value={modelConfig}
            setValue={setModelConfig}
            options={modelOptions}
            idProperty="presetId"
          />
        </InputRow>
      </CardSection>
      <CardSection title="Colors">
        <InputRow label="Color Scheme">
          <DropdownInput
            value={colorScheme}
            setValue={setColorScheme}
            options={COLOR_SCHEMES}
            idProperty="id"
          />
        </InputRow>
        <InputRow label="Color Config">
          <ColorSchemeInput
            value={colorConfig}
            setValue={setColorConfig}
            labelFn={colorScheme.labelFn}
          />
        </InputRow>
      </CardSection>
    </>
  );
};

export default NotesCol;
