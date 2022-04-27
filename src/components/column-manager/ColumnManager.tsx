import React from "react";
import styled from 'styled-components';
import GuitarCard from "../cards/GuitarCard";
import PianoCard from "../cards/PianoCard";

const StyledColumnManager = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    @media(min-width: 512px) {
        grid-template-columns: ${({ $cols }) => $cols.join(' ')}
    }
`;

const ColumnManager: React.FC<any> = ({ children, cols = ['1fr', '1fr'] }) => {
    return (
        <StyledColumnManager $cols={cols}>
            {children}
        </StyledColumnManager >
    );
};

export default ColumnManager;
