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

const getLevelContent = (pathHead, levelData) => {
	const { levelId } = pathHead;

	const level = LEVEL[levelId];
	const levelTypeId = level.typeId;

	const type = TYPE[levelTypeId];

	const { typeProps } = level;
	const { component: Component } = type;

	return (
		<Component
			data={levelData}
			{...typeProps}
		/>
	);
};

const getPanelProps = (pathHead, levelData) => {
	const { levelId, name } = pathHead;

	const level = LEVEL[levelId];
	const levelName = level.name;
	const levelTypeId = level.typeId;

	const type = TYPE[levelTypeId];
	const typeName = type.name;

	const caption = `${levelName} (${typeName})`;
	const preview = level.getPreview(levelData)

	return {
		name,
		caption,
		preview
	}
};

const Explorer = () => {
	const { pathHead } = useLevelContext();
	const { levelData } = useDataContext();

	const panelProps = getPanelProps(pathHead, levelData);

	const content = getLevelContent(pathHead, levelData);

	return (
		<StyledPage>
			<BreadcrumbList />
			<Panel {...panelProps}>
				{content}
			</Panel>
		</StyledPage>
	);
};

export default Explorer;
