import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import InsertButton from '../../../../components/ui/inputs/buttons/InsertButton';
import _ from 'lodash';
import React from "react";
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

const getItems = (pathHead, setPathHeadConfig, pathIds, isEditing) => {

	const { metaChildren } = pathHead.data;
	if (!metaChildren) return null;

	const { modelValue } = pathHead.config;
	const setModelValue = (data) => {
		const copy = _.cloneDeep(pathHead);
		const pathStr = `config.modelValue`;
		_.set(copy, pathStr, data);
		setPathHeadConfig(copy.config);
	};

	return metaChildren.map((child, i) => {

		const { modelId } = child.config;
		const { name, preview } = child.data;

		const model = MODEL[modelId];

		const listHelpers = getListHelpers(modelValue, setModelValue, i);
		const { isLast, onInsertAbove, onInsertBelow } = listHelpers;

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

		const above = isEditing ? <InsertButton onInsert={onInsertAbove}>Insert</InsertButton> : null;
		const below = !isEditing ? null : isLast ? <InsertButton onInsert={onInsertBelow}>Insert</InsertButton> : null;

		return (
			<React.Fragment key={name + i}>
				<li>{above}</li>
				<li>{content}</li>
				<li>{below}</li>
			</React.Fragment>
		);
	})
};

const DataList = ({ pathHead, setPathHeadConfig, isEditing }) => {

	if (!pathHead.data.metaChildren) return null;

	return (
		<StyledDataList>
			{getItems(pathHead, setPathHeadConfig, [], isEditing)}
		</StyledDataList>
	);
};

export default DataList;
