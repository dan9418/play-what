import React, { useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../../viewers/fretboard/Fretboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import { StyledCard } from "../../ui/Card";
import FretboardCol, { DEFAULT_FRET_RANGE, DEFAULT_TUNING, DEFAULT_VOICING } from "./FretboardCol";
import MainCol from "./MainCol";
import NotesCol from "./NotesCol";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledFretboardPage = styled.div`
    min-height: 95vh;
    padding: 16px;

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const FretboardPage: React.FC = () => {

    const [qpModelType, qpModelId, qpRootId] = useModelQueryParams();
    const modelState = useModelState(qpModelType, qpModelId, qpRootId);
    const {
        modelType,
        setModelType,
        modelConfig,
        setModelConfig,
        root,
        setRoot,
        model,
        setModel
    } = modelState;

    const [voicing, setVoicing] = useState(DEFAULT_VOICING);
    const [tuning, setTuning] = useState(DEFAULT_TUNING);
    const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);

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
