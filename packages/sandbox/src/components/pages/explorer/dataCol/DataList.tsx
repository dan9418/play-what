import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React from "react";
import ButtonInput from '@pw/sandbox/src/components/ui/inputs/buttons/ButtonInput';
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import Viewer from '../viewerCol/Viewer';
import getListHelpers from './getListHelpers';

const StyledDataList = styled.ul`
	padding: 16px 8px;

	& li {
		margin: 16px 0;
	}
`;

const getItems = (metaChildren, pathIds, isEditing) => {
	return metaChildren.map((child, i) => {
		const { modelId, modelValue, modelOptions } = child.config;
		const { name, preview, metaChildren: grandchildren } = child.data;
		const model = MODEL[modelId];

		const listHelpers = getListHelpers(metaChildren, null, i);
		const { isLast } = listHelpers;

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
					{getItems(grandchildren, newPathIds, isEditing)}
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

		const above = <ButtonInput>Insert</ButtonInput>;
		const below = isLast ? <ButtonInput>Insert</ButtonInput> : null;

		return (
			<React.Fragment key={name + i}>
				<li>{above}</li>
				<li>{content}</li>
				<li>{below}</li>
			</React.Fragment>
		);
	})
};

const DataList = ({ modelValue, metaChildren, setPathHead, isEditing }) => {

	return (
		<>
			{metaChildren && (
				<StyledDataList>
					{getItems(metaChildren, [], isEditing)}
				</StyledDataList>
			)}
		</>
	);
};

export default DataList;
