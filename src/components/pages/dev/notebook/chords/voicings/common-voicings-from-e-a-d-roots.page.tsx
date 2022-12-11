import React, { useState } from "react";
import styled from 'styled-components';
import Chord from "../../../../../../core/models/Chord";
import { ChordId, NoteId } from "../../../../../../core/models/Model.constants";
import { NOTE_PRESETS, NOTE_PRESET_MAP } from "../../../../../../core/models/Model.presets";
import Note from "../../../../../../core/models/Note";
import Fretboard from "../../../../../../viewers/fretboard/Fretboard";
import { VoicingId, VOICING_PRESET_MAP } from "../../../../../../viewers/fretboard/Fretboard.voicing";
import DropdownInput from "../../../../../inputs/DropdownInput";
import PageTitle from "../../../../../layout/PageTitle";
import Card, { StyledCard } from "../../../../../ui/Card";
import InputRow, { StyledInputRow } from "../../../../../ui/InputRow";

const StyledVoicingsPage = styled(PageTitle)`
    max-width: 1920px;

    ${StyledCard}, ${StyledInputRow} {
        margin-top: 16px;
        table {
            width: 100%;
            td {
                width: 25%;
            }
        }
    }
`;

const VOICINGS_E = [
    VoicingId.Chord_Triad_EShape_1,
    VoicingId.Chord_Seventh_EShape_1,
    VoicingId.Chord_Shell_A_37,
    VoicingId.Chord_Shell_A_73,
];

const VOICINGS_A = [
    VoicingId.Chord_Triad_AShape_1,
    VoicingId.Chord_Seventh_AShape_1,
    VoicingId.Chord_Shell_A_37,
    VoicingId.Chord_Shell_A_73,
];

const VOICINGS_D = [
    VoicingId.Chord_Triad_DShape_1,
    VoicingId.Chord_Seventh_DShape_1,
    VoicingId.Chord_Shell_D_37,
    VoicingId.Chord_Shell_D_73,
];

const VoicingRow = ({ voicingIds, model, modelId, root }) => (
    <tr>
        {voicingIds.map(voicingId => {
            const instance = new model(modelId, { root });
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

const THEAD = (
    <thead>
        <tr>
            <th>Triad</th>
            <th>Seventh</th>
            <th>Drop 3-7</th>
            <th>Drop 7-3</th>
        </tr>
    </thead>
);

const CHORDS = [
    {
        model: Chord,
        modelId: ChordId.Maj7,
    },
    {
        model: Chord,
        modelId: ChordId.Min7,
    },
    {
        model: Chord,
        modelId: ChordId.Dom7,
    },
    {
        model: Chord,
        modelId: ChordId.HalfDim7,
    }
];

export const Page: React.FC = () => {
    const [rootPreset, setRootPreset] = useState(NOTE_PRESET_MAP.get(NoteId.C));

    const root = new Note(rootPreset.value);

    return (
        <StyledVoicingsPage title="Chord Voicings">
            <InputRow label="Root">
                <DropdownInput options={NOTE_PRESETS} value={rootPreset} setValue={p => {
                    setRootPreset(p);
                }} />
            </InputRow>
            <Card title="E Root" >
                <table>
                    {THEAD}
                    <tbody>
                        {CHORDS.map((chord, i) => {
                            const { model, modelId } = chord;
                            return (
                                <VoicingRow key={i} model={model} modelId={modelId} root={root} voicingIds={VOICINGS_E} />
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <Card title="A Root" >
                <table>
                    {THEAD}
                    <tbody>
                        {CHORDS.map((chord, i) => {
                            const { model, modelId } = chord;
                            return (
                                <VoicingRow key={i} model={model} modelId={modelId} root={root} voicingIds={VOICINGS_A} />
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <Card title="D Root" >
                <table>
                    {THEAD}
                    <tbody>
                        {CHORDS.map((chord, i) => {
                            const { model, modelId } = chord;
                            return (
                                <VoicingRow key={i} model={model} modelId={modelId} root={root} voicingIds={VOICINGS_D} />
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </StyledVoicingsPage>
    );
};
