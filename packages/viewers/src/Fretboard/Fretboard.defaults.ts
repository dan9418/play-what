import { IViewerProps } from '../viewer.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

export interface IFretboardProps extends IViewerProps {
	fretRange: [number, number];
	tuning: number[];
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
	matchOctave: false,
	hideLabel: false
};

export default DEFAULT_FRETBOARD_PROPS;
