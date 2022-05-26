import React from "react";
import styled from 'styled-components';

const StyledColumnManager = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;

    ${({ $tablet }) => $tablet ? `
        @media(min-width: 512px) {
            grid-template-columns: ${$tablet.join(' ')}
        }
    ` : ''}

    ${({ $desktop }) => $desktop ? `
        @media(min-width: 1024px) {
            grid-template-columns: ${$desktop.join(' ')}
        }
    ` : ``}
   
`;

const ColumnManager: React.FC<any> = ({ children, tablet, desktop }) => {
    return (
        <StyledColumnManager $tablet={tablet} $desktop={desktop}>
            {children}
        </StyledColumnManager >
    );
};

export default ColumnManager;
