import React from 'react';
import styled from 'styled-components';
import BreadcrumbList from '../breadcrumb-list/BreadcrumbList';
import SEO from "../utils/SEO";

const StyledPageTitle = styled.div`
    width: 100%;

    .header {
        border-bottom: 1px solid ${({ theme }) => theme.utils.border};    
        width: 100%;
        margin: auto;
        padding-bottom: 8px;
        @media(min-width: 512px) {
            padding-bottom: 16px;
        }

        > h1 {
            width: 100%;
            font-size: 150%;
            @media(min-width: 512px) {
                font-size: 300%;
            }
            text-align: left;
            color: ${({ theme }) => theme.text.primary};;
        }

        > h2 {
            margin-top: 4px;
            width: 100%;
            text-align: left;
            color: ${({ theme }) => theme.text.secondary};;
            font-size: 80%;
            @media(min-width: 512px) {
                font-size: 100%;
            }
        }
    }
`

const PageTitle: React.FC<any> = ({ title, subtitle, action, children }) => {
    return (
        <>
            <SEO title={title} />
            <BreadcrumbList />
            <StyledPageTitle>
                <div className="header">
                    <h1>{title}</h1>
                    {subtitle && <h2>{subtitle}</h2>}
                    {action}
                </div>
                {children}
            </StyledPageTitle>
        </>
    );
};

export default PageTitle;
