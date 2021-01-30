import React from 'react';
import styled from 'styled-components';
import useRouteContext from '../../../contexts/RouteContext';
import Icon from '../../ui/Icon';
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

	& svg:hover {
		cursor: pointer;
	}
`;

const SectionWrapper = ({ section, sIndex }) => {
	const { name } = section;
	const { push } = useRouteContext();

	return (
		<StyledSectionWrapper>
			<StyledSectionHeader>
				{name}
				<Icon
					iconId="zoom"
					size={24}
					onClick={() => push({
						level: 'section',
						name,
						index: sIndex
					})}
				/>
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

const Chart = ({ chart }) => {
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
