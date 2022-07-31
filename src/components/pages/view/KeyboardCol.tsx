import React from "react";
import styled from 'styled-components';
import DEFAULT_KEYBOARD_PROPS from "../../../viewers/keyboard/Keyboard.defaults";
import NumericInput from "../../inputs/NumericInput";
import InputRow from "../../ui/InputRow";
import CardSection from "./CardSection";

const StyledKeyboardCol = styled.div`

`;


export interface IKeyboardColProps {
    keyRange;
    setKeyRange;
    model;
}

export const DEFAULT_KEY_RANGE = DEFAULT_KEYBOARD_PROPS.keyRange as [number, number];

const KeyboardCol: React.FC<IKeyboardColProps> = ({ keyRange, setKeyRange }) => {

    const [keyLo, keyHi] = keyRange;

    return (
        <StyledKeyboardCol>
            <CardSection title="Range" >
                <ul>
                    <li>
                        <InputRow label="Low Key">
                            <NumericInput value={keyLo} min={-88} max={keyHi} setValue={v => setKeyRange([v, keyHi])} />
                        </InputRow>
                    </li>
                    <li>
                        <InputRow label="High Key">
                            <NumericInput value={keyHi} min={keyLo} max={88} setValue={v => setKeyRange([keyLo, v])} />
                        </InputRow>
                    </li>
                </ul>
            </CardSection>
        </StyledKeyboardCol>
    );
};

export default KeyboardCol;
