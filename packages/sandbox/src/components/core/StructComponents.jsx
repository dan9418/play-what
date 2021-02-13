import { STRUCT_ID } from '@pw/core/src/models/helpers/Struct.constants';
import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Subpanel from '../ui/layout/Subpanel';
import getPanelProps from '../ui/layout/getPanelProps';
import getSubpanelContent from '../ui/layout/getSubpanelContent';

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
				<ZoomButton modelData={modelConfig} name={subpanelProps.name} modelId={modelId} pathId={i} />
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
				<ZoomButton modelData={modelData} name={name} modelId={childModelId} pathId={item.id} />
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
				<ZoomButton modelData={modelData} name={subpanelProps.name} modelId={childModelId} pathId={i} />
			</StyledTypeRow>
		);
	})
};

const PWObject = ({ modelData, properties, outputs }) => {
	const inputPanels = properties.map((property, i) => {
		const { name, modelId, propertyId } = property;
		const item = modelData[propertyId];

		const subpanelProps = getPanelProps(item, modelId, name);
		const content = getSubpanelContent(item, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton modelData={modelData} name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	});
	const outputPanels = outputs.map((output, i) => {
		const { name, modelId, propertyId, fn, args } = output;

		const processedArgs = args.map(arg => {
			if (typeof arg === 'string' && arg.startsWith('./')) {
				const targetId = arg.slice(2);
				console.log('dpb', targetId, modelData)
				return modelData[targetId];
			}
			return arg;
		});

		const result = fn(...processedArgs);

		const subpanelProps = getPanelProps(result, modelId, name);
		const content = getSubpanelContent(result, modelId);

		return (
			<StyledTypeRow key={propertyId}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton modelData={modelData} name={name} modelId={modelId} pathId={propertyId} />
			</StyledTypeRow>
		);
	});
	return (
		<>
			{inputPanels}
			{outputPanels}
		</>
	);
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
				<ZoomButton modelData={modelData} name={subpanelProps.name} modelId={childModelId} pathId={i} />
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
				<ZoomButton modelData={modelData} name={name} modelId={modelId} pathId={i} />
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
