import { MODEL_MAP, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import DropdownInput from '../../ui/inputs/DropdownInput';
import { IPageProps } from '../Page';
import PodCard, { PodCardList } from './cards/PodCard';

const StyledExplorePage = styled.div`
	h1 {
		margin: 24px 0;
		text-align: center;
	}

	width: 100%;
	max-width: 768px;
	margin: auto;
`;

const StyledLabelRow = styled.div`
	margin: 8px;
	b {
		margin-right: 8px;
	}
`;

const LabelRow: React.FC<any> = ({ label, children }) => {
	return (
		<StyledLabelRow>
			<b>{label}:</b>
			{children}
		</StyledLabelRow>
	);
};

const ExplorePage: React.FC<IPageProps> = ({ params }) => {
	const [modelId, setModelId] = useState(params.modelId);
	const [data, setData] = useState(null);

	const modelConfig = MODEL_MAP.get(modelId);

	useEffect(() => {
		setData(modelConfig.presets[0])
	}, [modelId]);

	if (!data) return <div>Loading...</div>;

	const debugComponent = <pre>{JSON.stringify(data, null, '  ')}</pre>;
	if (false) return debugComponent;

	console.log(MODEL_VALUES)

	return (
		<StyledExplorePage>
			<h1>{modelConfig.name}</h1>
			<LabelRow label="model"  >
				<DropdownInput value={modelId} setValue={config => setModelId(config.modelId)} options={MODEL_VALUES} idProperty="modelId" displayProperty="name" />
			</LabelRow>
			<LabelRow label="preset">
				<DropdownInput value={data} setValue={setData} options={modelConfig.presets} />
			</LabelRow>
			<LabelRow label="pods" />
			{
				modelConfig.isCompound ?
					<PodCardList pods={data.value} />
					:
					<PodCard pod={data.value} />
			}
		</StyledExplorePage>
	);
};

export default ExplorePage;
