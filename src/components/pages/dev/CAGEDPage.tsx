import React, { useState } from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { ChordId, NoteId, ScaleId } from "../../../core/models/Model.constants";
import { NOTE_PRESETS, NOTE_PRESET_MAP } from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { VoicingId, VOICING_PRESET_MAP } from "../../../viewers/fretboard/Fretboard.voicing";
import DropdownInput from "../../inputs/DropdownInput";
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import InputRow, { StyledInputRow } from "../../ui/InputRow";

const StyledCAGEDPage = styled(StyledPageBody)`
	width: 100%;
    max-width: 100%;
    margin: auto;
    
    ${StyledCard}, ${StyledInputRow} {
        margin-top: 16px;
        table {
            width: 100%;

            td {
                width: 33%;
                padding: 0 2px;
            }
        }
    }
`;

const CAGEDPage: React.FC<any> = () => {
    const [rootPreset, setRootPreset] = useState(NOTE_PRESET_MAP.get(NoteId.Fs));

    const root = new Note(rootPreset.value);
    const scale = new Scale(ScaleId.Ionian, { root });

    const diatonicItems = [
        {
            model: Scale,
            modelId: ScaleId.Ionian,
            rootId: scale.notes[0].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_2
        },
        {
            model: Scale,
            modelId: ScaleId.Dorian,
            rootId: scale.notes[1].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_DShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Phrygian,
            rootId: scale.notes[2].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Lydian,
            rootId: scale.notes[3].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_2
        },
        {
            model: Scale,
            modelId: ScaleId.Mixolydian,
            rootId: scale.notes[4].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_AShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Aeolian,
            rootId: scale.notes[5].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_GShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Locrian,
            rootId: scale.notes[6].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_1
        }
    ];

    const romanNumeralItems = [
        {
            model: Chord,
            modelId: ChordId.Maj7,
            rootId: scale.notes[0].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_2
        },
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: scale.notes[1].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_DShape_1
        },
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: scale.notes[2].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_1
        },
        {
            model: Chord,
            modelId: ChordId.Maj7,
            rootId: scale.notes[3].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_2
        },
        {
            model: Chord,
            modelId: ChordId.Dom7,
            rootId: scale.notes[4].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_AShape_1
        },
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: scale.notes[5].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_GShape_1
        },
        {
            model: Chord,
            modelId: ChordId.HalfDim7,
            rootId: scale.notes[6].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_1
        }
    ];

    const pentatonicItems = [
        {
            model: Scale,
            modelId: ScaleId.MajorPentatonic,
            rootId: scale.notes[0].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_EShape_2
        },
        {
            model: Scale,
            modelId: ScaleId.Egyptian,
            rootId: scale.notes[1].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_DShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.ManGong,
            rootId: scale.notes[2].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.Ritusen,
            rootId: scale.notes[4].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_AShape_1
        },
        {
            model: Scale,
            modelId: ScaleId.MinorPentatonic,
            rootId: scale.notes[5].modelId,
            voicingId: VoicingId.Scale_DoubleOctave_CShape_1
        }
    ];

    const display = [
        [pentatonicItems[0], diatonicItems[0], romanNumeralItems[0]],
        [pentatonicItems[1], diatonicItems[1], romanNumeralItems[1]],
        [pentatonicItems[2], diatonicItems[2], romanNumeralItems[2]],
        [pentatonicItems[3], diatonicItems[4], romanNumeralItems[4]],
        [pentatonicItems[4], diatonicItems[5], romanNumeralItems[5]],
    ]

    return (
        <StyledCAGEDPage>
            <PageTitle title="CAGED" />
            <InputRow label="Root">
                <DropdownInput options={NOTE_PRESETS} value={rootPreset} setValue={p => {
                    setRootPreset(p);
                }} />
            </InputRow>
            <Card title="Pentatonic Modes | Diatonic Modes | 7th Chords" >
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {display.map((item, i) => {
                            return (
                                <tr key={i}>
                                    {item.map(item => {
                                        const { model, modelId, rootId, voicingId } = item as any;
                                        const instance = new model(modelId, { root: Note.fromId(rootId) });
                                        return (
                                            <td key={modelId}>
                                                <h3>{modelId}</h3>
                                                <Fretboard
                                                    model={instance}
                                                    voicing={VOICING_PRESET_MAP.get(voicingId)}
                                                    fretRange={[1, 14]}
                                                />
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </StyledCAGEDPage>
    );
};

export default CAGEDPage;
