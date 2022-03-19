import React from "react";
import styled from 'styled-components';
import GuitarCard from "../cards/GuitarCard";
import PianoCard from "../cards/PianoCard";

const StyledViewerManager = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`;

const ViewerManager: React.FC<any> = ({ model }) => {
    return (
        <StyledViewerManager>
            <GuitarCard model={model} />
            <PianoCard model={model} />
        </StyledViewerManager >
    );
};

export default ViewerManager;
