import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import Panel from '../ui/Panel';
import { LEVEL, LEVEL_ID, TYPE, TYPE_ID } from './pages';

const StyledPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;

        > * {
			margin: 16px 0;
		}
	}

	h2 {
		width: 100%;
		max-width: 512px;
		margin: 32px 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    .pod-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 512px;
		>:first-child {
			font-weight: bold;
			margin-right: 8px;	
		}
		>:nth-child(2) {
			width: 100%;
			margin-right: 8px;	
		}
	}
`;

const getList = (list, SubpanelComponent) => {

	return list.map((item, i) => {
		return (
			<div key={i} className="pod-wrapper">
				<div>{i}</div>
				<SubpanelComponent data={item} />
				<ZoomButton name={`Pod ${i}`} levelId={LEVEL_ID.Pod} pathId={i} />
			</div>
		);
	})
};

const Page = () => {
	const { data, pathHead } = useLevelContext();

	const { levelId, pathId, name } = pathHead;

	const levelName = LEVEL[levelId].name;
	const levelTypeId = LEVEL[levelId].typeId;
	const typeName = TYPE[levelTypeId].name;
	const caption = `${levelName} | ${typeName}`;
	const preview = 'preview';

	let content = null;

	if (levelTypeId === TYPE_ID.NamedKeyedList) {
		if (levelId === LEVEL_ID.Chart) {
			content = getList(data.data, LEVEL[LEVEL_ID.Section].subpanelComponent);
		}
	}

	return (
		<StyledPage>
			<Panel name={name} caption={caption} preview={preview}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Page;
