import { MODEL_MAP, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Meter from '../../../../../viewers/src/Meter/Meter';
import ButtonInput from '../../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../../ui/inputs/DropdownInput';
import { IPageProps } from '../Page';
import PodCard, { PodCardList } from './cards/PodCard';

const StyledExplorePage = styled.div`
	h1 {
		margin: 24px 0;
		text-align: center;
	}
	h2 {
		color: white;
		background-color: ${({ theme }) => theme.accent};
		padding: 8px;
		border-radius: 8px;
	}

	width: 100%;
	max-width: 768px;
	margin: auto;
	margin-top: 32px;

	display: grid;
	grid-gap: 16px;
	grid-template-columns: 1fr 1fr;

	& >:nth-child(3) {
		grid-column: 1 / span 2;
		.dot-list {
			margin: 16px 0;
		}
	}

	.set-root-btn {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
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
	const [root, setRoot] = useState(null);
	const [isAddingRoot, setIsAddingRoot] = useState(false);

	const modelConfig = MODEL_MAP.get(modelId);

	useEffect(() => {
		setData(modelConfig.presets[0])
	}, [modelId]);

	if (!data) return <div>Loading...</div>;

	const debugComponent = <pre>{JSON.stringify(data, null, '  ')}</pre>;
	if (false) return debugComponent;

	const resultPods = root ? PodUtils.addPodList(root, modelConfig.isCompound ? data.value : [data.value]) : data.value;

	const labelProps = {
		modelId,
		modelValue: resultPods
	}

	return (
		<StyledExplorePage>
			<div>
				<h2>Data</h2>
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
			</div>

			<div>
				<h2>Root</h2>
				{
					root || isAddingRoot ?
						<>
							<LabelRow label="model" >Note</LabelRow>
							<LabelRow label="preset"  >
								<DropdownInput value={root} setValue={config => setRoot(config.value)} options={NOTE_PRESETS} displayProperty="name" />
							</LabelRow>
							{root && <PodCard pod={root} />}
						</>
						:
						<div className="set-root-btn">
							<ButtonInput onClick={() => setIsAddingRoot(true)} >Set Root</ButtonInput>
						</div>
				}
			</div>

			<div>
				<h2>Result</h2>
				<LabelRow label="meter" />
				<Meter modelId={modelId} modelValue={resultPods} />
				<LabelRow label="viewer" />
				{root && <Fretboard labelProps={labelProps} />}
			</div>

		</StyledExplorePage>
	);
};

export default ExplorePage;
