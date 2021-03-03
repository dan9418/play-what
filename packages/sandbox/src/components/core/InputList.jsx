import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import styled from 'styled-components';
import Subpanel from '../ui/layout/Subpanel';
import Viewer from './Viewer';

const StyledPropertyHeader = styled.h4`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 8px 8px;
`;

const getItems = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, modelId, preview, modelValue, modelOptions, label } = child;
		const model = MODEL[modelId];

		const header = <StyledPropertyHeader>
			{label || null}
		</StyledPropertyHeader>;

		return (
			<li key={name + i}>
				{header}
				<Subpanel
					metaChild={child}
					caption={model.name}
					name={name}
					preview={preview}
				>
					<Viewer modelId={modelId} modelValue={modelValue} modelOptions={modelOptions} metaChildren={metaChildren} />
				</Subpanel>
			</li>
		);
	})
};

const InputList = ({ modelValue, modelOptions }) => {

	return <pre>
		{/*<h2>Model Value</h2>
		{JSON.stringify(modelValue, null, '\t')}*/}
		<h2>Model Options</h2>
		{JSON.stringify(modelOptions, null, '\t')}
	</pre>;

	return (
		<ul>

		</ul>
	);
};

export default InputList;