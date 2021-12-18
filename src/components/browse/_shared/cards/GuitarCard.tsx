import React from "react";
import styled from 'styled-components';
import { VOICING_PRESETS } from "../../../../core/theory/Voicing.constants";
import Fretboard from "../../../../viewers/fretboard/Fretboard";
import { getFretboardProps } from "../../../../viewers/fretboard/Fretboard.utils";
import Card from "../../../_shared/ui/Card";

const StyledGuitarCard = styled.div`
    
`;

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const voicing = VOICING_PRESETS[18];

    const fretboardProps = getFretboardProps(model, voicing);

    return (
        <Card title="Guitar">
            <StyledGuitarCard>
                <Fretboard {...fretboardProps} />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
