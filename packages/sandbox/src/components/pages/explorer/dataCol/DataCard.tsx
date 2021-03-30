import { MODEL } from '@pw/core/src/models/Model.constants';
import React from "react";
import styled from 'styled-components';
import Subpanel from '../../../ui/layout/Subpanel';
import ActionForm from '../shared/ActionForm';
import ReactJson from 'react-json-view'

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

const DataCard = ({ pathHead = null, setPathHeadConfig = null, type = null }) => {

	const { modelId, modelValue, modelOptions } = pathHead.config;

	const model = MODEL[modelId];

	const onEdit = data => {
		if (typeof data.existing_value === 'number')
			console.log('only strings');
		else
			setPathHeadConfig(data.updated_src);
	};

	return (
		<Subpanel name="Raw Data" caption={model.name} preview="Show me the math">
			<ActionForm onSubmit={null}>
				<ReactJson
					src={pathHead}
					name={null}
					onEdit={onEdit}
					enableClipboard={false}
					displayObjectSize={false}
				/>
			</ActionForm>
		</Subpanel>
	);
};

export default DataCard;
