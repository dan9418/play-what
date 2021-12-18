import React from "react";
import styled from 'styled-components';
import Fretboard from "../../../../viewers/fretboard/Fretboard";
import { getFretboardProps } from "../../../../viewers/fretboard/Fretboard.utils";
import Card from "../../../_shared/ui/Card";

const StyledGuitarCard = styled.div`
    
`;

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const fretboardProps = getFretboardProps(model);

    return (
        <Card title="Guitar">
            <StyledGuitarCard>
                <Fretboard {...fretboardProps} />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
