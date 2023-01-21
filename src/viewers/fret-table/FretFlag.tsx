import * as React from "react";
import styled from "styled-components";

export interface IFretConfig {
  color?: string;
  text?: string | number;
  opacity?: number;
}

interface IFretFlagProps {
  fretConfig?: IFretConfig;
}

export const StyledFretFlag = styled.div<{
  $color?: string;
  $opacity?: number;
}>`
  height: 16px;
  width: 16px;
  background: ${(props) => props.$color || ""};
  opacity: ${(props) => props.$opacity || 1};
  border-radius: 100%;
  z-index: 1;
`;

const FretFlag: React.FC<IFretFlagProps> = ({ fretConfig }) => {
  const { color, text, opacity } = fretConfig || {};
  return (
    <StyledFretFlag $color={color} $opacity={opacity}>
      {text}
    </StyledFretFlag>
  );
};

export default FretFlag;
