import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { RouteContextConsumer, useRouteContext } from '../contexts/RouteContext';
import { dataListState } from '../state/state';

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
  const [dataList, setDataList] = useRecoilState(dataListState);
  const routeContext = useRouteContext();
  const routeId = routeContext && routeContext.pageId;

  useEffect(() => {
    setDataList([]);
  }, [routeId]);

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
