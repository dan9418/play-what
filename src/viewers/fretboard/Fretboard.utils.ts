import IntervalSpan from '../../core/models/Interval';
import Note from '../../core/models/Note';
import PodList from '../../core/models/PodList';
import { TUNING_PRESET_MAP, ITuning, TuningId } from './Fretboard.tuning';
import { IVoicing } from './Fretboard.voicing';

export interface IFretLabelProps {
	note?: Note;
	color?: string;
	freq?: number;
}

export interface IFretboardProps {
	fretRange?: [number, number];
	tuning?: number[];
	showFretDots?: boolean;
	showFretNumbers?: boolean;
	getFretLabelProps?: (stringIndex: number, fretIndex: number, tuning: number[]) => IFretLabelProps;
}

export interface IFretProps extends IFretboardProps {
	stringIndex: number;
	fretIndex: number;
}

export const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
	fretRange: [1, 12],
	tuning: TUNING_PRESET_MAP.get(TuningId.Standard).value,
	showFretDots: true,
	showFretNumbers: true
};

export const getFretRatios = (numFrets: number): number[] => {
	const ratios = [];
	for (let i = 1; i <= numFrets; i++) {
		ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
	}
	return ratios;
};

export const getDotsForFret = (fretNumber: number): string => {
	const mod = fretNumber % 12;
	if (mod === 0)
		return '• •';
	else if (DOTTED_FRET_INDICES[mod])
		return '•';
	return '';
};

const doesVoicingValueMatch = (d: number, v: number) => {
	return d + 1 === v;
}

const isIntervalInVoicing = (interval: IntervalSpan, voicing: IVoicing, stringIndex: number) => {
	if (!voicing) return true;
	const v = voicing.value[stringIndex];
	const d = interval.getDegree();
	if (Array.isArray(v)) {
		return v.some(n => doesVoicingValueMatch(d, n));
	}
	else if (typeof v === 'number') {
		return doesVoicingValueMatch(d, v);
	}
	return false;
}

const getFretLabelPropsAnon = (model: PodList, stringIndex: number, fretIndex: number, tuning: number[], voicing?: IVoicing): IFretLabelProps => {
	const noteIndex = tuning[stringIndex] + fretIndex;
	const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

	if (!note) return {};

	if (!isIntervalInVoicing(interval, voicing, stringIndex)) return {};

	const color = interval.getColor();
	const freq = note.getFrequency() as number;

	return {
		color,
		freq
	}
}

export const getFretboardProps = (model: PodList, voicing?: IVoicing, tuning?: ITuning): IFretboardProps => {

	let getFretLabelProps;
	if (model && model.root) {
		getFretLabelProps = (stringIndex: number, fretIndex: number, tuning: number[]): IFretLabelProps =>
			getFretLabelPropsAnon(model, stringIndex, fretIndex, tuning, voicing)
	}

	return {
		...DEFAULT_FRETBOARD_PROPS,
		tuning: tuning ? tuning.value : DEFAULT_FRETBOARD_PROPS.tuning,
		getFretLabelProps
	}
}
