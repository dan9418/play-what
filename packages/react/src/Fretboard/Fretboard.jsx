import ColorUtils from '@pw/core/src/Color.utils';
import PodUtils from '@pw/core/src/Pod.utils';
import PodListUtils from '@pw/core/src/PodList.utils';
import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_PROPS from "./Fretboard.defaults";

const getPod = (keyCenter, intervals, notes, sourceId, noteIndex) => {
	let source = [];
	if (sourceId === 'none') return null;
	if (sourceId === 'keyCenter') source = [keyCenter];
	else if (sourceId === 'intervals') source = intervals;
	else if (sourceId === 'notes') source = notes;
	// TODO handle at higher level - sourceId should change if pod type of input id changes
	if (intervals === null && (sourceId === 'keyCenter' || sourceId === 'intervals')) source = notes;
	const pod = PodListUtils.findPodWithPitch(source, noteIndex);
	return pod;
};

export const Fret = ({
	stringTuning,
	stringIndex,
	fretIndex,
	keyCenter,
	intervals,
	notes,
	colorSource,
	colorFn,
	labelSource,
	labelFn,
	tuningFn,
	toneFn }) => {

	const noteIndex = stringTuning + fretIndex;
	const note = PodListUtils.findPodWithPitch(notes, noteIndex);

	const colorPod = getPod(keyCenter, intervals, notes, colorSource, noteIndex);
	const color = colorFn(colorPod)
	const colorStyles = ColorUtils.getStylesFromBgColor(color);

	const labelPod = getPod(keyCenter, intervals, notes, labelSource, noteIndex);
	const label = labelFn(labelPod);

	const frequency = tuningFn(note);
	const onClick = () => toneFn(frequency);

	const style = {
		position: 'absolute',
		width: '90%',
		height: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%',
		...colorStyles
	};

	const classes = ['fret'];
	if (fretIndex === 0)
		classes.push('open');

	return (
		<div className={classes.join(' ')}>
			{false && <div className='fret-number'>{fretIndex + 1}</div>}
			<div className='fret-string' />
			<div className='label' style={style} onClick={onClick}>
				{label}
			</div>
			{false && <div className='fret-dots'>{api.getDotsForFret(fretIndex + 1)}</div>}
		</div>
	);
}

const getFrets = (props) => {
	const { fretRange, tuning, ...otherProps } = props;
	const [lo, hi] = fretRange;
	//let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
	//let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

	const allFrets = [];
	for (let s = 0; s < tuning.length; s++) {
		for (let f = lo; f <= hi; f++) {
			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					stringTuning={tuning[s]}
					stringIndex={s}
					fretIndex={f}
					{...otherProps}
				/>
			);
		}
	}
	return allFrets;
}

const Fretboard = (userProps) => {
	const props = Object.assign({}, DEFAULT_PROPS, userProps);

	const [lo, hi] = props.fretRange;
	const numFrets = hi - lo + 1;
	const numStrings = props.tuning.length;
	const gridTemplateColumns = api.getFretRatios(numFrets).map(n => n + 'fr').join(' ');
	const gridTemplateRows = `repeat(${numStrings}, 1fr)`;
	const fretboardStyles = {
		gridTemplateColumns,
		gridTemplateRows
	};

	return (
		<div className='fretboard' style={fretboardStyles}>
			{getFrets(props)}
		</div>
	);
}

export default Fretboard;
