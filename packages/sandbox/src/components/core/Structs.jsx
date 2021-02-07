import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/Subpanel';
import getPreview from './getPreview';
import getTables from './getTables';
import { MODEL } from './MODEL';

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

export const NamedKeyedList = ({ data, childModelId }) => {
	const childModel = MODEL[childModelId];

	return data.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={childModel.name} preview={preview}>
					{tables}
				</Subpanel>
				<ZoomButton name={item.name} modelId={childModelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ data, childModelId }) => {
	const childModel = MODEL[childModelId];
	const { name: modelName } = childModel;

	return data.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={modelName} preview={preview}>
					{tables}
				</Subpanel>
				<ZoomButton name={`${modelName} ${i}`} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = data[propertyId];

		const childModel = MODEL[modelId];

		const preview = getPreview(item, modelId);
		const tables = getTables(item, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={childModel.name} preview={preview} >
					{tables}
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

		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={i} caption={childModel.name} preview={preview} >
					{tables}
				</Subpanel>
				<ZoomButton name={`${name} ${i}`} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ data, labels }) => {

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId, modelId } = label;

		const model = MODEL[modelId];
		const preview = getPreview(item, modelId);
		const tables = getTables(item, modelId);

		return (
			<StyledTypeRow key={pathId}>
				<Subpanel name={name} caption={model.name} preview={preview}>
					{tables}
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
