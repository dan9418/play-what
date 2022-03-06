import React, { useState } from "react";
import styled from 'styled-components';
import ArrayUtils from "../../../core/general/Array.utils";
import Chord from "../../../core/models/Chord";
import { ChordId, NoteId, ScaleId } from "../../../core/models/Model.constants";
import { NOTE_PRESETS, NOTE_PRESET_MAP } from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { IFretProps } from "../../../viewers/fretboard/Fretboard.utils";
import { VOICING_PRESET_MAP } from "../../../viewers/fretboard/Fretboard.voicing";
import DropdownInput from "../../inputs/DropdownInput";
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import InputRow, { StyledInputRow } from "../../ui/InputRow";

const StyledCAGEDPage = styled(StyledPageBody)`
	    
    ${StyledCard}, ${StyledInputRow} {
        margin-top: 16px;
        table {
            width: 100%;

            td {
                width: 33%;
                padding: 24px 2px 16px;
            }
        }
    }
`;

const CAGEDPage: React.FC<any> = () => {
    const [rootPreset, setRootPreset] = useState(NOTE_PRESET_MAP.get(NoteId.C));

    const root = new Note(rootPreset.value);
    const majorScale = new Scale(ScaleId.Ionian, { root });
    const minorScale = new Scale(ScaleId.Ionian, { root });

    const majorItems = [
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: majorScale.notes[1].modelId,
            voicingId: null
        },
        {
            model: Chord,
            modelId: ChordId.Dom7,
            rootId: majorScale.notes[4].modelId,
            voicingId: null
        },
        {
            model: Chord,
            modelId: ChordId.Maj7,
            rootId: majorScale.notes[0].modelId,
            voicingId: null
        }
    ];

    const minorItems = [
        {
            model: Chord,
            modelId: ChordId.HalfDim7,
            rootId: minorScale.notes[2].modelId,
            voicingId: null
        },
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: minorScale.notes[4].modelId,
            voicingId: null
        },
        {
            model: Chord,
            modelId: ChordId.Min7,
            rootId: minorScale.notes[0].modelId,
            voicingId: null
        }
    ];

    const getColor = (fretProps: IFretProps) => {
        const { stringIndex, fretIndex, tuning, model, voicing } = fretProps;
        const noteIndex = tuning[stringIndex] + fretIndex;
        const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

        if (!note) return;

        if (interval.pod[1] === 0) return 'red';
        if (interval.pod[1] === 2) return 'blue';
        if (interval.pod[1] === 4) return 'black';
        if (interval.pod[1] === 6) return 'black';
        return 'black';
    };

    return (
        <StyledCAGEDPage>
            <PageTitle title="Chord Progressions" />
            <InputRow label="Root">
                <DropdownInput options={NOTE_PRESETS} value={rootPreset} setValue={p => {
                    setRootPreset(p);
                }} />
            </InputRow>
            <Card title="Major II-V-I" >
                <table>
                    <thead>
                        <tr>
                            <th>II</th>
                            <th>V</th>
                            <th>I</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {majorItems.map(item => {
                                const { model, modelId, rootId, voicingId } = item as any;
                                const instance = new model(modelId, { root: Note.fromId(rootId) });

                                return (
                                    <td key={modelId}>
                                        <h3>{modelId}</h3>
                                        <Fretboard
                                            model={instance}
                                            voicing={voicingId ? VOICING_PRESET_MAP.get(voicingId) : undefined}
                                            colorMapFn={getColor}
                                            fretRange={[1, 14]}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr >
                            {ArrayUtils.rotate([...majorItems], 1).map(item => {
                                const { model, modelId, rootId, voicingId } = item as any;
                                const instance = new model(modelId, { root: Note.fromId(rootId) });

                                return (
                                    <td key={modelId}>
                                        <h3>{modelId}</h3>
                                        <Fretboard
                                            model={instance}
                                            voicing={voicingId ? VOICING_PRESET_MAP.get(voicingId) : undefined}
                                            colorMapFn={getColor}
                                            fretRange={[1, 14]}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </Card>
            <Card title="Minor ii-v-i" >
                <table>
                    <thead>
                        <tr>
                            <th>ii</th>
                            <th>v</th>
                            <th>i</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            {minorItems.map(item => {
                                const { model, modelId, rootId, voicingId } = item as any;
                                const instance = new model(modelId, { root: Note.fromId(rootId) });

                                return (
                                    <td key={modelId}>
                                        <h3>{modelId}</h3>
                                        <Fretboard
                                            model={instance}
                                            voicing={voicingId ? VOICING_PRESET_MAP.get(voicingId) : undefined}
                                            colorMapFn={getColor}
                                            fretRange={[1, 14]}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            {ArrayUtils.rotate([...minorItems], 1).map(item => {
                                const { model, modelId, rootId, voicingId } = item as any;
                                const instance = new model(modelId, { root: Note.fromId(rootId) });

                                return (
                                    <td key={modelId}>
                                        <h3>{modelId}</h3>
                                        <Fretboard
                                            model={instance}
                                            voicing={voicingId ? VOICING_PRESET_MAP.get(voicingId) : undefined}
                                            colorMapFn={getColor}
                                            fretRange={[1, 14]}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </Card>
        </StyledCAGEDPage>
    );
};

export default CAGEDPage;
