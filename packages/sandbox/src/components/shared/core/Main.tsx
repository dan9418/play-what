import React from 'react';
import styled from 'styled-components';
import { PathNavContextProvider } from '../../../contexts/_PathNavContext';
import { RouteContextConsumer } from '../../../contexts/_RouteContext';

const StyledMain = styled.main`
	padding: 96px 0px;
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

const Main: React.FC = () => {
  return (
    <StyledMain>
      {/*<div className="gutter" />*/}
      <PathNavContextProvider>
        <RouteContextConsumer>
          {({ Component, params }) => <Component params={params} />}
        </RouteContextConsumer>
      </PathNavContextProvider>
    </StyledMain>
  );
};

export default Main;
