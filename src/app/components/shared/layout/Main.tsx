import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  margin: auto;
  width: 100%;
  min-height: 100vh;

  position: relative;

  padding: 64px 0 0;
  overflow: auto;
`;

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
