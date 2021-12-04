import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.div`
    width: 100%;
    padding-top: 16px;

    .header {
        border-bottom: 1px solid ${({ theme }) => theme.border};    
        padding-bottom: 16px;
        width: 100%;
        margin: auto;

        > h1 {
            width: 100%;
            font-size: 300%;
            text-align: left;
            color: #333;
        }

        > h2 {
            margin-top: 8px;
            width: 100%;
            text-align: left;
            color: #555;
            font-size: 100%;
        }
    }
`

const PageTitle: React.FC<any> = ({ title, subtitle, children }) => {
    return (
        <StyledPageTitle>
            <div className="header">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            {children}
        </StyledPageTitle>
    );
};

export default PageTitle;
