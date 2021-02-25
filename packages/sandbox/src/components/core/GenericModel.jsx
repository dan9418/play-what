import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Panel from '../ui/layout/Panel';
import Subpanel from '../ui/layout/Subpanel';

const StyledTypeRow = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	max-width: 512px;
	>:nth-child(1) {
		width: 100%;
		margin-right: 8px;	
	}
`;

const StyledPropertyHeader = styled.h2`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 8px 8px;
`;

const getRows = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, pathId, childModelId, caption, preview, childData, label } = child;

		const header = <StyledPropertyHeader>{label || i + 1}</StyledPropertyHeader>;

		/*if (typeof childData === 'number' || typeof childData === 'string' ) {
			return <div>{`${label || name} = ${childData}`}</div>;
		}*/

		return (
			<div key={i}>
				{header}
				<StyledTypeRow >
					<Subpanel
						caption={caption}
						name={name}
						preview={preview}
					>
						{JSON.stringify(childData, null, "\t")}
					</Subpanel>
					<ZoomButton
						modelData={childData}
						name={label || name}
						modelId={childModelId}
						pathId={pathId}
					/>
				</StyledTypeRow>
			</div>
		);
	})
};

const GenericModel = ({ metaData, metaChildren, modelData }) => {

	return (
		<Panel {...metaData}>
			{metaChildren ? getRows(metaChildren) : <pre>{JSON.stringify(modelData, null, '\t')}</pre>}
		</Panel>
	);
};

export default GenericModel;
