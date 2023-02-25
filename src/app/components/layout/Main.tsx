import React from "react";
import styled from "styled-components";
import { logPresetJson } from "../../core/models/Model.constants";

const StyledMain = styled.main`
  margin: auto;
  width: 100%;
  min-height: 100vh;

  position: relative;

  padding: 48px 0 0;
  overflow: auto;
`;

const Main: React.FC<any> = ({ children }) => {
  false && logPresetJson();
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
