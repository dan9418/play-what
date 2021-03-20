import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from 'react';
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
		const { name, modelId, preview, modelValue, modelRoot } = child;
		const model = MODEL[modelId];

		const isGroup = modelId === MODEL_ID.Group;

		const content = isGroup ? (
			<GroupHeader
				metaChild={child}
				caption={model.name}
				name={name}
				preview={preview}
			>
			</GroupHeader>
		) : (
			<Subpanel
				metaChild={child}
				caption={model.name}
				name={name}
				preview={preview}
			>
				<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} metaChildren={metaChildren} />
			</Subpanel>
		);

		return (
			<li key={name + i}>
				{content}
			</li>
		);
	})
};

const DataList = ({ modelId, modelValue, modelRoot, metaChildren, onEdit }) => {

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
