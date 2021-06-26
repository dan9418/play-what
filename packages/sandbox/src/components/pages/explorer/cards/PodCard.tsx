import ModelUtils, { getIntervalName } from '@pw/core/src/models/Model.utils';
import React from "react";
import styled from 'styled-components';
import { IPod, ModelId } from '../../../../../../core/src/models/Model.constants';

const StyledPodCard = styled.div`
	background-color: white;
    border-radius: 8px;
    padding: 8px;

    .name {
        font-weight: bold;
    }
    .numberic {
        color: gray;
    }
`;

const PodCard: React.FC<any> = ({ podType, pod }) => {
    return (
        <StyledPodCard>
            <div className="name">{ModelUtils.getName(podType, pod as IPod)}</div>
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
