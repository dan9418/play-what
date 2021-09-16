import React from 'react';
import styled from 'styled-components';

export const StyledHighlightBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 128px;

    background: ${props => props.theme.surface.highlight};
    //border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    padding: 16px;

    .title {
        //text-align: center;
    }
    .subtitle {
        //text-align: center;
        margin-top: 4px;
        font-style: italic;
        color: ${props => props.theme.text.mediumDark};
    }
`;

const HighlightBox: React.FC<any> = ({ children, title, subtitle }) => {
    return (
        <StyledHighlightBox>
            {title && <h2 className="title">{title}</h2>}
            {subtitle && <div className="subtitle">{subtitle}</div>}
            {children}
        </StyledHighlightBox>
    )
}

export default HighlightBox;
