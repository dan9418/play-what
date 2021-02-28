import { MODEL } from '@pw/core/src/models/helpers/Model.constants';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathHeadState } from '../../state/pathState';
import ZoomButton from '../ui/inputs/buttons/ZoomButton';
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

const StyledPropertyHeader = styled.h4`
	color: #555;
	text-align: left;
	width: 100%;
	max-width: 512px;
	text-transform: uppercase;
	margin: 16px 8px 8px;
`;

const getRows = metaChildren => {
	return metaChildren.map((child, i) => {
		const { name, modelId, preview, modelConfig, label } = child;
		const model = MODEL[modelId];

		const header = <StyledPropertyHeader>
			{label || i + 1}
		</StyledPropertyHeader>;

		return (
			<div key={i}>
				{header}
				<Subpanel
					metaChild={child}
					caption={model.name}
					name={name}
					preview={preview}
				>
					{JSON.stringify(modelConfig, null, "\t")}
				</Subpanel>
			</div>
		);
	})
};



const DataPanel = ({ modelConfig, metaChildren }) => {


	return metaChildren ? getRows(metaChildren) : <pre>{JSON.stringify(modelConfig, null, '\t')}</pre>;
};

export default DataPanel;
