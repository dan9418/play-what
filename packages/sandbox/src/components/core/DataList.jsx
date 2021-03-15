import { MODEL } from '@pw/core/src/models/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';
import Viewer from './Viewer';

const StyledDataList = styled.ul`
	& > li {
		margin-bottom: 16px;
	}
`;

const getItems = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, modelId, preview, modelValue, modelRoot, label } = child;
		const model = MODEL[modelId];

		return (
			<li key={name + i}>
				<Subpanel
					metaChild={child}
					caption={model.name}
					name={name}
					preview={preview}
				>
					<Viewer modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} metaChildren={metaChildren} />
				</Subpanel>
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
		</>
	);
};

export default DataList;
