import BlockUtils from '@pw/core/src/Block.utils';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import PodSubpanel from '../modules/Pod/PodSubpanel';
import PodListSubpanel from '../modules/PodList/PodListSubpanel';
import Panel from '../ui/Panel';
import { LEVEL, LEVEL_ID, TYPE } from './pages';

const StyledBlockPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h2 {
		width: 100%;
		max-width: 512px;
		margin: 32px 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

const Page = () => {
	const { data, pathHead } = useLevelContext();

	const { levelId, pathId, name } = pathHead;

	const levelName = LEVEL[levelId].name;
	const typeName = TYPE[LEVEL[levelId].typeId].name;
	const caption = `${levelName} | ${typeName}`;

	const preview = 'preview';

	return (
		<StyledBlockPage>
			<Panel name={name} caption={caption} preview={preview}>
               panel
			</Panel>
		</StyledBlockPage>
	);
};

export default Page;
