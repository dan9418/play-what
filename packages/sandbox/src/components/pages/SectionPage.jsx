import React, { useState } from 'react';
import styled from 'styled-components';
import { TEST_SONG } from '../../state/songs';
import Chart from '../modules/Chart/Chart';

const StyledSectionPage = styled.div`

`;

const SectionPage = () => {
	const [chart, setChart] = useState(TEST_SONG);
	return (
		<StyledSectionPage>
			<Chart chart={chart} setChart={setChart} />
		</StyledSectionPage>
	);
};

export default SectionPage;
