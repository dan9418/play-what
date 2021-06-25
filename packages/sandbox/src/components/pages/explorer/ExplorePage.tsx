import { MODEL_MAP } from '@pw/core/src/models/Model.constants';
import { dataState } from '@pw/sandbox/src/state/dataState';
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { pathHeadState, pathState } from '../../../state/pathState';
import DropdownInput from '../../ui/inputs/DropdownInput';
import { IPageProps } from '../Page';

const StyledExplorePage = styled.div`
	display: grid;
	width: 100%;
	margin: auto;

	grid-template-columns: 1fr;
	max-width: 768px;
	@media(min-width: 1024px) {
		${({ $isSingle }) => $isSingle ? '' : css`
			grid-template-columns: 1fr 1fr;
			max-width: 100%;
		`}
	}

	.double {
		width: 100%;
		max-width: 512px;
		margin: auto;
	}
`;

const ExplorePage: React.FC<IPageProps> = ({ params }) => {
	const [data, setData] = useState(null);

	const { modelId } = params;
	const modelConfig = MODEL_MAP.get(modelId);

	useEffect(() => {
		setData(modelConfig.presets[0])
	}, []);





	if(!data) return <div>Loading...</div>;

	return (
		<>
			<h1>{modelConfig.name}</h1>
			<DropdownInput value={data} setValue={setData} options={modelConfig.presets}/>
			<pre>{JSON.stringify(data, null, '  ')}</pre>
		</>
	);
};

export default ExplorePage;
