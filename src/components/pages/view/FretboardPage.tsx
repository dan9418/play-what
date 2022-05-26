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
import ColumnManager, { StyledColumnManager } from "../../column-manager/ColumnManager";
import ButtonInput from "../../inputs/ButtonInput";
import DropdownInput from "../../inputs/DropdownInput";
import NumericInput from "../../inputs/NumericInput";
import Modal from "../../layout/Modal";
import Card, { StyledCard } from "../../ui/Card";
import Icon from "../../ui/Icon";
import InputRow from "../../ui/InputRow";

const StyledFretboardpage = styled.div`
    min-height: 95vh;
    padding: 16px;

    .view-header {
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${({ theme }) => theme.text.primary};
        line-height: 48px;
        font-size: 140%;
        font-weight: bold;

        position: fixed;
        top: 48px;
        left: 0;
        right: 0;
        z-index: 2001;
        height: 48px;
        background-color: ${({ theme }) => theme.surface.card};
        border-bottom: 1px solid ${({ theme }) => theme.utils.border};
    }
    
    

    .maximize {
        background-color: transparent !important;
    }

    ${StyledColumnManager} {
        & > div > ${StyledCard}:not(:last-child) {
            margin-bottom: 16px;
        }
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
    const [isFullScreen, setIsFullScreen] = useState(false);

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

    // Fretboard
    const [voicing, setVoicing] = useState(filteredVoicings[0]);
    const [tuning, setTuning] = useState(FRETBOARD_TUNING_VALUES[0]);
    const [fretRange, setFretRange] = useState(DEFAULT_FRETBOARD_PROPS.fretRange);
    const [fretLo, fretHi] = fretRange;

    return (
        <StyledFretboardpage>
            {isFullScreen && (
                <Modal setIsOpen={setIsFullScreen}>
                    <div className="resize">
                        <Fretboard
                            model={model}
                            voicing={voicing}
                            tuning={tuning.value}
                            fretRange={fretRange}
                        />
                    </div>
                </Modal>
            )}
            <div className="view-header">
                <span>Instrument</span>
                <span>View</span>
                <span>Notes</span>
            </div>
            <ColumnManager tablet={["1fr", "2fr"]} desktop={["1fr", "2fr", "1fr"]}>
                <div>
                    <Card title="Tuning">
                        <ul className="edit">
                            <li>
                                <InputRow label="Preset">
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
                        </ul>
                    </Card >
                    <Card title="Range">
                        <ul className="edit">
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
                    </Card >
                </div>
                <div>
                    <Card title="Fretboard" className="view"
                        action={<ButtonInput className="maximize" onClick={() => setIsFullScreen(true)}>
                            <Icon iconId="maximize" />
                        </ButtonInput>}
                    >
                        <Fretboard
                            model={model}
                            voicing={voicing}
                            tuning={tuning.value}
                            fretRange={fretRange}
                        />
                    </Card>
                </div>

                <div>
                    <Card title="Root">
                        <ul className="edit">
                            <li>
                                <InputRow label="Key Center">
                                    <DropdownInput value={root} setValue={setRoot} options={NOTE_PRESETS} />
                                </InputRow>
                            </li>
                        </ul>
                    </Card>
                    <Card title="Intervals">
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
                        </ul>
                    </Card>
                </div>
            </ColumnManager>
        </StyledFretboardpage>
    );
};

export default Fretboardpage;
