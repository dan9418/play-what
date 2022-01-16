import React from "react";
import styled from 'styled-components';

export const StyledCard = styled.div`
    background: ${props => props.theme.surface.card};
    width: 100%;
    border-radius: 16px;
    padding: 16px;

    .header {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const Card: React.FC<any> = ({ title, action, children, ...rest }) => {
    return (
        <StyledCard {...rest}>
            {title &&
                <div className="header">
                    <h2>{title}</h2>
                    {action}
                </div>
            }
            {children}
        </StyledCard >
    );
};

export default Card;