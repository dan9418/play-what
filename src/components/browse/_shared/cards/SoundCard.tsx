import React from "react";
import styled from 'styled-components';
import Model from "@pw-core/models/Model";
import ButtonInput from "../../../_shared/inputs/ButtonInput";
import Card from "../../../_shared/ui/Card";
import Icon from "../../../_shared/ui/Icon";

const StyledSoundCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        padding: 8px 32px;
    }
`;


const SoundCard: React.FC<any> = () => {
    return null;

    const intervals = null;

    return (
        <Card title="Sound">
            <StyledSoundCard>
                <ButtonInput onClick={() => Model.playSoundList(intervals.value)}><Icon iconId="speaker" size={32} color="white" /></ButtonInput >
            </StyledSoundCard>
        </Card>
    );
};

export default SoundCard;
