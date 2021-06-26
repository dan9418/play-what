import { ModelId, MODEL_MAP, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import ModelUtils from '../../../../../core/src/models/Model.utils';
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Meter from '../../../../../viewers/src/Meter/Meter';
import DropdownInput from '../../ui/inputs/DropdownInput';
import Col from '../../ui/layout/Col';
import Panel from '../../ui/layout/Panel';
import { IPageProps } from '../Page';
import { PodCardList } from './cards/PodCard';

const StyledExplorePage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;

	display: grid;
	grid-template-columns: 1fr 1fr;

	border-top: 1px solid ${({ theme }) => theme.border};

	& >:nth-child(3), >:nth-child(4) {
		max-width: 100%;
		border-top: 1px solid ${({ theme }) => theme.border};

		grid-column: 1 / span 2;
		.dot-list {
			margin: 16px 0;
		}
	}
`;

const StyledLabelRow = styled.div`
	margin: 8px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
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

	const modelConfig = MODEL_MAP.get(modelId);

	useEffect(() => {
		setData(modelConfig.presets[0])
	}, [modelId]);

	if (!data) return <div>Loading...</div>;

	const debugComponent = <pre>{JSON.stringify(data, null, '  ')}</pre>;
	if (false) return debugComponent;

	const resultPods = root ? PodUtils.addPodList(root, data.value) : data.value;

	const labelProps = {
		modelId,
		modelValue: resultPods
	}

	const rootValue = root || [0, 0];

	const rootName = ModelUtils.getName(ModelId.Note, rootValue);
	const intervalsName = ModelUtils.getName(modelId, data.value);
	const intervalsRel = ModelUtils.getPreview(modelId, data.value);
	const intervalsAbs = ModelUtils.getPreview(modelId, data.value, rootValue);
	const name = `${rootName} ${intervalsName}`;
	const preview = `${rootName} + ${intervalsRel} = ${intervalsAbs}`;

	return (
		<Panel name={name} caption={modelConfig.name} preview={preview} >
			<StyledExplorePage>
				<Col title="Root" subtitle={rootName}>
					<LabelRow label="Model" >Note</LabelRow>
					<LabelRow label="Preset"  >
						<DropdownInput value={rootValue} setValue={config => setRoot(config.value)} options={NOTE_PRESETS} displayProperty="name" />
					</LabelRow>
					<PodCardList podType={ModelId.Note} pods={[rootValue]} />
				</Col>

				<Col title="Intervals" subtitle={intervalsRel}>
					<LabelRow label="Model"  >
						<DropdownInput value={modelId} setValue={config => setModelId(config.modelId)} options={MODEL_VALUES} idProperty="modelId" displayProperty="name" />
					</LabelRow>
					<LabelRow label="Preset">
						<DropdownInput value={data} setValue={setData} options={modelConfig.presets} />
					</LabelRow>
					<PodCardList podType={ModelId.Interval} pods={data.value} />
				</Col>

				<Col title="Notes" subtitle={intervalsAbs}>
					<Meter modelId={modelId} modelValue={resultPods} />
				</Col>

				<Col title="Viewer" subtitle="Fretboard">
					<Fretboard labelProps={labelProps} />
				</Col>

			</StyledExplorePage>
		</Panel>
	);
};

export default ExplorePage;
