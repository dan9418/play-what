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
        gap: 8px;
        justify-content: space-between;
    }
`;

export const CardHeader: React.FC<any> = ({ title, as: AsTag = 'h2', action = null }) => (
    <div className="header">
        <AsTag>{title}</AsTag>
        {action}
    </div>
);

const Card: React.FC<any> = ({ title, action, children, as, ...rest }) => {
    return (
        <StyledCard {...rest}>
            {title &&
                <CardHeader title={title} action={action} as={as} />
            }
            {children}
        </StyledCard >
    );
};

export default Card;
