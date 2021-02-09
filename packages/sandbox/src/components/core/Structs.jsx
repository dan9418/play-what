import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/Subpanel';
import getCaption from './getCaption';
import getName from './getName';
import getPreview from './getPreview';
import getSubpanelContent from './getSubpanelContent';
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

export const Group = ({ modelData }) => {

	return modelData.map((item, i) => {
		const { modelId, modelConfig, name: childName } = item;

		const preview = getPreview(modelConfig, modelId);
		const content = getSubpanelContent(modelConfig, modelId);
		const caption = getCaption(modelConfig, modelId);
		const name = childName || getName(modelConfig, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview}>
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const NamedKeyedList = ({ modelData, childModelId }) => {
	return modelData.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const content = getSubpanelContent(item, childModelId);
		const caption = getCaption(item, childModelId);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel name={item.name} caption={caption} preview={preview}>
					{content}
				</Subpanel>
				<ZoomButton name={item.name} modelId={childModelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ modelData, childModelId }) => {
	return modelData.items.map((item, i) => {
		const preview = getPreview(item, childModelId);
		const content = getSubpanelContent(item, childModelId);
		const caption = getCaption(item, childModelId);
		const name = getName(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview}>
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ modelData, properties }) => {
	return properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = modelData[propertyId];

		const preview = getName(item, modelId);
		const content = getSubpanelContent(item, modelId);
		const caption = getCaption(item, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel name={name} caption={caption} preview={preview} >
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ modelData, modelId, childModelId }) => {
	return modelData.map((item, i) => {

		const preview = getPreview(item, childModelId);
		const content = getSubpanelContent(item, childModelId);
		const caption = getCaption(item, childModelId);
		const name = getName(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview} >
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ modelData, labels }) => {

	return modelData.map((item, i) => {
		const label = labels[i];
		const { name, modelId } = label;

		const preview = getPreview(item, modelId);
		const content = getSubpanelContent(item, modelId);
		const caption = getCaption(item, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} caption={caption} preview={preview}>
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const Native = ({ modelData }) => {
	return (
		<div>
			{modelData}
		</div>
	);
};
