import React from 'react';
import styled from 'styled-components';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
import Panel from '../ui/layout/Panel';
import Subpanel from '../ui/layout/Subpanel';
import Viewer from './Viewer';

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

const StyledGenericModel = styled.div`
	display: grid;
	grid-gap: 32px;
	width: 100%;
	max-width: 512px;
	margin: auto;

	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}

	grid-template-columns: 1fr;

	padding: 0 0 24px 0;
`;

const GenericModel = ({ modelId, metaData, metaChildren, modelData }) => {

	return (
		<StyledGenericModel>
			<Panel {...metaData}>
				{metaChildren ? getRows(metaChildren) : <pre>{JSON.stringify(modelData, null, '\t')}</pre>}
			</Panel>
			<Panel name="Output" caption={modelId} preview="Fretboard">
				<Viewer />
			</Panel>
		</StyledGenericModel>
	);
};

export default GenericModel;
