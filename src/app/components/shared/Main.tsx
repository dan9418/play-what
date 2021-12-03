import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { dataIndexState, dataListState } from '../../state/state';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;

  position: relative;

  padding: 80px 0 0;
  overflow: auto;
`;

const Main: React.FC = ({ children }) => {
  const [dataList, setDataList] = useRecoilState(dataListState);
  const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

  useEffect(() => {
    setDataList([]);
    setDataIndex(undefined);
  }, []);

  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;
