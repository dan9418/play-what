import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useRouteContext from '../../../contexts/RouteContext';
import { positionState, _chartState } from '../../../state/state';
import Icon from '../../ui/Icon';
import Panel from '../../ui/Panel';

const StyledSection = styled.div`
	width: 100%;

    & .block-grid {
        display: grid;
        width: 100%;
    }
`;

const StyledBlock = styled.div`
	background-color: #f5f5f5;
	border-radius: 8px;
	border: 1px solid #ccc;

	display: flex;
	justify-content: space-between;
	align-items: center;

	margin: 8px;
	padding: 8px 16px;

	cursor: pointer;
	
	&.active {
		border: 1px solid orange;
	}

	& svg {
		* {
			fill: #555
		}
	}
`;

const Section = ({ section, sIndex }) => {
	const { id, name, blocks } = section;
	const widths = blocks.map(c => c.t || 1);
	const [position, setPosition] = useRecoilState(positionState);
	const { push } = useRouteContext();

	const style = {
		gridTemplateColumns: widths.map(n => n + 'fr').join(' ')
	};
	return (
		<StyledSection>
			<h2>{name}</h2>
			<div className='block-grid' style={style}>
				{blocks.map((c, i) => {
					const isActive = sIndex === position[0] && i === position[1]
					const { keyCenter, intervals } = c;
					const keyCenterPreset = PodUtils.findPreset(keyCenter, { podType: 'note' }) || { name: '?' };
					const intervalsPreset = PodListUtils.findPreset(intervals, { podType: 'chord' }) || { id: '?' };
					const name = `${keyCenterPreset.id} ${intervalsPreset.id}`;
					return (
						<StyledBlock
							key={i}
							className={isActive ? 'active' : null}
							onClick={() => setPosition([sIndex, i])}
						>
							{name}
							<Icon
								iconId="plus"
								onClick={() => push({
									level: 'block',
									name,
									index: i
								})}
							/>
						</StyledBlock>
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

	h2 {
		margin: 32px 0 16px;
	}
`;

const Chart = ({ chart }) => {
	return (
		<StyledChart>
			<Panel name="Chart">
				{chart.sections.map((s, i) => (
					<Section key={s.id} section={s} sIndex={i} />
				))}
			</Panel>
		</StyledChart>
	);
};

export default Chart;
