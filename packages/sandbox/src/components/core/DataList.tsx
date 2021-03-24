import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import GroupHeader from '../ui/layout/GroupHeader';
import Subpanel from '../ui/layout/Subpanel';
import Viewer from './Viewer';

const StyledDataList = styled.ul`
	& > li {
		margin-bottom: 16px;
	}
`;

const getItems = metaChildren => {
	return metaChildren.map((child, i) => {
		const { modelId, modelValue, modelOptions } = child.config;
		const { name, preview, metaChildren: grandchildren } = child.data;
		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;

		const content = isGroup ? (
			<Subpanel
				pathId={i}
				caption={model.name}
				name={name}
				preview={preview}
			>
				{getItems(grandchildren)}
			</Subpanel>
		) : (
			<Subpanel
				pathId={i}
				caption={model.name}
				name={name}
				preview={preview}
			>
				{/* @ts-ignore */}
				<Viewer modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} metaChildren={metaChildren} />
			</Subpanel>
		);

		return (
			<li key={name + i}>
				{content}
			</li>
		);
	})
};

const DataList = ({ modelValue, metaChildren, setPathHead }) => {

	return (
		<>
			{metaChildren && (
				<StyledDataList>
					{getItems(metaChildren)}
				</StyledDataList>
			)}
			{!metaChildren && (
				<pre>
					{JSON.stringify(modelValue, null, '\t')}
				</pre>
			)}
		</>
	);
};

export default DataList;
