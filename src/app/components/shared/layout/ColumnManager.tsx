import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export const StyledColumnManager = styled.div<{
  $tablet?: string[];
  $desktop?: string[];
}>`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${({ $tablet }) =>
    $tablet
      ? `
        @media(min-width: 512px) {
            grid-template-columns: ${$tablet.join(" ")}
        }
    `
      : ""}

  ${({ $desktop }) =>
    $desktop
      ? `
        @media(min-width: 1024px) {
            grid-template-columns: ${$desktop.join(" ")}
        }
    `
      : ``}
`;

export interface IColumnManagerProps extends PropsWithChildren {
  tablet?: string[];
  desktop?: string[];
}

const ColumnManager: React.FC<IColumnManagerProps> = ({
  tablet,
  desktop,
  children,
}) => {
  return (
    <StyledColumnManager $tablet={tablet} $desktop={desktop}>
      {children}
    </StyledColumnManager>
  );
};

export default ColumnManager;
