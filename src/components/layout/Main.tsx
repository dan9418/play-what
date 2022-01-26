import React from 'react';
import styled from 'styled-components';
import { logPresetJson } from '../../core/models/Model.presets';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;
  min-height: 100vh;

  position: relative;

  padding: 32px 0 0;
  overflow: auto;
`;

const Main: React.FC = ({ children }) => {
  false && logPresetJson();
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;
