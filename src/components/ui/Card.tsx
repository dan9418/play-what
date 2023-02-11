import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${(props) => props.theme.surface.card};
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

export const CardHeader: React.FC<any> = ({
  title,
  level = 2,
  action = null,
}) => {
  const AsTag: any = `h${level}`;
  return (
    <div className="header">
      <AsTag>{title}</AsTag>
      {action}
    </div>
  );
};

export interface ICardProps extends PropsWithChildren<any> {
  title?: string;
  subtitle?: string;
  action?: any;
  level?: number;
}

const Card: React.FC<ICardProps> = ({
  title,
  subtitle,
  action,
  children,
  level = 1,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      {title && <CardHeader title={title} action={action} level={level} />}
      {subtitle && <CardHeader title={subtitle} level={level + 1} />}
      {children}
    </StyledCard>
  );
};

export default Card;
