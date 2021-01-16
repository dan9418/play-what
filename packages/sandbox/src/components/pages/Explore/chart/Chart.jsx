import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import React from 'react';
import styled from 'styled-components';
import { OUT_OF_NOWHERE } from '../../../../state/songs';
import Subpanel from '../Subpanel';

const StyledSection = styled.div`
	width: 100%;

    & .concept-grid {
        display: grid;
        width: 100%;

        & > div {
            background-color: #eee;
            border-radius: 8px;
            margin: 8px;
            padding: 8px;
            text-align: center;
        }
    }
`;

const Section = ({ section }) => {
	const { id, name, concepts } = section;
	const widths = concepts.map(c => c.t || 1);
	const style = {
		gridTemplateColumns: widths.map(n => n + 'fr').join(' ')
	};
	return (
		<StyledSection>
			<h2>{name}</h2>
			<div className='concept-grid' style={style}>
				{concepts.map((c, i) => {
					const { keyCenter, intervals } = c;
					const keyCenterPreset = PodUtils.findPreset(keyCenter, { podType: 'note' }) || { name: '?' };
					const intervalsPreset = PodListUtils.findPreset(intervals, { podType: 'chord' }) || { name: '?' };
					const name = `${keyCenterPreset.id} ${intervalsPreset.id}`;
					return (
						<div key={i}>
							{name}
						</div>
					);
				})}
			</div>
		</StyledSection>
	);
};

const StyledChart = styled.div`
	width: 100%;
    max-width: 1024px;
    margin: auto;
`;

const Chart = () => {
	const CHART = OUT_OF_NOWHERE;
	return (
		<StyledChart>
			<Subpanel name="Chart">
				{CHART.sections.map(s => (
					<Section key={s.id} section={s} />
				))}
			</Subpanel>
		</StyledChart>
	);
};

export default Chart;
