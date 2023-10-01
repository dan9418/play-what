import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { MediaQuery } from "../../../styles/breakpoint";

interface IStyledColumnManagerProps {
  $tablet?: string[];
  $desktop?: string[];
}

export const StyledColumnManager = styled.div<IStyledColumnManagerProps>`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${({ $tablet }) =>
    $tablet
      ? `
        ${MediaQuery.Tablet} {
            grid-template-columns: ${$tablet.join(" ")}
        }
    `
      : ""}

  ${({ $desktop }) =>
    $desktop
      ? `
        ${MediaQuery.Desktop} {
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
