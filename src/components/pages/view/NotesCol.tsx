import React from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { ChordId, IModelConfig, ModelId, ModelType, NoteId, ScaleId } from "../../../core/models/Model.constants";
import { CHORD_PRESETS, NOTE_PRESETS, SCALE_PRESETS } from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import DropdownInput from "../../inputs/DropdownInput";
import Card, { CardHeader } from "../../ui/Card";
import InputRow from "../../ui/InputRow";

const StyledNotesCol = styled.div`
    .header:not(:first-child) {
        margin-top: 16px;
    }
`;

export const MODEL_TYPE_OPTIONS = [
    {
        id: ModelType.Chord,
        name: 'Chords',
        value: ModelType.Chord,
        data: CHORD_PRESETS
    },
    {
        id: ModelType.Scale,
        name: 'Scales',
        value: ModelType.Scale,
        data: SCALE_PRESETS
    }
]

export interface INotesColProps {
    modelType: typeof MODEL_TYPE_OPTIONS[0];
    modelConfig;
    root: IModelConfig | any;
    model: Chord | Scale;
    setModelType?;
    setModelConfig?;
    setRoot?;
    setModel?;
}

export const DEFAULT_MODEL_TYPE = MODEL_TYPE_OPTIONS[0];
export const DEFAULT_MODEL_CONFIG = MODEL_TYPE_OPTIONS[0].data[0];
export const DEFAULT_ROOT = NOTE_PRESETS[0];
//export const DEFAULT_MODEL = new Chord(DEFAULT_MODEL_CONFIG.modelId, { root: Note.fromId(DEFAULT_ROOT.modelId) })

export const getNewModel = (modelType: ModelType, modelId: ModelId, root: NoteId) => {
    let newModel;
    if (modelType === ModelType.Chord) {
        newModel = new Chord(modelId as ChordId, { root: Note.fromId(root) })
    }
    else if (modelType === ModelType.Scale) {
        newModel = new Scale(modelId as ScaleId, { root: Note.fromId(root) })
    }
    return newModel;
}

const NotesCol: React.FC<INotesColProps> = props => {

    const { modelType, modelConfig, root, setModelType: _setModelType, setModelConfig: _setModelConfig, setRoot: _setRoot, model, setModel } = props;
    const modelOptions = modelType.data;

    const setModelType = type => {
        _setModelType(type);
        _setModelConfig(type.data[0])
    }
    const setModelConfig = config => {
        let newModel = getNewModel(config.modelType, config.modelId, root.modelId);
        _setModelConfig(config);
        setModel(newModel);
    }
    const setRoot = newRoot => {
        let newModel = getNewModel(modelConfig.modelType, modelConfig.modelId, newRoot.modelId);
        _setRoot(newRoot);
        setModel(newModel);
    }

    //console.log('dpb', MODEL_TYPE_OPTIONS, modelType, modelOptions, modelConfig)

    return (
        <StyledNotesCol>
            <CardHeader title="Root" />
            <ul>
                <li>
                    <InputRow label="Key Center">
                        <DropdownInput value={root} setValue={setRoot} options={NOTE_PRESETS} idProperty="modelId" />
                    </InputRow>
                </li>
            </ul>

            <CardHeader title="Intervals" />
            <ul>
                <li>
                    <InputRow label="Model Type">
                        <DropdownInput value={modelType} setValue={setModelType} options={MODEL_TYPE_OPTIONS} idProperty="id" />
                    </InputRow>
                </li>
                <li>
                    <InputRow label="Preset">
                        <DropdownInput value={modelConfig} setValue={setModelConfig} options={modelOptions} idProperty="modelId" />
                    </InputRow>
                </li>
            </ul>
        </StyledNotesCol>
    );
};

export default NotesCol;
