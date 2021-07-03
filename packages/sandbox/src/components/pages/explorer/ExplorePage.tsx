import { ModelId, MODEL_MAP, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import { NOTE_PRESETS } from '@pw/core/src/models/Pod/Note/Note.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useState } from "react";
import styled from 'styled-components';
import ModelUtils from '../../../../../core/src/models/Model.utils';
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Meter from '../../../../../viewers/src/Meter/Meter';
import { IPageProps } from '../../../contexts/RouteContext';
import DropdownInput from '../../ui/inputs/DropdownInput';
import Col from '../../ui/layout/Col';
import Panel from '../../ui/layout/Panel';
import { PodCardList } from './PodCard';

const StyledExplorePage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	padding-bottom: 512px;

	display: grid;
	grid-template-columns: 1fr;
	@media(min-width: 512px) {
		grid-template-columns: 1fr 1fr;
	}

	& >:nth-child(3), >:nth-child(4) {
		max-width: 100%;

		@media(min-width: 512px) {
			grid-column: 1 / span 2;
		}
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

const DEFAULT_PARAMS = {
	modelId: ModelId.Chord,
	root: null,
	data: MODEL_MAP.get(ModelId.Chord).presets[0]
}

const ExplorePage: React.FC<IPageProps> = ({ params: pageParams }) => {
	const params = DEFAULT_PARAMS;
	const [modelId, _setModelId] = useState(params.modelId);
	const [root, setRoot] = useState(params.root);
	const [data, setData] = useState(params.data);

	const setModelId = config => {
		_setModelId(config.modelId);
		setData(config.presets[0]);
	}

	if (!data) return <div>Loading...</div>;

	const modelConfig = MODEL_MAP.get(modelId);

	console.log('PW init', '\ndata', data, '\nmodelConfig', modelConfig);


	// Data
	const rootValue = root || [0, 0];
	const intervals = modelConfig.isCompound ? data.value : [data.value];
	const notes = root ? PodUtils.addPodList(root, intervals) : intervals;

	console.log('PW data', '\nroot', rootValue, '\nintervals', intervals, '\nnotes', notes);

	// return <pre>{JSON.stringify(data, null, '  ')}</pre>;

	// Name
	const rootName = ModelUtils.getName(ModelId.Note, [rootValue]);
	const intervalsName = ModelUtils.getName(modelId, intervals);
	const name = `${rootName} ${intervalsName}`;

	console.log('PW names', '\nroot', rootName, '\nintervals', intervalsName);

	const labelProps = {
		modelId,
		modelValue: notes
	}

	// Preview
	const intervalsPreview = ModelUtils.getPreview(intervals, { podType: ModelId.Interval });
	const notesPreview = ModelUtils.getPreview(notes, { podType: ModelId.Note });
	const preview = `${rootName} + ${intervalsPreview} = ${notesPreview}`;

	console.log('PW previews', '\nintervals', intervalsPreview, '\nnotes', notesPreview);

	const rootModal = <h2>Edit Root</h2>;
	const intervalsModal = <h2>Edit Intervals</h2>;
	const notesModal = <h2>Edit Notes</h2>;
	const viewerModal = <h2>Edit Viewer</h2>;


	return (
		<Panel name={name} caption={modelConfig.name} preview={preview} >
			<StyledExplorePage>
				<Col title="Root" subtitle={rootName} modal={rootModal}>
					<LabelRow label="Model" >Note</LabelRow>
					<LabelRow label="Preset"  >
						<DropdownInput value={rootValue} setValue={config => setRoot(config.value)} options={NOTE_PRESETS} displayProperty="name" />
					</LabelRow>
					<PodCardList podType={ModelId.Note} pods={[rootValue]} />
				</Col>

				<Col title="Intervals" subtitle={intervalsPreview} modal={intervalsModal}>
					<LabelRow label="Model">
						<DropdownInput value={modelConfig} setValue={setModelId} options={MODEL_VALUES.filter(c => c.modelId !== ModelId.Note)} idProperty="modelId" displayProperty="name" />
					</LabelRow>
					<LabelRow label="Preset">
						<DropdownInput value={data} setValue={setData} options={modelConfig.presets} />
					</LabelRow>
					<PodCardList podType={ModelId.Interval} pods={intervals} />
				</Col>

				<Col title="Notes" subtitle={notesPreview} modal={notesModal}>
					<Meter modelRoot={rootValue} modelValue={notes} />
				</Col>

				<Col title="Viewer" subtitle="Fretboard" modal={viewerModal}>
					<Fretboard labelProps={labelProps} />
				</Col>

			</StyledExplorePage>
		</Panel>
	);
};

export default ExplorePage;
