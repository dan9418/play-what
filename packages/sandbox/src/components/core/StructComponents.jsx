import { STRUCT_ID } from '@pw/core/src/models/helpers/Struct.constants';
import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/ButtonInput/ZoomButton';
import Subpanel from '../ui/Subpanel';
import getPanelProps from './getPanelProps';
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

const Group = ({ modelData }) => {
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

const NamedKeyedList = ({ modelData, childModelId }) => {
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

const NamedList = ({ modelData, childModelId }) => {
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

const PWObject = ({ modelData, properties }) => {
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

const List = ({ modelData, childModelId }) => {
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

const LabeledList = ({ modelData, labels }) => {
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

const Native = ({ modelData }) => {
	return (
		<div>
			{modelData}
		</div>
	);
};

const STRUCT_COMPONENT = {
	[STRUCT_ID.Group]: Group,
	[STRUCT_ID.NamedKeyedList]: NamedKeyedList,
	[STRUCT_ID.NamedList]: NamedList,
	[STRUCT_ID.Object]: PWObject,
	[STRUCT_ID.List]: List,
	[STRUCT_ID.LabeledList]: LabeledList,
	[STRUCT_ID.Native]: Native
};

export default STRUCT_COMPONENT;
