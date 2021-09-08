import { LabelBy } from '../Viewer.constants';
import { PodType } from '../../../core/src/models/Model.constants';
import { IViewerProps } from '../Viewer.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

export interface IFretboardProps extends IViewerProps {
	fretRange: [number, number];
	tuning: number[];
	labelBy: LabelBy;
	showFretDots: boolean;
	showFretNumbers: boolean;
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
	labelBy: LabelBy.Interval,
	showFretDots: true,
	showFretNumbers: true,
	podType: PodType.Interval
};

export default DEFAULT_FRETBOARD_PROPS;
