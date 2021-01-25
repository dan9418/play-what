import React from 'react';
import styled from 'styled-components';
import Chart from '../modules/Chart/Chart';

const StyledChartPage = styled.div`
	width: 100%;
    min-height: 100%;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
`;

const ChartPage = () => {

	return (
		<StyledChartPage>
			<Chart/>
		</StyledChartPage>
	);
};

export default ChartPage;
