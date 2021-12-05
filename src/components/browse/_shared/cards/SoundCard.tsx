import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../../core/models/PodList/PodList.utils";
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
    const intervals = useRecoilValue(intervalsState)
    return (
        <Card title="Sound">
            <StyledSoundCard>
                <ButtonInput onClick={() => PodListUtils.playSound(intervals)}><Icon iconId="speaker" size={32} color="white" /></ButtonInput >
            </StyledSoundCard>
        </Card>
    );
};

export default SoundCard;
