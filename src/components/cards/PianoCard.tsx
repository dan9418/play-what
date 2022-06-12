import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Keyboard from "../../viewers/keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "../../viewers/keyboard/Keyboard.defaults";
import Card from "../ui/Card";

const StyledPianoCard = styled.div`
   
`;


const PianoCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const qp = new URLSearchParams({
        modelId: model.modelId,
        modelType: model.modelType,
        rootId: model.root.modelId,
    });

    return (
        <Card title="Guitar" action={<Link to={`/view/keyboard?${qp.toString()}`}>Edit</Link>}>
            <StyledPianoCard>
                <Keyboard
                    keyRange={DEFAULT_KEYBOARD_PROPS.keyRange as [number, number]}
                    model={model}
                />
            </StyledPianoCard>
        </Card >
    );
};

export default PianoCard;
