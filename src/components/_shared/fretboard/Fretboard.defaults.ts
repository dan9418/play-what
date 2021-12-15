import { FRETBOARD_TUNING } from './Fretboard.api';

export interface IFretboardProps {
	fretRange?: [number, number];
	tuning?: number[];
	showFretDots?: boolean;
	showFretNumbers?: boolean;
}

export interface IFretProps extends IFretboardProps {
	stringIndex: number;
	fretIndex: number;
}

export interface IFretLabelProps extends IFretProps {
	noteIndex: number;
}

const DEFAULT_FRETBOARD_PROPS: IFretboardProps = {
	fretRange: [0, 12],
	tuning: FRETBOARD_TUNING.standard.value,
	showFretDots: true,
	showFretNumbers: true
};

export default DEFAULT_FRETBOARD_PROPS;
