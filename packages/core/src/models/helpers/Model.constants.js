import DegreeUtils from '../Degree.utils';
import GroupUtils from '../Group.utils';
import RelativeChordUtils from '../RelativeChord.utils';
import RelativeScaleUtils from '../RelativeScale.utils';
import IntervalUtils from '../Interval.utils';
import AbsoluteChordUtils from '../AbsoluteChord.utils';
import AbsoluteScaleUtils from '../AbsoluteScale.utils';
import NoteUtils from '../Note.utils';
import PitchUtils from '../Pitch.utils';
import ChordUtils from '../Chord.utils';
import PodUtils from './Pod.utils';
import FrameUtils from '../Frame.utils';

export const MODEL_ID = {
	Pitch: 'pitch',
	Degree: 'degree',
	Note: 'note',
	Interval: 'interval',
	AbsoluteChord: 'absChord',
	RelativeChord: 'relChord',
	AbsoluteScale: 'absScale',
	RelativeScale: 'relScale',
	Chord: 'chord',
	Scale: 'scale',
	Group: 'group',
	Frame: 'dict'
};

export const MODEL = {
	[MODEL_ID.Pitch]: {
		name: 'Pitch',
		modelId: MODEL_ID.Pitch,
		getChild: (data, pathId) => null,
		getMetaChildren: data => null,
		utils: PitchUtils
	},
	[MODEL_ID.Degree]: {
		name: 'Degree',
		modelId: MODEL_ID.Degree,
		getChild: (data, pathId) => null,
		getMetaChildren: data => null,
		utils: DegreeUtils
	},
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return [
				{
					pathId: 0,
					name: 'Pitch',
					childModelId: MODEL_ID.Pitch,
					childData: data[0]
				},
				{
					pathId: 1,
					name: 'Degree',
					childModelId: MODEL_ID.Degree,
					childData: data[0]
				}
			];
		},
		utils: NoteUtils
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		modelId: MODEL_ID.Interval,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return [
				{
					pathId: 0,
					name: 'Pitch Span',
					childModelId: MODEL_ID.Pitch,
					childData: data[0]
				},
				{
					pathId: 1,
					name: 'Degree Span',
					childModelId: MODEL_ID.Degree,
					childData: data[0]
				}
			];
		},
		utils: IntervalUtils
	},
	[MODEL_ID.AbsoluteChord]: {
		name: 'Absolute Chord',
		modelId: MODEL_ID.AbsoluteChord,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return data.map((d, i) => ({
				pathId: i,
				name: NoteUtils.getName(d),
				childModelId: MODEL_ID.Note,
				childData: d
			}));
		},
		utils: AbsoluteChordUtils
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		modelId: MODEL_ID.RelativeChord,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return data.map((d, i) => ({
				pathId: i,
				name: IntervalUtils.getName(d),
				childModelId: MODEL_ID.Interval,
				childData: d
			}));
		},
		utils: RelativeChordUtils
	},
	[MODEL_ID.AbsoluteScale]: {
		name: 'Absolute Scale',
		modelId: MODEL_ID.AbsoluteScale,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return data.map((d, i) => ({
				pathId: i,
				name: NoteUtils.getName(d),
				childModelId: MODEL_ID.Note,
				childData: d
			}));
		},
		utils: AbsoluteScaleUtils
	},
	[MODEL_ID.RelativeScale]: {
		name: 'Relative Scale',
		modelId: MODEL_ID.RelativeScale,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return data.map((d, i) => ({
				pathId: i,
				name: IntervalUtils.getName(d),
				childModelId: MODEL_ID.Interval,
				childData: d
			}));
		},
		utils: RelativeScaleUtils
	},
	[MODEL_ID.Chord]: {
		name: 'Chord',
		modelId: MODEL_ID.Chord,
		getChild: (data, pathId) => data[pathId],
		getParsedModel: (data, inputs) => {
			const { root, intervals } = data;

			let rootValue = root;
			if (typeof root === 'string' && root.startsWith('pw/inputs/')) {
				const target = root.slice(10);
				for (let i = 0; i < inputs.length; i++) {
					if (!inputs[i]) continue;
					for (let j = 0; j < inputs[i].length; j++) {
						if (inputs[i][j].pathId === target) {
							rootValue = inputs[i][j].childData;
						}
					}
				}
			}

			return {
				root: rootValue,
				intervals,
				notes: PodUtils.addPodList(root, intervals)
			}
		},
		getMetaChildren: data => {
			return [
				{
					pathId: 'root',
					name: 'Root',
					childModelId: MODEL_ID.Note,
					childData: data.root
				},
				{
					pathId: 'intervals',
					name: 'Intervals',
					childModelId: MODEL_ID.RelativeChord,
					childData: data.intervals
				},
				{
					pathId: 'notes',
					name: 'Notes',
					childModelId: MODEL_ID.AbsoluteChord,
					childData: PodUtils.addPodList(data.root, data.intervals)
				}
			];
		},
		utils: ChordUtils
	},
	[MODEL_ID.Scale]: {
		name: 'Scale',
		modelId: MODEL_ID.Scale,
		getChild: (data, pathId) => data[pathId],
		getParsedModel: (data, inputs) => {
			const { root, intervals } = data;

			let rootValue = root;
			if (typeof root === 'string' && root.startsWith('pw/inputs/')) {
				const target = root.slice(10);
				for (let i = 0; i < inputs.length; i++) {
					if (!inputs[i]) continue;
					for (let j = 0; j < inputs[i].length; j++) {
						if (inputs[i][j].pathId === target) {
							rootValue = inputs[i][j].childData;
						}
					}
				}
			}

			return {
				root: rootValue,
				intervals,
				notes: PodUtils.addPodList(root, intervals)
			}
		},
		getMetaChildren: data => {
			return [
				{
					pathId: 'root',
					name: 'Root',
					childModelId: MODEL_ID.Note,
					childData: data.root
				},
				{
					pathId: 'intervals',
					name: 'Intervals',
					childModelId: MODEL_ID.RelativeScale,
					childData: data.intervals
				},
				{
					pathId: 'notes',
					name: 'Notes',
					childModelId: MODEL_ID.AbsoluteScale,
					childData: PodUtils.addPodList(data.root, data.intervals)
				}
			];
		},
		utils: ChordUtils
	},
	[MODEL_ID.Frame]: {
		name: 'Frame',
		modelId: MODEL_ID.Frame,
		getChild: (data, pathId) => data[pathId],
		getMetaChildren: data => {
			return [
				{
					pathId: 'in',
					name: 'Inputs',
					childModelId: MODEL_ID.Group,
					childData: data.inputs
				},
				{
					pathId: 'out',
					name: 'Outputs',
					childModelId: MODEL_ID.Group,
					childData: data.outputs
				}
			];
		},
		utils: FrameUtils
	},
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		getChild: (data, pathId) => data.find(item => item.pathId === pathId),
		getMetaChildren: data => data,
		utils: GroupUtils
	}
};

export const MODEL_VALUES = Object.values(MODEL);
