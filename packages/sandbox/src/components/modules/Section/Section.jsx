import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import useRouteContext from '../../../contexts/RouteContext';
import { positionState } from '../../../state/state';
import Icon from '../../ui/Icon';

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
`;

const StyledSection = styled.div`
    display: grid;
	width: 100%;
	grid-template-columns: 1fr;
	
	@media(min-width: 512px) {
		grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
	}
`;

const Section = ({ section, sIndex }) => {
	const { id, name, blocks } = section;
	const widths = blocks.map(c => c.t || 1);
	const [position, setPosition] = useRecoilState(positionState);

	const gridTemplateColumns = widths.map(n => n + 'fr').join(' ');

	return (
		<StyledSection $gridTemplateColumns={gridTemplateColumns}>
			{blocks.map((c, i) => {
				const isActive = sIndex === position[0] && i === position[1]
				const { keyCenter, intervals } = c;
				const keyCenterPreset = PodUtils.findPreset(keyCenter, { podType: 'note' }) || { name: '?' };
				const intervalsPreset = PodListUtils.findPreset(intervals, { podType: 'chord' }) || { id: '?' };
				const blockName = `${keyCenterPreset.id} ${intervalsPreset.id}`;
				return (
					<StyledBlock
						key={i}
						className={isActive ? 'active' : null}
						onClick={() => setPosition([sIndex, i])}
					>
						{blockName}
						<ZoomButton level='block' name={blockName} index={i} />
					</StyledBlock>
				);
			})}
		</StyledSection>
	);
}

export default Section;