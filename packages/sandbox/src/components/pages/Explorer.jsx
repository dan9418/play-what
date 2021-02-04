import React from 'react';
import styled from 'styled-components';
import { useDataContext } from '../../contexts/DataContext';
import { useLevelContext } from '../../contexts/LevelContext';
import BreadcrumbList from '../core/BreadcrumbList';
import { LEVEL, TYPE, TYPE_ID } from '../core/config';
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

const getLevelContent = (level, levelData, type) => {

	const { typeProps } = level;
	const { component: Component, typeId } = type;

	const data = typeId === TYPE_ID.NamedKeyedList || typeId === TYPE_ID.NamedList ?
		levelData.data : levelData;

	return (
		<Component
			data={data}
			{...typeProps}
		/>
	);
};

const Explorer = () => {
	const { pathHead } = useLevelContext();
	const { levelData } = useDataContext();

	const { levelId, name } = pathHead;

	const level = LEVEL[levelId];
	const levelName = level.name;
	const levelTypeId = level.typeId;

	const type = TYPE[levelTypeId];
	const typeName = type.name;

	const caption = `${levelName} (${typeName})`;
	const preview = 'preview';

	const content = getLevelContent(level, levelData, type);

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
