import React, { useState } from "react";
import styled from 'styled-components';
import Keyboard from "../../archive/_viewers/keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "../../archive/_viewers/keyboard/Keyboard.defaults";
import ButtonInput from "../inputs/ButtonInput";
import NumericInput from "../inputs/NumericInput";
import Card from "../ui/Card";
import InputRow from "../ui/InputRow";

const StyledPianoCard = styled.div`
   
`;


const PianoCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const [isEditing, setIsEditing] = useState(false);
    const [keyRange, setKeyRange] = useState(DEFAULT_KEYBOARD_PROPS.keyRange);

    const [keyLo, keyHi] = keyRange;

    return (
        <Card title="Piano [BETA]" action={<ButtonInput isLink onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Done' : 'Edit'}</ButtonInput>}>
            <StyledPianoCard>
                {isEditing &&
                    <ul className="edit">
                        <li>
                            <InputRow label="Low Key">
                                <NumericInput value={keyLo} min={-24} max={keyHi} setValue={v => setKeyRange([v, keyHi])} />
                            </InputRow>
                        </li>
                        <li>
                            <InputRow label="High Key">
                                <NumericInput value={keyHi} min={keyLo} max={24} setValue={v => setKeyRange([keyLo, v])} />
                            </InputRow>
                        </li>
                    </ul>
                }
                <Keyboard
                    model={model}
                    keyRange={keyRange as [number, number]}
                />
            </StyledPianoCard>
        </Card >
    );
};

export default PianoCard;
