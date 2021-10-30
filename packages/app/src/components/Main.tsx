import React from 'react';
import styled from 'styled-components';
import { RouteContextConsumer } from '../contexts/_RouteContext';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;
	// max-width: 1024px;
	min-height: 100%;
  position: relative;

  padding: 80px 0 128px;
  overflow: auto;
`;

const Main: React.FC = () => {
  return (
    <StyledMain>
      <RouteContextConsumer>{value => value && value.pageId ?
        <value.component params={value.params} />
        : 'Loading...'
      }</RouteContextConsumer>
    </StyledMain>
  );
};

export default Main;
