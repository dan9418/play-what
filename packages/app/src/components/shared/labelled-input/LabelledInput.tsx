
import React from "react";
import styled from 'styled-components';

const StyledLabelledInput = styled.div`
    label {
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
        letter-spacing: 1px;
        color: #555;
        margin-bottom: 4px;
        display: block;
    }
`;

const LabelledInput: React.FC<any> = ({ text, children }) => {

    return (
        <StyledLabelledInput className={text.toLowerCase().replace(' ', '-')}>
            <label>{text}</label>
            {children}
        </StyledLabelledInput>
    );
};

export default LabelledInput;
