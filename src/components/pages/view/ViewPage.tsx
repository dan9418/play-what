import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ChordId, ModelType, NoteId } from "../../../core/models/Model.constants";
import THEME from "../../../styles/theme";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { TuningId, TUNING_PRESET_MAP } from "../../../viewers/fretboard/Fretboard.tuning";
import Keyboard from "../../../viewers/keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "../../../viewers/keyboard/Keyboard.defaults";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import { getNewModel } from "./NotesCol";

const StyledViewPage = styled(StyledPageBody)`
    ${StyledColumnManager} {
        margin-top: 16px;
    }

    ${StyledCard} {
        border: 1px solid ${THEME.status.highlight};
        &:hover {
            border: 1px solid ${THEME.action.active};
            background-color: ${THEME.status.highlight};
        }

        .fretboard, .keyboard {
            margin: 0;
            & + a {
                padding-top: 16px;
                font-size: 150%;
                font-weight: bold;
                display: block;
                text-align: right;
            }
        }
    }
`;

const COMMON_MODEL = getNewModel(ModelType.Chord, ChordId.MajTriad, NoteId.C);

const COMMON_FRETBOARD_PROPS = {
    model: COMMON_MODEL,
    showFretNumbers: false,
    showFretDots: false
}

const ViewPage: React.FC<any> = () => {

    return (
        <StyledViewPage>
            <PageTitle title="Instruments" subtitle="Choose an instrument" />
            <ColumnManager desktop={['1fr', '1fr']} >
                <Link to='/view/fretboard/'>
                    <Card title="Guitar">
                        <Fretboard
                            {...COMMON_FRETBOARD_PROPS}
                            tuning={TUNING_PRESET_MAP.get(TuningId.Standard).value}
                        />
                    </Card>
                </Link>
                <Link to='/view/keyboard/'>
                    <Card title="Keyboard">
                        <Keyboard
                            model={COMMON_MODEL}
                            keyRange={DEFAULT_KEYBOARD_PROPS.keyRange as [number, number]}
                        />
                    </Card>
                </Link>
            </ColumnManager>
        </StyledViewPage >
    )
};

export default ViewPage;
