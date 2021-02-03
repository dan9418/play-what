import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import SectionSubpanel from '../modules/Section/SectionSubpanel';
import Panel from '../ui/Panel';

const StyledChartPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 32px 0 16px;

		> * {
			margin: 16px 0;
		}
	}

	.pod-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 512px;
		>:first-child {
			width: 100%;
			margin-right: 8px;	
		}
	}
`;

const ChartPage = () => {

	const { data: chart } = useLevelContext();
	const preview = chart.sections.map(s => s.id).join(' ');

	return (
		<StyledChartPage>
			<Panel name={chart.name} caption="Chart" preview={preview}>
				{
					chart.sections.map((s, i) => {
						return (
							<div key={i} className="pod-wrapper">
								<SectionSubpanel section={s} />
								<ZoomButton name={`Section ${s.name}`} levelId="section" pathId={s.id} />
							</div>
						);
					})
				}
			</Panel>
		</StyledChartPage>
	);
};

export default ChartPage;
