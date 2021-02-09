import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/Subpanel';
import getCaption from './getCaption';
import getName from './getName';
import getPreview from './getPreview';
import getTables from './getTables';
import { MODEL, MODEL_ID } from './MODEL';

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
	return data.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);
		const caption = getCaption(item, childModelId);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={caption} preview={preview}>
					{tables}
				</Subpanel>
				<ZoomButton name={item.name} modelId={childModelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ data, childModelId }) => {
	return data.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);
		const caption = getCaption(item, childModelId);
		const name = getName(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview}>
					{tables}
				</Subpanel>
				<ZoomButton name={name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const Group = ({ data }) => {

	return data.map((item, i) => {
		const { modelId, modelConfig } = item;

		let data = modelConfig;
		let previewData = modelConfig;
		// Only Groups can contain Groups
		if(modelId === MODEL_ID.Group) {
			data = item;
			previewData = item.modelConfig;
			//console.log(data, item);
		}

		const preview = getPreview(previewData, modelId);
		const tables = getTables(data, modelId);
		const caption = getCaption(data, modelId);
		const name = getName(data, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview}>
					{tables}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={0} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ data, properties }) => {
	return properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = data[propertyId];

		const preview = getName(item, modelId);
		const tables = getTables(item, modelId);
		const caption = getCaption(item, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={caption} preview={preview} >
					{tables}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ data, modelId, childModelId }) => {
	return data.map((item, i) => {

		const preview = getPreview(item, childModelId);
		const tables = getTables(item, childModelId);
		const caption = getCaption(item, childModelId);
		const name = getName(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview} >
					{tables}
				</Subpanel>
				<ZoomButton name={name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ data, labels }) => {

	return data.map((item, i) => {
		const label = labels[i];
		const { name, pathId, modelId } = label;

		const preview = getPreview(item, modelId);
		const tables = getTables(item, modelId);
		const caption = getCaption(item, modelId);

		return (
			<StyledTypeRow key={pathId}>
				<Subpanel name={name} caption={caption} preview={preview}>
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
