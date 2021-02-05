import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { LEVEL } from '../core/config';
import Subpanel from '../ui/Subpanel';

const StyledTypeRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 512px;
	>:nth-child(1) {
		width: 100%;
		margin-right: 8px;	
	}
`;

export const NamedKeyedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId } = childLevel;

	return data.data.map((item, i) => {
		const preview = childLevel.getPreview(data);
		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={childLevel.name} preview={preview} />
				<ZoomButton name={item.name} levelId={levelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name: levelName, levelId } = childLevel;

	return data.data.map((item, i) => {
		const preview = childLevel.getPreview(item);
		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={levelName} preview={preview} />
				<ZoomButton name={`${levelName} ${i}`} levelId={levelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, levelId, propertyId } = property;
		const level = LEVEL[levelId];
		const preview = level.getPreview(data[propertyId]);
		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={level.name} preview={preview} />
				<ZoomButton name={name} levelId={levelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name, levelId } = childLevel;

	return data.map((item, i) => {
		const preview = childLevel.getPreview(item);
		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={childLevel.name} preview={preview} />
				<ZoomButton name={`${name} ${i}`} levelId={levelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ data, childLevelId, labels }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId } = childLevel;

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		const preview = childLevel.getPreview(item);
		return (
			<StyledTypeRow key={pathId}>
				<Subpanel name={name} caption={childLevel.name} preview={preview} />
				<ZoomButton name={name} levelId={levelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const Native = ({ data }) => {
	return (
		<div>
			{data}
		</div>
	);
};
