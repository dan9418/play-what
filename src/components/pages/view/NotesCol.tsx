import React from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { ModelType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS, NOTE_PRESETS, SCALE_PRESETS } from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import DropdownInput from "../../inputs/DropdownInput";
import Card from "../../ui/Card";
import InputRow from "../../ui/InputRow";

const StyledNotesCol = styled.div`
    
`;

const TYPE_OPTIONS = [
    {
        id: ModelType.Chord,
        name: 'Chords',
        value: ModelType.Chord,
        data: CHORD_PRESETS
    },
    {
        id: ModelType.Scale,
        name: 'Scales',
        value: ModelType.Chord,
        data: SCALE_PRESETS
    }
]

export interface INotesColProps {
    modelType: typeof TYPE_OPTIONS[0];
    modelConfig;
    root: Note;
    setModelType?;
    setModelConfig?;
    setRoot?;
}

export const DEFAULT_MODEL_TYPE = TYPE_OPTIONS[0];
export const DEFAULT_MODEL_CONFIG = TYPE_OPTIONS[0].data[0];
export const DEFAULT_ROOT = NOTE_PRESETS[0];
export const DEFAULT_MODEL = new Chord(DEFAULT_MODEL_CONFIG.modelId, { root: Note.fromId(DEFAULT_ROOT.modelId) })

const NotesCol: React.FC<INotesColProps> = props => {

    const { modelType, modelConfig, root, setModelType: _setModelType, setModelConfig, setRoot } = props;

    const setModelType = type => { setModelType(type); setModelConfig(type.data[0]) }

    const modelOptions = modelType.data;

    let model;
    if (modelType.id === ModelType.Chord) {
        model = new Chord(modelConfig.modelId, { root: Note.fromId(root.modelId) })
    }
    else if (modelType.id === ModelType.Scale) {
        model = new Scale(modelConfig.modelId, { root: Note.fromId(root.modelId) })
    }

    return (
        <StyledNotesCol>
            <Card title="Root">
                <ul className="edit">
                    <li>
                        <InputRow label="Key Center">
                            <DropdownInput value={root} setValue={setRoot} options={NOTE_PRESETS} />
                        </InputRow>
                    </li>
                </ul>
            </Card>
            <Card title="Intervals">
                <ul className="edit">
                    <li>
                        <InputRow label="Model Type">
                            <DropdownInput value={modelType} setValue={setModelType} options={TYPE_OPTIONS} />
                        </InputRow>
                    </li>
                    <li>
                        <InputRow label="Preset">
                            <DropdownInput value={modelConfig} setValue={setModelConfig} options={modelOptions} />
                        </InputRow>
                    </li>
                </ul>
            </Card>
        </StyledNotesCol>
    );

};

export default NotesCol;
