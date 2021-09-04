import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExplorePage from '../../explore/ExplorePage';
import TestPage from '../../test/TestPage';

const StyledMain = styled.main`
	padding: 96px 0px;
	margin: auto;
	width: 100%;
	// max-width: 1024px;
	min-height: 100%;
  position: relative;
`;

const Main: React.FC = () => {
  const [page, setPage] = useState(<ExplorePage />);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const experiment = urlParams.get('experiment');
    if (experiment === 'test') {
      setPage(<TestPage />);
    }
  }, []);

  return (
    <StyledMain>
      {page}
    </StyledMain>
  );
};

export default Main;
