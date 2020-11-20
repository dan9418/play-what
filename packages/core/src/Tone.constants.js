import ToneUtils from "./Tone.utils";

export const TONE_FN = {
	sine: {
		id: 'sine',
		name: 'Sine',
		value: f => {
			if (!f) return null;
			ToneUtils.play(f);
		}
	}
};

export const TONE_SCHEME_VALUES = Object.values(TONE_FN);
