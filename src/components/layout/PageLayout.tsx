import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import BreadcrumbList from '../breadcrumb-list/BreadcrumbList';
import { StyledCard } from '../ui/Card';
import SEO from "../utils/SEO";

const StyledPageLayout = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    min-height: calc(100vh - 330px);

    > .header {
        border-bottom: 1px solid ${({ theme }) => theme.utils.border};    
        width: 100%;
        margin: auto;
        padding: 0 8px 8px;
        @media(min-width: 512px) {
            padding: 0 16px 16px;
        }

        > h1 {
            width: 100%;
            font-size: 150%;
            @media(min-width: 512px) {
                font-size: 300%;
            }
            text-align: left;
            color: ${({ theme }) => theme.text.primary};

            display: flex;
            align-items: center;
            justify-content: space-between;
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

    > .content {
        margin: 16px 0;

        ${StyledCard} + ${StyledCard}, p + p {
            margin-top: 16px;
        }
    }

    ul.disc li {
        list-style-type: disc;
        margin: 8px 0 8px 16px;
    }
`

interface IPageLayoutProps extends PropsWithChildren<any> {
    title: string;
    subtitle?: string;
    action?: any;
    className?: string;
    isHome?: boolean;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ title, subtitle, action, className, children, isHome }) => {
    return (
        <StyledPageLayout>
            <SEO title={subtitle ? `${title} - ${subtitle}` : title} />
            {!isHome &&
                <>
                    <BreadcrumbList />
                    <div className="header">
                        <h1>
                            {title}
                            {action && <div className='action'>{action}</div>}
                        </h1>
                        {subtitle && <h2>{subtitle}</h2>}

                    </div>
                </>
            }
            <div className={`content ${className}`}>
                {children}
            </div>
        </StyledPageLayout>
    );
};

export default PageLayout;
