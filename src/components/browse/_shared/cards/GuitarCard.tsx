import React from "react";
import styled from 'styled-components';
import Fretboard from "../../../_shared/fretboard/Fretboard";
import Card from "../../../_shared/ui/Card";

const StyledGuitarCard = styled.div`
    
`;

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    return (
        <Card title="Guitar">
            <StyledGuitarCard>
                <Fretboard model={model} />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
