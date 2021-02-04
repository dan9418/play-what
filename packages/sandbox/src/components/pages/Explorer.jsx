import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { useLevelContext } from '../../contexts/LevelContext';
import BreadcrumbList from '../core/BreadcrumbList';
import { LEVEL, LEVEL_ID, TYPE } from '../core/config';
import { LabeledList, NamedKeyedList, NamedList, PWObject } from '../core/Types';
import Panel from '../ui/Panel';

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

const getLevelContent = (levelId, levelData) => {
	let content = null;

	if (levelId === LEVEL_ID.Chart) {
		content = <NamedKeyedList data={levelData.data} childLevel={LEVEL[LEVEL_ID.Section]} />;
	}
	else if (levelId === LEVEL_ID.Section) {
		content = <NamedList data={levelData.data} childLevel={LEVEL[LEVEL_ID.Block]} />;
	}
	else if (levelId === LEVEL_ID.Block) {
		const properties = [
			{
				propertyId: 'keyCenter',
				levelId: LEVEL_ID.Pod,
				name: 'Key Center'
			},
			{
				propertyId: 'intervals',
				levelId: LEVEL_ID.PodList,
				name: 'Intervals'
			}
		];
		content = <PWObject data={levelData} properties={properties} />;
	}
	else if (levelId === LEVEL_ID.PodList) {
		content = <NamedList data={levelData} childLevel={LEVEL[LEVEL_ID.Pod]} />;
	}
	else if (levelId === LEVEL_ID.Pod) {
		content = <LabeledList
			data={levelData}
			childLevel={LEVEL[LEVEL_ID.PodIndex]}
			labels={[
				{ pathId: 'pitch', name: 'Pitch' },
				{ pathId: 'degree', name: 'Degree' }
			]}
		/>;
	}
	else if (levelId === LEVEL_ID.PodIndex) {
		content = <div>{`Data: ${levelData}`}</div>;
	}
	return content;
};

const Explorer = () => {
	const { pathHead } = useLevelContext();
	const { levelData } = useDataContext();

	const { levelId, name } = pathHead;

	const levelName = LEVEL[levelId].name;
	const levelTypeId = LEVEL[levelId].typeId;
	const typeName = TYPE[levelTypeId].name;
	const caption = `${levelName} | ${typeName}`;
	const preview = 'preview';

	const content = getLevelContent(levelId, levelData);

	return (
		<StyledPage>
			<BreadcrumbList />
			<Panel name={name} caption={caption} preview={preview}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Explorer;
