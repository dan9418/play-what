import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/Subpanel';
import getCaption from './getCaption';
import getName from './getName';
import getPanelProps from './getPanelProps';
import getPreview from './getPreview';
import getSubpanelContent from './getSubpanelContent';

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
		const { modelId, modelConfig, name } = item;

		const subpanelProps = getPanelProps(modelConfig, modelId, name);
		const content = getSubpanelContent(modelConfig, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton name={subpanelProps.name} modelId={modelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const NamedKeyedList = ({ modelData, childModelId }) => {
	return modelData.items.map((item, i) => {
		const { name } = item;

		const subpanelProps = getPanelProps(item, childModelId, name);
		const content = getSubpanelContent(item, childModelId);

		return (
			<StyledTypeRow key={item.id}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={childModelId} pathId={item.id} />
			</StyledTypeRow>
		);
	})
};

export const NamedList = ({ modelData, childModelId }) => {
	return modelData.items.map((item, i) => {

		const subpanelProps = getPanelProps(item, childModelId);
		const content = getSubpanelContent(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton name={subpanelProps.name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const PWObject = ({ modelData, properties }) => {
	return properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = modelData[propertyId];

		const subpanelProps = getPanelProps(item, modelId, name);
		const content = getSubpanelContent(item, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	})
};

export const List = ({ modelData, childModelId }) => {
	return modelData.map((item, i) => {

		const subpanelProps = getPanelProps(item, childModelId);
		const content = getSubpanelContent(item, childModelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton name={subpanelProps.name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

export const LabeledList = ({ modelData, labels }) => {
	return modelData.map((item, i) => {
		const label = labels[i];
		const { name, modelId } = label;

		const subpanelProps = getPanelProps(item, modelId, name);
		const content = getSubpanelContent(item, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel {...subpanelProps}>
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
