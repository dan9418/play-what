import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import BreadcrumbList from "./BreadcrumbList";
import SEO from "../utils/SEO";
import { MediaQuery } from "../../../styles/breakpoint";

const StyledPageLayout = styled.div<{ $maxWidth }>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "1024px"};
  margin: auto;
  min-height: calc(100vh - 330px);

  > .header {
    border-bottom: 1px solid ${({ theme }) => theme?.utils?.border};
    width: 100%;
    margin: auto;
    padding: 0 8px 8px;
    ${MediaQuery.Tablet} {
      padding: 0 16px 16px;
    }

    > h1 {
      width: 100%;
      font-size: 150%;
      ${MediaQuery.Tablet} {
        font-size: 300%;
      }
      text-align: left;
      color: ${({ theme }) => theme?.text?.primary};

      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > h2 {
      margin-top: 4px;
      width: 100%;
      text-align: left;
      color: ${({ theme }) => theme?.text?.secondary};
      font-size: 80%;
      ${MediaQuery.Tablet} {
        font-size: 100%;
      }
    }
  }

  > .content {
    padding: 16px 0;
  }
`;

interface IPageLayoutProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  action?: any;
  className?: string;
  hideHeader?: boolean;
  maxWidth?: string;
}

const PageLayout: React.FC<IPageLayoutProps> = ({
  title,
  subtitle,
  action,
  maxWidth,
  className = "",
  children,
  hideHeader,
}) => {
  return (
    <StyledPageLayout $maxWidth={maxWidth}>
      <SEO title={subtitle ? `${title} - ${subtitle}` : title} />
      {!hideHeader && (
        <>
          <BreadcrumbList />
          <div className="header">
            <h1>
              {title}
              {action && <div className="action">{action}</div>}
            </h1>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </>
      )}
      <div className={`content ${className}`}>{children}</div>
    </StyledPageLayout>
  );
};

export default PageLayout;
