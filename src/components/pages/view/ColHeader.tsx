import React from "react";
import styled from 'styled-components';

const StyledColHeader = styled.div`
    h3 {
        padding-bottom: 8px;
        margin-bottom: 16px;
        font-weight: normal;
        color: ${props => props.theme.text.secondary};
        border-bottom: 1px solid ${props => props.theme.utils.border};
    }
`;

const ColHeader: React.FC<any> = ({ title, subTitle }) => {

    return (
        <StyledColHeader>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </StyledColHeader>
    );
};

export default ColHeader;
