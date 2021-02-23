import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Panel from '../ui/layout/Panel';
import Subpanel from '../ui/layout/Subpanel';

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

const getRows = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, pathId, childModelId, parsedChildData, caption, preview, childData } = child;

		return (
			<StyledTypeRow key={i}>
				<Subpanel
					caption={caption}
					name={name}
					preview={preview}
				>
					{JSON.stringify(childData, null, "\t")}
				</Subpanel>
				<ZoomButton
					modelData={parsedChildData}
					name={name}
					modelId={childModelId}
					pathId={pathId}
				/>
			</StyledTypeRow>
		);
	})
};

const GenericModel = ({ metaData, metaChildren }) => {

	if(!metaData || metaChildren === null || typeof metaChildren === undefined) {
		return null;
	}

	if(Array.isArray(metaChildren)) {

	}

	return (
		<Panel {...metaData}>
			{metaChildren && getRows(metaChildren)}
		</Panel>
	);
};

export default GenericModel;
