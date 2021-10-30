import React from 'react';
import styled from 'styled-components';
import { RouteContextConsumer, RouteContextProvider } from '../contexts/_RouteContext';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;
	// max-width: 1024px;
	min-height: 100%;
  position: relative;
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <RouteContextProvider>
        <RouteContextConsumer>{value => value && value.pageId ?
          <value.component params={value.params} />
          : 'Loading...'
        }</RouteContextConsumer>
      </RouteContextProvider>
    </StyledMain>
  );
};

export default Main;
