import React from 'react';
import styled from 'styled-components';

const StyledInputRow = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media(min-width: 512px) {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    label {
        color: #333;
        font-weight: bold;
        margin: 4px;
    }
`;

const InputRow = ({ label, children }) => {
    return (
        <StyledInputRow>
            <label>{label}</label>
            <div className="octave">
                {children}
            </div>
        </StyledInputRow>
    );
}

export default InputRow;
