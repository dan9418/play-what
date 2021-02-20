import { STRUCT_ID } from '@pw/core/src/models/helpers/Struct.constants';
import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Subpanel from '../ui/layout/Subpanel';
import getPanelProps from '../ui/layout/getPanelProps';
import getSubpanelContent from '../ui/layout/getSubpanelContent';
import { MODEL, MODEL_ID } from '@pw/core/src/models/helpers/Model.constants';

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

const StyledPropertyHeader = styled.h3`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 0;
`;

const Group = ({ modelData: group }) => {
	return group.groupItems.map((item, i) => {
		const { modelId, groupItemData, name } = item;

		const childData = modelId === MODEL_ID.Group ? item : groupItemData;

		const subpanelProps = getPanelProps(childData, modelId, name);
		const content = getSubpanelContent(childData, modelId);

		return (
			<StyledTypeRow key={i}>
				<Subpanel {...subpanelProps}>
					{content}
				</Subpanel>
				<ZoomButton modelData={childData} name={subpanelProps.name} modelId={modelId} pathId={i} />
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

		const subpanelProps = getPanelProps(item, modelId);
		const content = getSubpanelContent(item, modelId);

		return (
			<>
				<StyledPropertyHeader>{name}</StyledPropertyHeader>
				<StyledTypeRow key={propertyId}>
					<Subpanel {...subpanelProps}>
						{content}
					</Subpanel>
					<ZoomButton modelData={modelData} name={name} modelId={modelId} pathId={propertyId} />
				</StyledTypeRow>
			</>
		);
	});
	const outputPanels = outputs.map((output, i) => {
		const { name, modelId, propertyId, fn, args } = output;

		const processedArgs = args.map(arg => {
			if (typeof arg === 'string' && arg.startsWith('./')) {
				const targetId = arg.slice(2);
				return modelData[targetId];
			}
			return arg;
		});

		const result = fn(...processedArgs);

		const subpanelProps = getPanelProps(result, modelId);
		const content = getSubpanelContent(result, modelId);

		return (
			<>
				<StyledPropertyHeader>{name}</StyledPropertyHeader>
				<StyledTypeRow key={propertyId}>
					<Subpanel {...subpanelProps}>
						{content}
					</Subpanel>
					<ZoomButton modelData={modelData} name={name} modelId={modelId} pathId={propertyId} />
				</StyledTypeRow>
			</>
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

export const GenericModel = ({ modelData, modelId }) => {
	const model = MODEL[modelId];
	const children = model.getMetaChildren(modelData);

	return children.map((item, i) => {
		const { pathId, name, childModelId, childData } = item;

		const content = null;

		return (
			<StyledTypeRow key={i}>
				<Subpanel name={name} preview={null} caption={childModelId}>
					{content}
				</Subpanel>
				<ZoomButton modelData={childData} name={name} modelId={childModelId} pathId={pathId} />
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
