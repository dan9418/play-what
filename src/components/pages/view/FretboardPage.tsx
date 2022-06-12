import React, { useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import { StyledCard } from "../../ui/Card";
import FretboardCol, { DEFAULT_FRET_RANGE, DEFAULT_TUNING, DEFAULT_VOICING } from "./FretboardCol";
import MainCol from "./MainCol";
import NotesCol, { DEFAULT_MODEL_CONFIG, DEFAULT_MODEL_TYPE, DEFAULT_ROOT, getNewModel, MODEL_TYPE_OPTIONS } from "./NotesCol";

const StyledFretboardPage = styled.div`
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

const FretboardPage: React.FC = () => {

    const [qpModelType] = useQueryParam('modelType');
    const [qpModelId] = useQueryParam('modelId');
    const [qpRootId] = useQueryParam('rootId');

    const [voicing, setVoicing] = useState(DEFAULT_VOICING);
    const [tuning, setTuning] = useState(DEFAULT_TUNING);
    const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);

    const [modelType, setModelType] = useState(getInitModelType(qpModelType as string));
    const [modelConfig, setModelConfig] = useState(getInitModelConfig(modelType, qpModelId as string));

    const [root, setRoot] = useState(getInitRoot(qpRootId as string));
    const [model, setModel] = useState(getNewModel(modelType.id, modelConfig.modelId, root.modelId));

    const instrumentColProps = {
        model,
        voicing,
        setVoicing,
        tuning,
        setTuning,
        fretRange,
        setFretRange
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
        title: 'Fretboard',
        viewer: <Fretboard
            {...instrumentColProps}
            {...notesColProps}
            tuning={instrumentColProps.tuning.value}
        />
    };

    return (
        <StyledFretboardPage>
            <ColumnManager tablet={["1fr", "2fr"]} desktop={["1fr", "2fr", "1fr"]}>
                <FretboardCol {...instrumentColProps} />
                <MainCol {...mainColProps} />
                <NotesCol {...notesColProps} />
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default FretboardPage;
