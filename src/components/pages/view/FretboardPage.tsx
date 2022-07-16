import React, { useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../../viewers/fretboard/Fretboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import ButtonInput from "../../inputs/ButtonInput";
import PageTitle from "../../layout/PageTitle";
import { StyledCard } from "../../ui/Card";
import Icon from "../../ui/Icon";
import DetailsCol from "./DetailsCol";
import FretboardCol, { DEFAULT_FRET_RANGE, DEFAULT_TUNING, DEFAULT_VOICING } from "./FretboardCol";
import MainCol from "./MainCol";
import NotesCol from "./NotesCol";
import TabCard from "./TabCard";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledFretboardPage = styled.div`
    min-height: 95vh;
    padding: 16px;
    .maximize {
        background-color: transparent !important;
    }

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    ${StyledColumnManager} {
        margin-top: 16px;
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
    const [isFullScreen, setIsFullScreen] = useState(false);

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
        isFullScreen,
        setIsFullScreen,
        viewer: <Fretboard
            {...instrumentColProps}
            {...notesColProps}
            tuning={instrumentColProps.tuning.value}
        />
    };

    return (
        <StyledFretboardPage>
            <PageTitle title="Fretboard" subtitle={model.name}
                action={
                    <ButtonInput className="maximize" onClick={() => setIsFullScreen(true)}>
                        <Icon iconId="maximize" size={24} />
                    </ButtonInput>
                }
            />
            <ColumnManager desktop={["1fr", "1fr"]}>
                <MainCol {...mainColProps} />
                <TabCard
                    tabs={[
                        {
                            text: 'Summary',
                            content: <DetailsCol {...notesColProps} />
                        },
                        {
                            text: 'Instrument',
                            content: <FretboardCol {...instrumentColProps} />
                        },
                        {
                            text: 'Notes',
                            content: <NotesCol {...notesColProps} />
                        }
                    ]}
                />
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default FretboardPage;
