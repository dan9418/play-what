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

const getItems = (pathHead, setPathHead, pathIds, isEditing) => {

	const { metaChildren } = pathHead.data;
	if (!metaChildren) return null;
	const setMetaChilren = null;

	return metaChildren.map((child, i) => {

		const { modelId } = child.config;
		const { name, preview, metaChildren: grandchildren } = child.data;

		const model = MODEL[modelId];

		const listHelpers = getListHelpers(metaChildren, setMetaChilren, i);
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
					{getItems(child, null, newPathIds, isEditing)}
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
				<Viewer {...child.config} metaChildren={metaChildren} />
			</Subpanel>
		);

		const above = isEditing ? <ButtonInput>Insert</ButtonInput> : null;
		const below = !isEditing ? null : isLast ? <ButtonInput>Insert</ButtonInput> : null;

		return (
			<React.Fragment key={name + i}>
				<li>{above}</li>
				<li>{content}</li>
				<li>{below}</li>
			</React.Fragment>
		);
	})
};

const DataList = ({ pathHead, setPathHead, isEditing }) => {

	if (!pathHead.data.metaChildren) return null;

	return (
		<StyledDataList>
			{getItems(pathHead, setPathHead, [], isEditing)}
		</StyledDataList>
	);
};

export default DataList;
