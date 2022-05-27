import React, { useState } from "react";
import styled from 'styled-components';
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import { StyledCard } from "../../ui/Card";
import InstrumentCol, { DEFAULT_FRET_RANGE, DEFAULT_TUNING, DEFAULT_VOICING } from "./InstrumentCol";
import MainCol from "./MainCol";
import NotesCol, { DEFAULT_MODEL, DEFAULT_MODEL_CONFIG, DEFAULT_MODEL_TYPE, DEFAULT_ROOT } from "./NotesCol";

const StyledFretboardPage = styled.div`
    min-height: 95vh;
    padding: 16px;

    .view-header {
        padding: 0 16px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.text.primary};
        line-height: 48px;
        font-size: 140%;
        font-weight: bold;

        position: fixed;
        top: 48px;
        left: 0;
        right: 0;
        z-index: 2001;

        background-color: ${({ theme }) => theme.surface.card};
        border-bottom: 1px solid ${({ theme }) => theme.utils.border};
    }

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const FretboardPage: React.FC = () => {

    const [voicing, setVoicing] = useState(DEFAULT_VOICING);
    const [tuning, setTuning] = useState(DEFAULT_TUNING);
    const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);

    const [modelType, setModelType] = useState(DEFAULT_MODEL_TYPE);
    const [modelConfig, setModelConfig] = useState(DEFAULT_MODEL_CONFIG);
    const [root, setRoot] = useState(DEFAULT_ROOT);
    const [model, setModel] = useState(DEFAULT_MODEL);

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

    return (
        <StyledFretboardPage>
            <div className="view-header">
                <span>View</span>
            </div>
            <ColumnManager tablet={["1fr", "2fr"]} desktop={["1fr", "2fr", "1fr"]}>
                <InstrumentCol {...instrumentColProps} />
                <MainCol {...instrumentColProps} {...notesColProps} />
                <NotesCol {...notesColProps} />
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default FretboardPage;
