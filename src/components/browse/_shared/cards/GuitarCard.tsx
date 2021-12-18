import React, { useState } from "react";
import styled from 'styled-components';
import { VOICING_PRESETS } from "../../../../core/theory/Voicing.constants";
import Fretboard from "../../../../viewers/fretboard/Fretboard";
import { getFretboardProps } from "../../../../viewers/fretboard/Fretboard.utils";
import DropdownInput from "../../../_shared/inputs/DropdownInput";
import Card from "../../../_shared/ui/Card";

const StyledGuitarCard = styled.div`
    
`;

const OPTIONS = [
    {
        id: 'unselected' as any,
        name: '---',
        value: undefined
    },
    ...VOICING_PRESETS
]

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const [voicing, setVoicing] = useState(OPTIONS[0]);

    const fretboardProps = getFretboardProps(model, voicing.value ? voicing : undefined);

    return (
        <Card title="Guitar">
            <StyledGuitarCard>
                <Fretboard {...fretboardProps} />
                <div>
                    <DropdownInput value={voicing} setValue={setVoicing} options={OPTIONS} />
                </div>
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
