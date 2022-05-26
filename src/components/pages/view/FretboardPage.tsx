import React, { useState } from "react";
import styled from 'styled-components';
import THEME from "../../../styles/theme";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../viewers/fretboard/Fretboard.tuning";
import { DEFAULT_FRETBOARD_PROPS } from "../../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESETS } from "../../../viewers/fretboard/Fretboard.voicing";
import ButtonInput from "../../inputs/ButtonInput";
import DropdownInput from "../../inputs/DropdownInput";
import NumericInput from "../../inputs/NumericInput";
import Card, { StyledCard } from "../../ui/Card";
import Icon from "../../ui/Icon";
import InputRow from "../../ui/InputRow";
import { DEFAULT_MODEL } from "./view.defaults";

const StyledFretboardpage = styled.div`
    .resize {
        overflow: auto;
        resize: both;
        padding: 26px;
        border: 1px solid ${THEME.brand.accent};
    }

    ${StyledCard} {
        max-width: 1024px;
        margin: 16px auto;
    }
    
    ul {
        border: 1px solid ${props => props.theme.utils.border};
        padding: 8px;
        border-radius: 8px;
        margin-bottom: 16px;

        li {
            padding: 8px 0;
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
]

const Fretboardpage: React.FC<any> = () => {

    let model = DEFAULT_MODEL;

    const filteredVoicings = VOICING_OPTIONS.filter(v => {
        if (!v.value) return true;
        const containsNonModelIntervals = v.value.some(x => x && !model.intervals.find(ivl => ivl.pod[1] + 1 === x));
        return !containsNonModelIntervals;
    });

    const [isEditingFretboard, setIsEditingFretboard] = useState(false);
    const [isEditingNotes, setIsEditingNotes] = useState(false);

    const [voicing, setVoicing] = useState(filteredVoicings[0]);
    const [tuning, setTuning] = useState(FRETBOARD_TUNING_VALUES[0]);
    const [fretRange, setFretRange] = useState(DEFAULT_FRETBOARD_PROPS.fretRange);

    const [fretLo, fretHi] = fretRange;

    return (
        <StyledFretboardpage>
            <Card title="Fretboard" action={
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
            <Card title="Notes" action={
                <ButtonInput isLink onClick={() => setIsEditingNotes(!isEditingNotes)}>
                    <Icon iconId={isEditingNotes ? 'down' : 'next'} />
                </ButtonInput>
            }>
                {isEditingNotes ? 'notes' : null}

            </Card >
            <Card title="Guitar" className="resize">
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
