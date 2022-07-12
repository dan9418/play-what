import React, { useState } from "react";
import styled from 'styled-components';
import Keyboard from "../../../viewers/keyboard/Keyboard";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import PageTitle from "../../layout/PageTitle";
import { StyledCard } from "../../ui/Card";
import DetailsCol from "./DetailsCol";
import KeyboardCol, { DEFAULT_KEY_RANGE } from "./KeyboardCol";
import MainCol from "./MainCol";
import NotesCol from "./NotesCol";
import TabCard from "./TabCard";
import useModelQueryParams from "./useModelQueryParams";
import { useModelState } from "./useModelState";

const StyledKeyboardPage = styled.div`
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



const KeyboardPage: React.FC = () => {

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
            <PageTitle title="Keyboard" />
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
                            content: <KeyboardCol {...instrumentColProps} />
                        },
                        {
                            text: 'Notes',
                            content: <NotesCol {...notesColProps} />
                        }
                    ]}
                />
            </ColumnManager>
        </StyledKeyboardPage>
    );
};

export default KeyboardPage;
