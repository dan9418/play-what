import * as React from "react";
import styled from "styled-components";

interface IFretFlagProps {
  color?: string;
  text?: string | number;
  opacity?: number;
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

const FretFlag: React.FC<IFretFlagProps> = ({ color, text, opacity }) => {
  return (
    <StyledFretFlag $color={color} $opacity={opacity}>
      {text}
    </StyledFretFlag>
  );
};

export default FretFlag;
