import React from "react";
import styled from 'styled-components';
import GuitarCard from "../cards/GuitarCard";
import PianoCard from "../cards/PianoCard";

const StyledColumnManager = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    @media(min-width: 512px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ColumnManager: React.FC<any> = ({ children }) => {
    return (
        <StyledColumnManager>
            {children}
        </StyledColumnManager >
    );
};

export default ColumnManager;
