import React, { useState } from 'react';
import styled from 'styled-components';
import { TEST_SONG } from '../../state/songs';
import Chart from '../modules/Chart/Chart';

const StyledChartPage = styled.div`

`;

const ChartPage = () => {
	const [chart, setChart] = useState(TEST_SONG);
	return (
		<StyledChartPage>
			<Chart chart={chart} setChart={setChart} />
		</StyledChartPage>
	);
};

export default ChartPage;
