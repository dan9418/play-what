import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledGuitarCard = styled.div`
    
`;

const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    return (
        <Card>
            <StyledGuitarCard>
                Guitar
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
