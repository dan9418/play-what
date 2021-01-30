import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../../core/Level';
import Panel from '../../ui/Panel';
import Section from '../Section/Section';

const StyledSectionWrapper = styled.div`
	width: 100%;
`;

const StyledSectionHeader = styled.h2`
	margin: 32px 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SectionWrapper = ({ section, sIndex }) => {
	const { name } = section;

	return (
		<StyledSectionWrapper>
			<StyledSectionHeader>
				{name}
				<ZoomButton level='section' name={name} id={sIndex} size={24} />
			</StyledSectionHeader>
			<Section section={section} sIndex={sIndex} />
		</StyledSectionWrapper>
	);
};

const StyledChart = styled.div`
	width: 100%;
    max-width: 1024px;
	margin: auto;
`;

const Chart = () => {
	const { data: chart } = useLevelContext();
	return (
		<StyledChart>
			<Panel name="Chart">
				{chart.sections.map((s, i) => (
					<SectionWrapper key={s.id} section={s} sIndex={i} />
				))}
			</Panel>
		</StyledChart>
	);
};

export default Chart;
