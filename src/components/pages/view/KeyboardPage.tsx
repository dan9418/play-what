import React, { useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import Keyboard from "../../../viewers/keyboard/Keyboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import { StyledCard } from "../../ui/Card";
import KeyboardCol, { DEFAULT_KEY_RANGE } from "./KeyboardCol";
import MainCol from "./MainCol";
import NotesCol, { DEFAULT_MODEL_CONFIG, DEFAULT_MODEL_TYPE, DEFAULT_ROOT, getNewModel, MODEL_TYPE_OPTIONS } from "./NotesCol";

const StyledKeyboardPage = styled.div`
    min-height: 95vh;
    padding: 16px;

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const getInitModelType = (qpModelType?: string) => {
    const found = MODEL_TYPE_OPTIONS.find(type => type.id && type.id === qpModelType);
    return found || DEFAULT_MODEL_TYPE;
}

const getInitModelConfig = (modelType, qpModelId?: string) => {
    const found = modelType.data.find(preset => preset.modelId === qpModelId);
    return found || DEFAULT_MODEL_CONFIG;
}

const getInitRoot = (qpRootId?: string) => {
    const found = NOTE_PRESETS.find(note => note.modelId === qpRootId);
    return found || DEFAULT_ROOT;
}

const KeyboardPage: React.FC = () => {

    const [qpModelType] = useQueryParam('modelType');
    const [qpModelId] = useQueryParam('modelId');
    const [qpRootId] = useQueryParam('rootId');

    const [keyRange, setKeyRange] = useState<[number, number]>(DEFAULT_KEY_RANGE);

    const [modelType, setModelType] = useState(getInitModelType(qpModelType as string));
    const [modelConfig, setModelConfig] = useState(getInitModelConfig(modelType, qpModelId as string));

    const [root, setRoot] = useState(getInitRoot(qpRootId as string));
    const [model, setModel] = useState(getNewModel(modelType.id, modelConfig.modelId, root.modelId));

    const instrumentColProps = {
        model,
        keyRange,
        setKeyRange
    }

    const notesColProps = {
        modelType,
        setModelType,
        modelConfig,
        setModelConfig,
        root,
        setRoot,
        model,
        setModel
    }

    const mainColProps = {
        title: 'Keyboard',
        viewer: <Keyboard
            {...instrumentColProps}
            {...notesColProps}
        />
    };

    return (
        <StyledKeyboardPage>
            <ColumnManager tablet={["1fr", "2fr"]} desktop={["1fr", "2fr", "1fr"]}>
                <KeyboardCol {...instrumentColProps} />
                <MainCol {...mainColProps} />
                <NotesCol {...notesColProps} />
            </ColumnManager>
        </StyledKeyboardPage>
    );
};

export default KeyboardPage;
