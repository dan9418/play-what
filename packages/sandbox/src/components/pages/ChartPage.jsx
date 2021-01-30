import React from 'react';
import styled from 'styled-components';
import Chart from '../modules/Chart/Chart';

const StyledChartPage = styled.div`

`;

const ChartPage = ({ data: chart, setData: setChart }) => {

	return (
		<StyledChartPage>
			<Chart chart={chart} setChart={setChart} />
		</StyledChartPage>
	);
};

export default ChartPage;
