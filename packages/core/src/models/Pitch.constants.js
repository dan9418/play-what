export const MAX_PITCH = 12;

export const PITCH = {
	middleC: {
		id: 'middleC',
		name: 'Middle C',
		value: 0
	},
	midi: {
		id: 'midi',
		name: 'MIDI',
		value: 60
	}
};

export const ROOT_PITCH = PITCH.middleC.value;

export const PITCH_VALUES = Object.values(PITCH);
