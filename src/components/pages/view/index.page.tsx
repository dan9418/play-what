import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ChordId, ModelType, NoteId } from "../../../core/models/Model.constants";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { TuningId, TUNING_PRESET_MAP } from "../../../viewers/fretboard/Fretboard.tuning";
import Keyboard from "../../../viewers/keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "../../../viewers/keyboard/Keyboard.defaults";
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card, { StyledCard } from "../../ui/Card";
import { getNewModel } from "./NotesCol";

const StyledViewPage = styled(PageLayout)`


    ${StyledCard} {
        background-color: ${props => props.theme.surface.card};
        border: 1px solid ${props => props.theme.status.interactive};
        &:hover {
            border-color: ${props => props.theme.status.active};
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
        .text {
            color: ${props => props.theme.text.secondary};
            margin: 16px 0;
        }
        
    }
`;

const COMMON_MODEL = getNewModel(ModelType.Chord, ChordId.MajTriad, NoteId.C);

const COMMON_FRETBOARD_PROPS = {
    model: COMMON_MODEL,
    showFretNumbers: false,
    showFretDots: false
}

const Page: React.FC<any> = () => {

    return (
        <StyledViewPage title="Instruments" subtitle="Choose an instrument type">
            <ColumnManager  tablet={['1fr', '1fr']} >
                <Link to='/view/fretboard/'>
                    <Card title="Fretboard">
                        <div className="text">
                            Guitar, Bass, Mandolin, etc...
                        </div>
                        <Fretboard
                            {...COMMON_FRETBOARD_PROPS}
                            tuning={TUNING_PRESET_MAP.get(TuningId.Standard).value}
                        />
                    </Card>
                </Link>
                <Link to='/view/keyboard/'>
                    <Card title="Keyboard">
                        <div className="text">
                            Piano, Synthesizer, etc...
                        </div>
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

export default Page;
