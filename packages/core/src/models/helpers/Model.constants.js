import AbsoluteChordUtils from '../AbsoluteChord.utils';
import AbsoluteScaleUtils from '../AbsoluteScale.utils';
import GroupUtils from '../Group.utils';
import IntervalUtils from '../Interval.utils';
import NoteUtils from '../Note.utils';
import RelativeChordUtils from '../RelativeChord.utils';
import RelativeScaleUtils from '../RelativeScale.utils';

export const MODEL_ID = {
	Native: 'native',
	Note: 'note',
	Interval: 'interval',
	AbsoluteChord: 'absChord',
	RelativeChord: 'relChord',
	AbsoluteScale: 'absScale',
	RelativeScale: 'relScale',
	Group: 'group'
};

export const MODEL = {
	[MODEL_ID.Note]: {
		name: 'Note',
		modelId: MODEL_ID.Note,
		utils: NoteUtils
	},
	[MODEL_ID.Interval]: {
		name: 'Interval',
		isRelative: true,
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
		isRelative: true,
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
		isRelative: true,
		modelId: MODEL_ID.RelativeScale,
		utils: RelativeScaleUtils
	},
	[MODEL_ID.Group]: {
		name: 'Group',
		modelId: MODEL_ID.Group,
		utils: GroupUtils
	}
};

export const MODEL_VALUES = Object.values(MODEL);
