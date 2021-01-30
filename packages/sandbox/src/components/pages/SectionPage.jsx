import React, { useState } from 'react';
import styled from 'styled-components';
import { TEST_SONG } from '../../state/songs';
import Section from '../modules/Section/Section';
import Panel from '../ui/Panel';

const StyledSectionPage = styled.div`

`;

const SectionPage = () => {
	const [section, setSection] = useState(TEST_SONG.sections[0]);
	return (
		<StyledSectionPage>
			<Panel name="Section">
				<Section section={section} setSection={setSection} sIndex={0} />
			</Panel>
		</StyledSectionPage>
	);
};

export default SectionPage;
