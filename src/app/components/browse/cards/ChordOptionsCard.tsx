import React from "react";
import styled from 'styled-components';
import Card from "../../shared/Card";
const StyledChordDetails = styled.div`

`;


const ChordOptionsCard: React.FC<any> = ({ chord }) => {
    return (
        <Card title="Options">
            <StyledChordDetails>
            </StyledChordDetails>
        </Card>
    );
};

export default ChordOptionsCard;
