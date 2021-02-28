import ToneUtils from "../tone/Tone.utils";
import TuningUtils from "../tuning/Tuning.utils";
import AbsoluteChordUtils from "./AbsoluteChord.utils";
import { MODEL_ID } from "./helpers/Model.constants";
import PodUtils from "./helpers/Pod.utils";
import IntervalUtils from "./Interval.utils";
import NoteUtils from "./Note.utils";
import RelativeChordUtils from "./RelativeChord.utils";

const getName = (modelConfig) => {
	const { root: note, intervals } = modelConfig;
	const kcName = NoteUtils.getName({ note });
	const chordName = RelativeChordUtils.getName({ intervals });
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
	return AbsoluteChordUtils.getPodAtPitch(notesConfig, metaChildren, p);
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
			name: RelativeChordUtils.getName(intervalsConfig),
			preview: RelativeChordUtils.getPreview(intervalsConfig),
			label: 'Intervals',
			modelId: MODEL_ID.RelativeChord,
			modelConfig: intervalsConfig
		},
		{
			childIndex: 2,
			name: AbsoluteChordUtils.getName(notesConfig),
			preview: AbsoluteChordUtils.getPreview(notesConfig),
			label: 'Notes',
			modelId: MODEL_ID.AbsoluteChord,
			modelConfig: notesConfig
		}
	];
};

const parse = (modelConfig) => {
	const { root, intervals, t } = modelConfig;

	let rootValue = root;

	return {
		root: rootValue,
		intervals,
		notes: PodUtils.addPodList(root, intervals),
		t: t || 1
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
