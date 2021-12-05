import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
    background: white;
    width: 100%;
    border-radius: 16px;
    padding: 16px;

    h2 {
        margin-bottom: 16px;
    }
`;

const Card: React.FC<any> = ({ title, children }) => {
    return (
        <StyledCard>
            <h2>{title}</h2>
            {children}
        </StyledCard >
    );
};

export default Card;
