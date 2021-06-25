import React from "react";
import styled from 'styled-components';

const StyledPodCard = styled.div`
	background-color: white;
    border-radius: 8px;
    padding: 8px;
`;

const PodCard: React.FC<any> = ({ pod }) => {
    return (
        <StyledPodCard>
            <pre>{JSON.stringify(pod, null, '  ')}</pre>
        </StyledPodCard>
    );
};

const StyledPodCardList = styled.ul`
	display: flex;
    li {
        padding: 0;
        margin: 8px;
        list-style-type: none;
    }
`;

export const PodCardList: React.FC<any> = ({ pods }) => {
    return (
        <StyledPodCardList>
            {pods.map((pod, i) =>
                <li key={i}>
                    <PodCard pod={pod} />
                </li>
            )}
        </StyledPodCardList>
    );
};

export default PodCard;
