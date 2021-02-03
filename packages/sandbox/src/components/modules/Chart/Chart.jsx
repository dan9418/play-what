import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../../core/Level';
import { LEVEL_ID } from '../../pages/pages';
import Panel from '../../ui/Panel';
import SectionSubpanel from '../Section/SectionSubpanel';
import Section from './Section';

const StyledSectionWrapper = styled.div`
	width: 100%;
`;

const StyledSectionHeader = styled.h2`
	margin: 32px 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SectionWrapper = ({ section }) => {
	const { name, id } = section;

	return (
		<StyledSectionWrapper>
			<StyledSectionHeader>
				{name}
				<ZoomButton levelId={LEVEL_ID.Section} name={name} pathId={id} size={24} />
			</StyledSectionHeader>
			<Section section={section} />
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
			<Panel name={chart.name} caption="Chart" preview={chart.data.map(s => s.id).join(' ')}>
				{/*chart.data.map((s, i) => (
					<SectionWrapper key={s.id} section={s} />
				))*/}
				{chart.data.map((s, i) => (
					<SectionSubpanel key={s.id} section={s} />
				))}
			</Panel>
		</StyledChart>
	);
};

export default Chart;
