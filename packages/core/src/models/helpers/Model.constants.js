import AbsoluteChordUtils from '../AbsoluteChord.utils';
import AbsoluteScaleUtils from '../AbsoluteScale.utils';
import ChordUtils from '../Chord.utils';
import DegreeUtils from '../Degree.utils';
import GroupUtils from '../Group.utils';
import IntervalUtils from '../Interval.utils';
import NoteUtils from '../Note.utils';
import PitchUtils from '../Pitch.utils';
import RelativeChordUtils from '../RelativeChord.utils';
import RelativeScaleUtils from '../RelativeScale.utils';

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
		utils: PitchUtils
	},
	[MODEL_ID.Degree]: {
		name: 'Degree',
		modelId: MODEL_ID.Degree,
		utils: DegreeUtils
	},
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		utils: NoteUtils
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		modelId: MODEL_ID.Interval,
		utils: IntervalUtils
	},
	[MODEL_ID.AbsoluteChord]: {
		name: 'Absolute Chord',
		modelId: MODEL_ID.AbsoluteChord,
		utils: AbsoluteChordUtils
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		modelId: MODEL_ID.RelativeChord,
		utils: RelativeChordUtils
	},
	[MODEL_ID.AbsoluteScale]: {
		name: 'Absolute Scale',
		modelId: MODEL_ID.AbsoluteScale,
		utils: AbsoluteScaleUtils
	},
	[MODEL_ID.RelativeScale]: {
		name: 'Relative Scale',
		modelId: MODEL_ID.RelativeScale,
		utils: RelativeScaleUtils
	},
	[MODEL_ID.Chord]: {
		name: 'Chord',
		modelId: MODEL_ID.Chord,
		utils: ChordUtils
	},
	[MODEL_ID.Scale]: {
		name: 'Scale',
		modelId: MODEL_ID.Scale,
		utils: ChordUtils
	},
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		utils: GroupUtils
	}
};

export const MODEL_VALUES = Object.values(MODEL);
