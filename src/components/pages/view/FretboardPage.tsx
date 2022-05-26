import React, { useState } from "react";
import styled from 'styled-components';
import Chord from "../../../core/models/Chord";
import { ModelType } from "../../../core/models/Model.constants";
import { CHORD_PRESETS, NOTE_PRESETS, SCALE_PRESETS } from "../../../core/models/Model.presets";
import Note from "../../../core/models/Note";
import Scale from "../../../core/models/Scale";
import THEME from "../../../styles/theme";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../viewers/fretboard/Fretboard.tuning";
import { DEFAULT_FRETBOARD_PROPS } from "../../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESETS } from "../../../viewers/fretboard/Fretboard.voicing";
import ButtonInput from "../../inputs/ButtonInput";
import DropdownInput from "../../inputs/DropdownInput";
import NumericInput from "../../inputs/NumericInput";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import Icon from "../../ui/Icon";
import InputRow from "../../ui/InputRow";

const StyledFretboardpage = styled.div`
    max-width: 1024px;
    margin: 20px auto;
    
    .resize {
        overflow: auto;
        resize: both;
        padding: 26px;
        border: 1px solid ${THEME.brand.accent};
    }

    ${StyledCard} {
        margin: 16px auto;
    }
`;

const VOICING_OPTIONS = [
    {
        id: VoicingId.None,
        name: '---',
        value: undefined
    },
    ...VOICING_PRESETS
];

const TYPE_OPTIONS = [
    {
        id: ModelType.Chord,
        name: 'Chords',
        value: ModelType.Chord,
        data: CHORD_PRESETS
    },
    {
        id: ModelType.Scale,
        name: 'Scales',
        value: ModelType.Chord,
        data: SCALE_PRESETS
    }
]

const Fretboardpage: React.FC<any> = () => {

    // Notes
    const [modelType, _setModelType] = useState(TYPE_OPTIONS[0]);
    const modelOptions = modelType.data;
    const [modelConfig, setModelConfig] = useState(modelOptions[0]);
    const [root, setRoot] = useState(NOTE_PRESETS[0]);

    const setModelType = type => { _setModelType(type); setModelConfig(type.data[0]) }

    let model;
    if (modelType.id === ModelType.Chord) {
        model = new Chord(modelConfig.modelId, { root: Note.fromId(root.modelId) })
    }
    else if (modelType.id === ModelType.Scale) {
        model = new Scale(modelConfig.modelId, { root: Note.fromId(root.modelId) })
    }

    const filteredVoicings = VOICING_OPTIONS.filter(v => {
        if (!v.value) return true;
        const containsNonModelIntervals = v.value.some(x => x && !model.intervals.find(ivl => ivl.pod[1] + 1 === x));
        return !containsNonModelIntervals;
    });

    // UI
    const [isEditingFretboard, setIsEditingFretboard] = useState(false);
    const [isEditingNotes, setIsEditingNotes] = useState(false);

    // Fretboard
    const [voicing, setVoicing] = useState(filteredVoicings[0]);
    const [tuning, setTuning] = useState(FRETBOARD_TUNING_VALUES[0]);
    const [fretRange, setFretRange] = useState(DEFAULT_FRETBOARD_PROPS.fretRange);
    const [fretLo, fretHi] = fretRange;

    return (
        <StyledFretboardpage>
            <PageTitle title="View" subtitle="Fretboard" />
            <Card title="Configure Instrument" action={
                <ButtonInput isLink onClick={() => setIsEditingFretboard(!isEditingFretboard)}>
                    <Icon iconId={isEditingFretboard ? 'down' : 'next'} />
                </ButtonInput>
            }>
                {isEditingFretboard &&
                    <ul className="edit">
                        <li>
                            <InputRow label="Tuning">
                                <DropdownInput value={tuning} setValue={setTuning} options={FRETBOARD_TUNING_VALUES} />
                            </InputRow>
                        </li>
                        {tuning.id === TuningId.Standard &&
                            <li>
                                <InputRow label="Voicing">
                                    <DropdownInput value={voicing} setValue={setVoicing} options={filteredVoicings} />
                                </InputRow>
                            </li>
                        }
                        <li>
                            <InputRow label="Low Fret">
                                <NumericInput value={fretLo} min={0} max={fretHi} setValue={v => setFretRange([v, fretHi])} />
                            </InputRow>
                        </li>
                        <li>
                            <InputRow label="High Fret">
                                <NumericInput value={fretHi} min={fretLo} max={24} setValue={v => setFretRange([fretLo, v])} />
                            </InputRow>
                        </li>
                    </ul>
                }

            </Card >
            <Card title="Configure Notes" action={
                <ButtonInput isLink onClick={() => setIsEditingNotes(!isEditingNotes)}>
                    <Icon iconId={isEditingNotes ? 'down' : 'next'} />
                </ButtonInput>
            }>
                {isEditingNotes ?
                    <ul className="edit">
                        <li>
                            <InputRow label="Model Type">
                                <DropdownInput value={modelType} setValue={setModelType} options={TYPE_OPTIONS} />
                            </InputRow>
                        </li>
                        <li>
                            <InputRow label="Preset">
                                <DropdownInput value={modelConfig} setValue={setModelConfig} options={modelOptions} />
                            </InputRow>
                        </li>
                        <li>
                            <InputRow label="Root">
                                <DropdownInput value={root} setValue={setRoot} options={NOTE_PRESETS} />
                            </InputRow>
                        </li>
                    </ul>
                    : null}

            </Card >
            <Card title="" className="resize">
                <Fretboard
                    model={model}
                    voicing={voicing}
                    tuning={tuning.value}
                    fretRange={fretRange}
                />
            </Card >
        </StyledFretboardpage>
    );
};

export default Fretboardpage;
