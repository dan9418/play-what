import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Fretboard from "../../viewers/fretboard/Fretboard";
import Card from "../ui/Card";

const StyledGuitarCard = styled.div`

`;


const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const qp = new URLSearchParams({
        modelId: model.modelId,
        modelType: model.modelType,
        rootId: model.root.modelId,
    });

    return (
        <Card title="Guitar" action={<Link to={`/view/fretboard?${qp.toString()}`}>Edit Details</Link>}>
            <StyledGuitarCard>
                <Fretboard
                    model={model}
                />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
