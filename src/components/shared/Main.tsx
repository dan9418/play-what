import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;

  position: relative;

  padding: 80px 0 0;
  overflow: auto;
`;

const Main: React.FC = ({ children }) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;
