import React from 'react';
import styled from 'styled-components';

export const StyledInputRow = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    ${props => props.$y ? '' : `
        @media(min-width: 512px) {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            //margin-bottom: 8px;
        }
    `}

    > label {
        color: ${({ theme }) => theme.dark3};
        font-weight: bold;
        margin: 8px;
        white-space: nowrap;
    }
`;

const InputRow = ({ label, children, y = false, ...rest }) => {
    return (
        <StyledInputRow $y={y} {...rest}>
            <label>{label}</label>
            <div>
                {children}
            </div>
        </StyledInputRow>
    );
}

export default InputRow;
