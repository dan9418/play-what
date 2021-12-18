import Model from '../../core/models/Model';
import { IPod } from '../../core/models/Model.constants';
import Note from '../../core/models/Note';
import PodList from '../../core/models/PodList';
import TuningUtils from '../../core/tuning/Tuning.utils';

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

export const FRETBOARD_TUNING = {
	standard: {
		id: 'standard',
		name: 'Standard',
		value: [16, 11, 7, 2, -3, -8] // e B G D A E
	},
	standardBass: {
		id: 'standardBass',
		name: 'Bass',
		value: [7, 2, -3, -8] // G D A E
	},
	dropD: {
		id: 'dropD',
		name: 'Drop D',
		value: [16, 11, 7, 2, -3, -10] // e B G D A D
	}
};

export const FRETBOARD_TUNING_VALUES = Object.values(FRETBOARD_TUNING);

export const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
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

export const getFretLabelPropsAnon = (notePods: IPod[], stringIndex: number, fretIndex: number, tuning: number[]): IFretLabelProps => {
	const noteIndex = tuning[stringIndex] + fretIndex;
	const index = Model.getIndexOfPodAtPitch(notePods, noteIndex, false);

	if (index === null) return {};

	const freq = TuningUtils.getFrequency(noteIndex);

	return {
		color: '#333',
		freq
	}
}

export const getFretboardProps = (model: PodList): IFretboardProps => {

	let getFretLabelProps;
	if (model) {
		const notePods = model.getNoteListPods();
		getFretLabelProps = (stringIndex: number, fretIndex: number, tuning: number[]): IFretLabelProps =>
			getFretLabelPropsAnon(notePods, stringIndex, fretIndex, tuning)
	}

	return {
		...DEFAULT_FRETBOARD_PROPS,
		getFretLabelProps
	}
}
