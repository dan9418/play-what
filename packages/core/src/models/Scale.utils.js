import AbsoluteScaleUtils from "./AbsoluteScale.utils";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import RelativeScaleUtils from "./RelativeScale.utils";

const getName = (modelConfig) => {
	const { root, intervals } = modelConfig;
	const kcName = NoteUtils.getName({ root, note: root });
	const chordName = RelativeScaleUtils.getName({ intervals });
	return `${kcName} + ${chordName}`;
};

const getPreview = (modelConfig) => {
	const { root: note, intervals } = modelConfig;
	const kcName = NoteUtils.getName({ note });
	const intervalNames = intervals.map(interval => IntervalUtils.getName({ interval })).join(', ');
	return `${kcName} + ${intervalNames}`;
}

const getCaption = (modelConfig) => null;

const getPodAtPitch = (modelConfig, metaChildren, p) => {
	const notesConfig = metaChildren[2].modelConfig;
	return AbsoluteScaleUtils.getPodAtPitch(notesConfig, metaChildren, p);
}

const getMetaChildren = modelConfig => {
	const { root, intervals } = modelConfig;
	const notes = PodUtils.addPodList(root, intervals);

	const rootConfig = { root, note: root };
	const intervalsConfig = { root, intervals };
	const notesConfig = { root, notes };

	return [
		{
			childIndex: 0,
			label: 'Root',
			name: NoteUtils.getName(rootConfig),
			preview: NoteUtils.getPreview(rootConfig),
			modelId: MODEL_ID.Note,
			modelConfig: rootConfig
		},
		{
			childIndex: 1,
			label: 'Intervals',
			name: RelativeScaleUtils.getName(intervalsConfig),
			preview: RelativeScaleUtils.getPreview(intervalsConfig),
			modelId: MODEL_ID.RelativeScale,
			modelConfig: intervalsConfig
		},
		{
			childIndex: 2,
			label: 'Notes',
			name: AbsoluteScaleUtils.getName(notesConfig),
			preview: AbsoluteScaleUtils.getPreview(notesConfig),
			modelId: MODEL_ID.AbsoluteScale,
			modelConfig: notesConfig
		}
	];
};

const parse = (modelConfig) => {
	const { root, intervals } = modelConfig;

	let rootValue = root;

	return {
		root: rootValue,
		intervals,
		notes: PodUtils.addPodList(root, intervals)
	}
};

export default {
	getName,
	getPreview,
	getCaption,
	getPodAtPitch,
	getMetaChildren,
	parse
}
