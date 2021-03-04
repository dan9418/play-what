import AbsoluteChordUtils from './AbsoluteChord/AbsoluteChord.utils';
import AbsoluteScaleUtils from './AbsoluteScale/AbsoluteScale.utils';
import GroupUtils from './Group/Group.utils';
import IntervalUtils from './Pod/Interval/Interval.utils';
import NoteUtils from './Pod/Note/Note.utils';
import RelativeChordUtils from './RelativeChord/RelativeChord.utils';
import RelativeScaleUtils from './RelativeScale/RelativeScale.utils';

export const MODEL_ID = {
	// Group
	Group: 'group',
	// Absolute
	Note: 'note',
	AbsoluteChord: 'absChord',
	AbsoluteScale: 'absScale',
	// Relative
	Interval: 'interval',
	RelativeChord: 'relChord',
	RelativeScale: 'relScale'
};

export const MODEL = {
	// Group
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		utils: GroupUtils
	},
	// Absolute
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		utils: NoteUtils
	},
	[MODEL_ID.AbsoluteChord]: {
		name: 'Absolute Chord',
		modelId: MODEL_ID.AbsoluteChord,
		utils: AbsoluteChordUtils
	},
	[MODEL_ID.AbsoluteScale]: {
		name: 'Absolute Scale',
		modelId: MODEL_ID.AbsoluteScale,
		utils: AbsoluteScaleUtils
	},
	// Relative
	[MODEL_ID.Interval]: {
		name: 'Interval',
		isRelative: true,
		modelId: MODEL_ID.Interval,
		utils: IntervalUtils
	},
	[MODEL_ID.RelativeChord]: {
		name: 'Relative Chord',
		isRelative: true,
		modelId: MODEL_ID.RelativeChord,
		utils: RelativeChordUtils
	},
	[MODEL_ID.RelativeScale]: {
		name: 'Relative Scale',
		isRelative: true,
		modelId: MODEL_ID.RelativeScale,
		utils: RelativeScaleUtils
	}
};

export const MODEL_VALUES = Object.values(MODEL);
