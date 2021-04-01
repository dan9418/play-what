import ToneUtils from "./Tone.utils";

export const TONE_FN = {
	sine: {
		id: 'sine',
		name: 'Sine',
		value: (f: number): void => {
			if (!f) return null;
			(ToneUtils as any).play(f);
		}
	}
};

export const TONE_SCHEME_VALUES = Object.values(TONE_FN);
