import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { MODEL } from './MODEL';
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

export const NamedKeyedList = ({ data, childModelId }) => {
	const childModel = MODEL[childModelId];
	const { modelId } = childModel;

	return data.items.map((item, i) => {
		const preview = childModel.getPreview(item);
		const tableProps = childModel.getTableProps(item);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={childModel.name} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={item.name} modelId={modelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ data, childModelId }) => {
	const childModel = MODEL[childModelId];
	const { name: modelName, modelId } = childModel;

	return data.items.map((item, i) => {
		const preview = childModel.getPreview(item);
		const tableProps = childModel.getTableProps(item);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={modelName} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={`${modelName} ${i}`} modelId={modelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = data[propertyId];

		const childModel = MODEL[modelId];
		const preview = childModel.getPreview(item);
		const tableProps = childModel.getTableProps(item);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={childModel.name} preview={preview} >
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ data, modelId, childModelId }) => {
	const model = MODEL[modelId];
	const childModel = MODEL[childModelId];
	const { name } = childModel;

	return data.map((item, i) => {
		const preview = childModel.getPreview(item);
		const tableProps = childModel.getTableProps(item);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={childModel.name} preview={preview} >
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={`${name} ${i}`} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ data, childModelId, labels }) => {
	const childModel = MODEL[childModelId];
	const { modelId } = childModel;

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId } = label;
		const preview = childModel.getPreview(item);
		const tableProps = childModel.getTableProps(item);

		return (
			<StyledTypeRow key={pathId}>
				<Subpanel name={name} caption={childModel.name} preview={preview}>
					{getTables(tableProps)}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={i} />
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
