import React, { useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../viewers/fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../viewers/fretboard/Fretboard.tuning";
import { DEFAULT_FRETBOARD_PROPS, getFretboardProps } from "../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESETS } from "../../viewers/fretboard/Fretboard.voicing";
import ButtonInput from "../inputs/ButtonInput";
import DropdownInput from "../inputs/DropdownInput";
import NumericInput from "../inputs/NumericInput";
import Card from "../ui/Card";
import InputRow from "../ui/InputRow";

const StyledGuitarCard = styled.div`
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

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const filteredVoicings = VOICING_OPTIONS.filter(v => {
        if (!v.value) return true;
        const containsNonModelIntervals = v.value.some(x => x && !model.intervals.find(ivl => ivl.pod[1] + 1 === x));
        return !containsNonModelIntervals;
    });

    const [isEditing, setIsEditing] = useState(false);
    const [voicing, setVoicing] = useState(filteredVoicings[0]);
    const [tuning, setTuning] = useState(FRETBOARD_TUNING_VALUES[0]);
    const [fretRange, setFretRange] = useState(DEFAULT_FRETBOARD_PROPS.fretRange);

    const [fretLo, fretHi] = fretRange;

    const fretboardProps = getFretboardProps(
        model,
        voicing.id === VoicingId.None ? undefined : voicing,
        tuning,
        fretRange
    );

    return (
        <Card title="Guitar" action={<ButtonInput onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Done' : 'Edit'}</ButtonInput>}>
            <StyledGuitarCard>
                {isEditing &&
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
                <Fretboard {...fretboardProps} />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
