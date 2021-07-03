import { ModelId, MODEL_MAP } from '@pw/core/src/models/Model.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useState } from "react";
import styled from 'styled-components';
import ModelUtils from '../../../../core/src/models/Model.utils';
import { IPageProps } from '../../contexts/RouteContext';
import ExploreHeader from './ExploreHeader';
import IntervalsPanel from './panels/IntervalsPanel';
import NotesPanel from './panels/NotesPanel';
import RootPanel from './panels/RootPanel';
import ViewerPanel from './panels/ViewerPanel';

const StyledExplorePage = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: auto;
	padding-bottom: 512px;
`;

const StyledExplorePanelGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	@media(min-width: 512px) {
		grid-template-columns: 1fr 1fr;
	}

	.panel.Notes, .panel.Viewer {
		max-width: 100%;
		@media(min-width: 512px) {
			grid-column: 1 / span 2;
		}
		.dot-list {
			margin: 16px 0;
		}
	}
`;

const DEFAULT_PARAMS = {
	modelId: ModelId.Chord,
	root: null,
	data: MODEL_MAP.get(ModelId.Chord).presets[0]
}

const ExplorePage: React.FC<IPageProps> = ({ params = DEFAULT_PARAMS }) => {
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

	// Preview
	const intervalsPreview = ModelUtils.getPreview(intervals, { podType: ModelId.Interval });
	const notesPreview = ModelUtils.getPreview(notes, { podType: ModelId.Note });
	const preview = `${rootName} + ${intervalsPreview} = ${notesPreview}`;

	console.log('PW previews', '\nintervals', intervalsPreview, '\nnotes', notesPreview);

	return (
		<StyledExplorePage>
			<ExploreHeader name={name} caption={modelConfig.name} preview={preview} />
			<StyledExplorePanelGrid>
				<RootPanel rootName={rootName} rootValue={rootValue} setRoot={setRoot} />
				<IntervalsPanel intervalsPreview={intervalsPreview} modelConfig={modelConfig} setModelId={setModelId} data={data} setData={setData} intervals={intervals} />
				<NotesPanel rootValue={rootValue} notes={notes} notesPreview={notesPreview} />
				<ViewerPanel modelId={modelId} notes={notes} />
			</StyledExplorePanelGrid>
		</StyledExplorePage>
	);
};

export default ExplorePage;
