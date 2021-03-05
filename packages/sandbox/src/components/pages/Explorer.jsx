import { MODEL, MODEL_ID } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pathHeadState, pathState } from '../../state/pathState';
import BreadcrumbList from '../core/BreadcrumbList';
import DataList from '../core/DataList';
import InputList from '../core/InputList';
import Viewer from '../core/Viewer';
import Panel from '../ui/layout/Panel';

const StyledExplorer = styled.div`
	display: grid;
	grid-gap: 32px;
	width: 100%;
	max-width: 512px;
	margin: auto;
	padding: 0 0 24px 0;

	grid-template-columns: 1fr;
	@media(min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		max-width: 100%;
	}
`;

const Explorer = () => {
	const pathHead = useRecoilValue(pathHeadState);
	const { modelId, modelValue, modelOptions } = pathHead;
	const model = MODEL[modelId];

	const refreshKey = JSON.stringify({ modelId, modelValue, modelOptions });

	useEffect(() => window.scrollTo(0, 0), [refreshKey]);

	const metaChildren = model.utils.getMetaChildren(modelValue, modelOptions);

	const labelProps = {
		modelId,
		modelValue,
		modelOptions
	};

	const viewer = modelId === MODEL_ID.Group ?
		null :
		<Viewer labelProps={labelProps} />;

	return (
		<>
			<BreadcrumbList />
			<Panel {...pathHead}>
				<StyledExplorer>
					<div>
						{viewer}
						<InputList modelValue={modelValue} modelOptions={modelOptions} />
					</div>
					<DataList modelId={modelId} modelValue={modelValue} metaChildren={metaChildren} modelOptions={modelOptions} />
				</StyledExplorer>
			</Panel>
		</>
	);
};

export default Explorer;
