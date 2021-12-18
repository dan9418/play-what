import React from "react";
import styled from 'styled-components';
import { NoteId, ScaleId } from "../../core/models/Model.constants";
import Note from "../../core/models/Note";
import Scale from "../../core/models/Scale";
import Fretboard from "../../viewers/fretboard/Fretboard";
import { getFretboardProps } from "../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESET_MAP } from "../../viewers/fretboard/Fretboard.voicing";
import { StyledPageBody } from "../_shared/layout/PageBody";
import PageTitle from "../_shared/layout/PageTitle";
import Card, { StyledCard } from "../_shared/ui/Card";

const StyledPracticePage = styled(StyledPageBody)`
	width: 100%;
    max-width: 1024px;
    margin: auto;
    
    ${StyledCard} {
        margin-top: 16px;
    }
`;

const PracticePage: React.FC<any> = () => {
    const root = new Note(NoteId.E);
    const scale = new Scale(ScaleId.Ionian, { root: root.id });

    const items = [
        {
            model: Scale,
            modelId: ScaleId.Ionian,
            rootId: scale.notes[0].id,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_2
        },
        {
            model: Scale,
            modelId: ScaleId.Dorian,
            rootId: scale.notes[1].id,
            voicingId: VoicingId.Scale_DoubleOctave_DShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Phrygian,
            rootId: scale.notes[2].id,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Lydian,
            rootId: scale.notes[3].id,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_2
        },
        {
            model: Scale,
            modelId: ScaleId.Mixolydian,
            rootId: scale.notes[4].id,
            voicingId: VoicingId.Scale_DoubleOctave_AShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Aeolian,
            rootId: scale.notes[5].id,
            voicingId: VoicingId.Scale_DoubleOctave_GShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Locrian,
            rootId: scale.notes[6].id,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_1
        }
    ]

    return (
        <StyledPracticePage>
            <PageTitle title="Practice" />
            <Card title="CAGED" >
                {items.map(item => {
                    const { model, modelId, rootId, voicingId } = item;
                    return (
                        <>
                            <h3>{item.modelId}</h3>
                            <Fretboard {...getFretboardProps(
                                new model(modelId, { root: rootId }),
                                VOICING_PRESET_MAP.get(voicingId),
                            )} />
                        </>
                    );
                })};
            </Card>
        </StyledPracticePage>
    );
};

export default PracticePage;
