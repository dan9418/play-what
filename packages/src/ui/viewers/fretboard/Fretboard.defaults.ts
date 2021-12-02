import { PodType } from '../../../core/models/Model.constants';
import { IViewerProps } from '../Viewer.constants';
import { FRETBOARD_TUNING } from './Fretboard.api';

export interface IFretboardProps extends IViewerProps {
	fretRange?: [number, number];
	tuning?: number[];
	labelBy?: string;
	showFretDots?: boolean;
	showFretNumbers?: boolean;
	voicing?: any;
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
	labelBy: 'interval',
	showFretDots: true,
	showFretNumbers: true,
	podType: PodType.Interval
};

export default DEFAULT_FRETBOARD_PROPS;
