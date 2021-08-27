import React from 'react';
import styled from 'styled-components';
import ExplorePage from '../../explore/ExplorePage';

const StyledMain = styled.main`
	padding: 96px 0px;
	margin: auto;
	width: 100%;
	// max-width: 1024px;
	min-height: 100%;
  position: relative;
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <ExplorePage />
    </StyledMain>
  );
};

export default Main;
