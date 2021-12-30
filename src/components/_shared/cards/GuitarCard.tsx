import React, { useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../viewers/fretboard/Fretboard.tuning";
import { getFretboardProps } from "../../../viewers/fretboard/Fretboard.utils";
import { VoicingId, VOICING_PRESETS } from "../../../viewers/fretboard/Fretboard.voicing";
import DropdownInput from "../../_shared/inputs/DropdownInput";
import Card from "../../_shared/ui/Card";
import InputRow from "../../_shared/ui/InputRow";

const StyledGuitarCard = styled.div`
    
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

    const [voicing, setVoicing] = useState(VOICING_OPTIONS[0]);
    const [tuning, setTuning] = useState(FRETBOARD_TUNING_VALUES[0]);

    const fretboardProps = getFretboardProps(
        model,
        voicing.id === VoicingId.None ? undefined : voicing,
        tuning
    );

    return (
        <Card title="Guitar">
            <StyledGuitarCard>
                <Fretboard {...fretboardProps} />
                <InputRow label="Tuning">
                    <DropdownInput value={tuning} setValue={setTuning} options={FRETBOARD_TUNING_VALUES} />
                </InputRow>
                {tuning.id === TuningId.Standard &&
                    <InputRow label="Voicing">
                        <DropdownInput value={voicing} setValue={setVoicing} options={VOICING_OPTIONS} />
                    </InputRow>
                }
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
