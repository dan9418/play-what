import React from "react";
import styled from 'styled-components';
import { IInputProps } from "./Input.constants";
import NumericInput from "./NumericInput";

export const StyledRangeInput = styled.div`
	display: flex;
    align-items: center;

    span {
        margin: 0 4px;
    }
`;

interface IRangeInputProps extends IInputProps {
    min?: number;
    max?: number;
}

const RangeInput: React.FC<IRangeInputProps> = ({ value, setValue, min, max, ...rest }) => {
    const [lo, hi] = value;
    const setLo = l => setValue([l, hi]);
    const setHi = h => setValue([lo, h]);

    const loMax = Math.max(max, hi - 1);
    const hiMin = Math.min(min, lo + 1);

    return (
        <StyledRangeInput>
            <NumericInput value={lo} setValue={setLo} min={min} max={loMax} />
            <span>-</span>
            <NumericInput value={hi} setValue={setHi} min={hiMin} max={max} />
        </StyledRangeInput>
    );
}

export default RangeInput;
