import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import ModelUtils from "../../../../core/models/Model.utils";
import { intervalsState } from "../../../../state/state";
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
    const intervals = useRecoilValue(intervalsState);
    if (!intervals) return null;

    return (
        <Card title="Sound">
            <StyledSoundCard>
                <ButtonInput onClick={() => ModelUtils.playSoundList(intervals.value)}><Icon iconId="speaker" size={32} color="white" /></ButtonInput >
            </StyledSoundCard>
        </Card>
    );
};

export default SoundCard;
