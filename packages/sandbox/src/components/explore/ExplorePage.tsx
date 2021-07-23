import { ModelId, MODEL_MAP } from '@pw/core/src/models/Model.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useState } from "react";
import styled from 'styled-components';
import ModelUtils from '../../../../core/src/models/Model.utils';
import { NOTE_PRESET_MAP } from '../../../../core/src/models/Pod/Note/Note.constants';
import { ChordId } from '../../../../core/src/models/PodList/Chord/Chord.constants';
import { IPageProps } from '../../contexts/RouteContext';
import ExploreNav from '../shared/core/ExploreNav';
import IntervalsPanel from './panels/IntervalsPanel';
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

	.panel.Root {
		@media(min-width: 512px) {
			border-right: 1px solid ${({ theme }) => theme.border};
		}
		.panel-header {
			border-left: 1px solid ${({ theme }) => theme.border};
		}
	}

	.panel.Intervals {
		.panel-header {
			border-right: 1px solid ${({ theme }) => theme.border};
		}
	}

	.panel.Notes, .panel.Viewer {
		max-width: 100%;
		@media(min-width: 512px) {
			grid-column: 1 / span 2;
		}
		
		.panel-header {
			border-left: 1px solid ${({ theme }) => theme.border};
			border-right: 1px solid ${({ theme }) => theme.border};
		}
	}
`;

const DEFAULT_PARAMS = {
	modelId: ModelId.Chord,
	presetId: ChordId.Maj7,
	root: null,
	matchOctave: false
}

const ExplorePage: React.FC<IPageProps> = ({ params = DEFAULT_PARAMS }) => {
	const [modelId, _setModelId] = useState(params.modelId);
	const [presetId, setPresetId] = useState(params.presetId);
	const [_root, setRoot] = useState(params.root);
	const [matchOctave, setMatchOctave] = useState(params.matchOctave);

	const setModelId = config => {
		_setModelId(config.modelId);
		setPresetId(config.presets[0].id);
	}

	const setExploreState = config => {
		_setModelId(ModelId.Chord);
		setRoot(NOTE_PRESET_MAP.get(config.root).value);
		setPresetId(config.presetId);
	}

	// Config
	const modelConfig = MODEL_MAP.get(modelId);
	const presetConfig = modelConfig.presets.find(p => p.id === presetId);

	console.log('PW-Config', '\npresetConfig', presetConfig, '\nmodelConfig', modelConfig);

	// Data
	const root = _root || [0, 0];
	const intervals = modelConfig.isCompound ? presetConfig.value : [presetConfig.value];
	const notes = root ? PodUtils.addPodList(root, intervals) : intervals;

	console.log('PW-Data', '\nroot', root, '\nintervals', intervals, '\nnotes', notes);

	// Name
	const rootName = ModelUtils.getName(ModelId.Note, [root]);
	const intervalsName = ModelUtils.getName(modelId, intervals);
	const name = `${rootName} ${intervalsName}`;

	console.log('PW-Name', '\nroot', rootName, '\nintervals', intervalsName);

	// Preview
	const intervalsPreview = ModelUtils.getPreview(intervals, { podType: ModelId.Interval });
	const notesPreview = ModelUtils.getPreview(notes, { podType: ModelId.Note });
	const preview = `${rootName} + ${intervalsPreview} = ${notesPreview}`;

	console.log('PW-Preview', '\nintervals', intervalsPreview, '\nnotes', notesPreview);

	const rootModal = {
		title: 'Edit Root',
		content: <RootPanel preview={rootName} root={root} setRoot={setRoot} />
	};
	const intervalsModal = {
		title: 'Edit Intervals',
		content: <IntervalsPanel preview={intervalsPreview} modelConfig={modelConfig} setModelId={setModelId} presetConfig={presetConfig} setPresetId={setPresetId} intervals={intervals} />
	};
	const viewerModal = {
		title: 'Edit Viewer',
		content: 'Coming Soon!'
	};

	const navConfig = {
		name,
		caption: modelConfig.name,
		preview,
		rootPreview: rootName,
		rootModal,
		intervalsPreview,
		intervalsModal,
		notesPreview,
		viewerPreview: 'Fretboard',
		viewerModal
	}



	return (
		<>
			<ExploreNav setExploreState={setExploreState} navConfig={navConfig} />
			<StyledExplorePage>
				<ViewerPanel modelId={modelId} notes={notes} />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
