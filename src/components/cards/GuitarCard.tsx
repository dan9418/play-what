import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Fretboard from "../../viewers/fretboard/Fretboard";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

const StyledGuitarCard = styled.div`
    .customize {
        display: flex;
        align-items: center;
    }
`;


const GuitarCard: React.FC<any> = ({ model }) => {

    if (!model.root || !model.intervals) return null;

    const qp = new URLSearchParams({
        modelId: model.modelId,
        modelType: model.modelType,
        rootId: model.root.modelId,
    });

    return (
        <Card title="Fretboard" action={<Link className="customize" to={`/view/fretboard?${qp.toString()}`}>Customize <Icon iconId="next" size={8} /></Link>}>
            <StyledGuitarCard>
                <Fretboard
                    model={model}
                />
            </StyledGuitarCard>
        </Card >
    );
};

export default GuitarCard;
