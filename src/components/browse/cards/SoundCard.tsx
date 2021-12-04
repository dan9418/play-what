import React from "react";
import styled from 'styled-components';
import Card from "../../_shared/ui/Card";

const StyledSoundCard = styled.div`

`;


const SoundCard: React.FC<any> = ({ chord }) => {
    return (
        <Card title="Sound">
            <StyledSoundCard>

            </StyledSoundCard>
        </Card>
    );
};

export default SoundCard;
