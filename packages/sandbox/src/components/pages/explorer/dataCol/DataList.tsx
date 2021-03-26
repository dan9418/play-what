import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';

const StyledDataList = styled.ul`
	padding: 16px 8px;

	& li {
		margin: 16px 0;
	}
`;

const getItems = (metaChildren, pathIds) => {
	return metaChildren.map((child, i) => {
		const { modelId, modelValue, modelOptions } = child.config;
		const { name, preview, metaChildren: grandchildren } = child.data;
		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;

		const newPathIds = [...pathIds, i];

		const content = isGroup ? (
			/* @ts-ignore */
			<Subpanel
				pathIds={newPathIds}
				caption={model.name}
				name={name}
				preview={preview}
			>
				{/* @ts-ignore */}
				<ul css="padding: 0 8px">
					{getItems(grandchildren, newPathIds)}
				</ul>
			</Subpanel>
		) : (
			/* @ts-ignore */
			<Subpanel
				pathIds={newPathIds}
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
					{getItems(metaChildren, [])}
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
