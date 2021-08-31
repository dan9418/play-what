import React from "react";
import styled from 'styled-components';
import NumericInput, { StyledNumbericInput } from "./NumericInput";

export const StyledRangeInput = styled.div`
	display: flex;

    ${StyledNumbericInput} {
        margin-left: 4px;
    }
`;

const RangeInput: React.FC<any> = ({ value, setValue, ...props }) => {
    const [lo, hi] = value;
    const setLo = l => setValue([l, hi]);
    const setHi = h => setValue([lo, h]);

    return (
        <StyledRangeInput>
            <NumericInput value={lo} setValue={setLo} />
            <NumericInput value={hi} setValue={setHi} />
        </StyledRangeInput>
    );
}

export default RangeInput;
