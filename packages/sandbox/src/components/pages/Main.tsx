import React from 'react';
import styled from 'styled-components';
import { PathNavContextProvider } from '../../contexts/PathNavContext';
import { RouteContextConsumer } from '../../contexts/RouteContext';

const StyledMain = styled.main`
	padding: 32px 0px;
	margin: auto;
	width: 100%;
	max-width: 1024px;
	min-height: 100%;
  position: relative;

  .gutter {
		position: absolute;
		left: 100%;
		height: 90%;
		width: 100%;
    z-index: 100;
		background-color: #ecefef;
	}
`;

const Main = () => {
  return (
    <StyledMain>
      {/*<div className="gutter" />*/}
      <PathNavContextProvider>
        <RouteContextConsumer>
          {({ Component }) => <Component />}
        </RouteContextConsumer>
      </PathNavContextProvider>
    </StyledMain>
  );
};

export default Main;
