import React from "react";
import styled from 'styled-components';
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../viewers/fretboard/Fretboard.tuning";
import { DEFAULT_FRETBOARD_PROPS } from "../../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESETS } from "../../../viewers/fretboard/Fretboard.voicing";
import DropdownInput from "../../inputs/DropdownInput";
import NumericInput from "../../inputs/NumericInput";
import Card from "../../ui/Card";
import InputRow from "../../ui/InputRow";

const StyledInstrumentCol = styled.div`

`;

const VOICING_OPTIONS = [
    {
        id: VoicingId.None,
        name: '---',
        value: undefined
    },
    ...VOICING_PRESETS
];

export interface IInstrumentColProps {
    voicing;
    tuning;
    fretRange;
    setVoicing;
    setTuning;
    setFretRange;
    model;
}

export const DEFAULT_VOICING = VOICING_OPTIONS[0];
export const DEFAULT_TUNING = FRETBOARD_TUNING_VALUES[0];
export const DEFAULT_FRET_RANGE = DEFAULT_FRETBOARD_PROPS.fretRange;

const InstrumentCol: React.FC<IInstrumentColProps> = ({ model, voicing, tuning, fretRange, setVoicing, setTuning, setFretRange }) => {

    const filteredVoicings = VOICING_OPTIONS.filter(v => {
        if (!v.value) return true;
        const containsNonModelIntervals = v.value.some(x => x && !model.intervals.find(ivl => ivl.pod[1] + 1 === x));
        return !containsNonModelIntervals;
    });

    const [fretLo, fretHi] = fretRange;

    return (
        <StyledInstrumentCol>
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
        </StyledInstrumentCol>
    );
};

export default InstrumentCol;
