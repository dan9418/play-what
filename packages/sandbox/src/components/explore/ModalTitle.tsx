import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    margin: 24px 0;

    .ivl-name {
        text-align: center;
    }
    .ivl-summary {
        text-align: center;
        margin-top: 4px;
        font-style: italic;
        color: #555;
    }
`;

const ModalTitle: React.FC<any> = ({ title, subtitle }) => {
    return (
        <StyledTitle>
            <h2 className="ivl-name">{title}</h2>
            <div className="ivl-summary">{subtitle}</div>
        </StyledTitle>
    )
}

export default ModalTitle;
