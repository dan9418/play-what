import React from "react";
import styled from 'styled-components';
import { getInputComponents, ROOT_INPUTS } from "../../create/edit-panel/InputManagers";
import Card from "../../shared/Card";

const StyledChordDetails = styled.div`

`;


const ChordOptionsCard: React.FC<any> = ({ chord }) => {
    return (
        <Card title="Options">
            <StyledChordDetails>
                {false && getInputComponents(ROOT_INPUTS, editProps)}
            </StyledChordDetails>
        </Card>
    );
};

export default ChordOptionsCard;
