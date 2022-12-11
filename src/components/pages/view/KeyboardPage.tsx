import React, { useState } from "react";
import styled from 'styled-components';
import { COLOR_SCHEMES } from "../../../core/color/Color.utils";
import Keyboard from "../../../viewers/keyboard/Keyboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import { StyledCard } from "../../ui/Card";
import DetailsCol from "./DetailsCol";
import KeyboardCol, { DEFAULT_KEY_RANGE } from "./KeyboardCol";
import MainCol from "./MainCol";
import NotesCol from "./NotesCol";
import TabCard from "./TabCard";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledKeyboardPage = styled(PageLayout)`
    min-height: 95vh;
    padding: 16px;

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    ${StyledColumnManager} {
        margin-top: 16px;
    }
`;

export const Page: React.FC = () => {

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

    const [keyRange, setKeyRange] = useState<[number, number]>(DEFAULT_KEY_RANGE);
    const [colorScheme, _setColorScheme] = useState(COLOR_SCHEMES[1]);
    const [colorConfig, setColorConfig] = useState(colorScheme.defaultConfig);

    const setColorScheme = cs => { _setColorScheme(cs); setColorConfig(cs.defaultConfig) }

    const instrumentColProps = {
        model,
        keyRange,
        setKeyRange,
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
        colorScheme,
        setColorScheme,
        colorConfig,
        setColorConfig,
        instrumentName: 'Keyboard',
        instrumentTuning: ''
    }

    const mainColProps = {
        title: 'Keyboard',
        viewer: <Keyboard
            {...instrumentColProps}
            {...notesColProps}
            colorMapFn={props => {
                const { noteIndex, model } = props;
                const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

                const cs = COLOR_SCHEMES.find(cs => cs.id === colorScheme.id);

                if (!cs) return;

                const color = cs.fn(note, interval, colorConfig);

                return color;
            }}
        />
    };

    return (
        <StyledKeyboardPage title="Keyboard" >
            <ColumnManager desktop={["1fr", "1fr"]}>
                <MainCol {...mainColProps} />
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
                            content: <KeyboardCol {...instrumentColProps} />
                        }
                    ]}
                />
            </ColumnManager>
        </StyledKeyboardPage>
    );
};
