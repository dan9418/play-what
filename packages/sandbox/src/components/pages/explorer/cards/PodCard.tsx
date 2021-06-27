import ModelUtils from '@pw/core/src/models/Model.utils';
import React from "react";
import styled from 'styled-components';

const StyledPodCard = styled.div`
	background-color: white;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid ${props => props.$color};

    .name {
        font-weight: bold;
    }
    .numberic {
        color: gray;
    }
`;

const PodCard: React.FC<any> = ({ podType, pod }) => {
    const podProps = ModelUtils.getPodProps(podType, pod, pod[0], false);
    if (!podProps) return null;
    return (
        <StyledPodCard $color={podProps.color} $fgColor={podProps.fgColor}>
            <div className="name">{podProps.label}</div>
            <div className="numeric">[{pod[0]}, {pod[1]}]</div>
        </StyledPodCard>
    );
};

const StyledPodCardList = styled.ul`
	display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li {
        padding: 0;
        margin: 8px;
        list-style-type: none;
        width: 100%;
        max-width: 64px;
        text-align: center;
    }
`;

export const PodCardList: React.FC<any> = ({ podType, pods }) => {
    return (
        <StyledPodCardList>
            {pods.map((pod, i) =>
                <li key={i}>
                    <PodCard podType={podType} pod={pod} />
                </li>
            )}
        </StyledPodCardList>
    );
};

export default PodCard;
