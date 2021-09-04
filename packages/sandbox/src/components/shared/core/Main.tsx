import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExplorePage from '../../explore/ExplorePage';
import TestPage from '../../test/TestPage';

const StyledMain = styled.main`
	margin: auto;
	width: 100%;
	// max-width: 1024px;
	min-height: 100%;
  position: relative;
`;

const StyledLoadingSpinner = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  
  font-size: 300%;

  padding: 32px;
`;

const Main: React.FC = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const experiment = urlParams.get('experiment');
    if (experiment === 'test') {
      setPage(<TestPage />);
    }
    else {
      setPage(<ExplorePage />);
    }
  }, []);

  return (
    <StyledMain>
      {page}
      {page === null && (
        <StyledLoadingSpinner>Loading...</StyledLoadingSpinner>
      )}
    </StyledMain>
  );
};

export default Main;
