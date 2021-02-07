import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { LEVEL } from '../core/config';
import Subpanel from '../ui/Subpanel';
import Table from '../ui/Table';

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

const getTables = (tableProps) => {
	if (!tableProps) return null;

	const data = Array.isArray(tableProps) ? tableProps : [tableProps];

	return data.map((d, i) => <Table key={i} {...d} />);
}

export const NamedKeyedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId, theoryId } = childLevel;

	return data.items.map((item, i) => {
		const preview = childLevel.getPreview(item);
		const tableProps = childLevel.getTableProps(item, theoryId);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={childLevel.name} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={item.name} levelId={levelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ data, childLevelId }) => {
	const childLevel = LEVEL[childLevelId];
	const { name: levelName, levelId, theoryId } = childLevel;

	return data.items.map((item, i) => {
		const preview = childLevel.getPreview(item);
		const tableProps = childLevel.getTableProps(item, theoryId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={levelName} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={`${levelName} ${i}`} levelId={levelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, levelId, theoryId, propertyId } = property;
		const item = data[propertyId];

		const childLevel = LEVEL[levelId];
		const preview = childLevel.getPreview(item, theoryId);
		const tableProps = childLevel.getTableProps(item, theoryId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={childLevel.name} preview={preview} >
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={name} levelId={levelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ data, levelId, childLevelId }) => {
	const level = LEVEL[levelId];
	const childLevel = LEVEL[childLevelId];
	const { name, theoryId } = childLevel;

	return data.map((item, i) => {
		const preview = childLevel.getPreview(item);
		const tableProps = childLevel.getTableProps(item, theoryId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={childLevel.name} preview={preview} >
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={`${name} ${i}`} levelId={childLevelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ data, childLevelId, labels }) => {
	const childLevel = LEVEL[childLevelId];
	const { levelId } = childLevel;

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId, theoryId } = label;
		const preview = childLevel.getPreview(item, theoryId);
		const tableProps = childLevel.getTableProps(item, theoryId);

		return (
			<StyledTypeRow key={pathId}>
				<Subpanel name={name} caption={childLevel.name} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
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
