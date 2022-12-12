import React, { useState } from "react";
import styled from 'styled-components';
import { COLOR_SCHEMES } from "../../../core/color/Color.utils";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { isIntervalInVoicing } from "../../../viewers/fretboard/Fretboard.utils";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import ButtonInput from "../../inputs/ButtonInput";
import PageLayout from "../../layout/PageLayout";
import { StyledCard } from "../../ui/Card";
import Icon from "../../ui/Icon";
import DetailsCol from "./DetailsCol";
import FretboardCol, { DEFAULT_FRET_RANGE, DEFAULT_TUNING, DEFAULT_VOICING } from "./FretboardCol";
import MainCol from "./MainCol";
import NotesCol from "./NotesCol";
import TabCard from "./TabCard";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledFretboardPage = styled(PageLayout)`
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

const Page: React.FC = () => {

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
    const [colorScheme, _setColorScheme] = useState(COLOR_SCHEMES[1]);
    const [colorConfig, setColorConfig] = useState(colorScheme.defaultConfig);

    const setColorScheme = cs => { _setColorScheme(cs); setColorConfig(cs.defaultConfig) }

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
        setModel,
        instrumentName: 'Fretboard',
        instrumentTuning: instrumentColProps.tuning.name,
        colorScheme,
        setColorScheme,
        colorConfig,
        setColorConfig
    }

    const mainColProps = {
        isFullScreen,
        setIsFullScreen,
        viewer: <Fretboard
            {...instrumentColProps}
            {...notesColProps}
            colorMapFn={props => {
                const { stringIndex, fretIndex, tuning, model, voicing } = props;
                const noteIndex = tuning[stringIndex] + fretIndex;
                const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

                const cs = COLOR_SCHEMES.find(cs => cs.id === colorScheme.id);

                if (!cs) return;

                const color = cs.fn(note, interval, colorConfig);

                if (color && voicing && !isIntervalInVoicing(interval, voicing, stringIndex)) {
                    return `${color}33`
                }

                return color;
            }}
            tuning={instrumentColProps.tuning.value}
        />
    };

    return (
        <StyledFretboardPage
            title="Fretboard"
            subtitle={model.name}
            action={
                <ButtonInput className="maximize" onClick={() => setIsFullScreen(true)}>
                    <Icon iconId="maximize" size={24} />
                </ButtonInput>
            }>
            <ColumnManager desktop={["1fr", "1fr"]}>
                <MainCol {...mainColProps} />
                <div>
                    <TabCard
                        tabs={[
                            {
                                text: 'Summary',
                                content: <DetailsCol {...notesColProps} />
                            },
                            {
                                text: 'Notes',
                                content: <NotesCol {...notesColProps} />
                            },
                            {
                                text: 'Instrument',
                                content: <FretboardCol {...instrumentColProps} />
                            }
                        ]}
                    />
                </div>
            </ColumnManager>
        </StyledFretboardPage >
    );
};

export default Page;
