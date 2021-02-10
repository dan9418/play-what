import { COLOR_SCHEME } from '@pw/core/src/color/Color.constants';
import ColorUtils from '@pw/core/src/color/Color.utils';
import PodUtils from '@pw/core/src/models/helpers/Pod.utils';
import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_FRETBOARD_PROPS from "./Fretboard.defaults";

export const Fret = ({
	stringTuning,
	stringIndex,
	fretIndex,
	keyCenter,
	intervals,
	colorSource,
	colorProperty,
	colorScheme,
	labelSource,
	labelProperty,
	tuningFn,
	toneFn }) => {

	const notes = PodUtils.addPodList(keyCenter, intervals);

	const noteIndex = stringTuning + fretIndex;
	const i = PodUtils.findIndexOfPodWithPitchClass(notes, noteIndex);
	const note = notes[i];
	const interval = intervals[i];

	const colorPod = colorSource === 'notes' ? note : colorSource === 'intervals' ? interval : null;
	let colorPropertyValue = PodUtils.getProperty(colorPod, colorProperty);
	const color = COLOR_SCHEME[colorScheme][colorPropertyValue];
	const colorStyles = ColorUtils.getStylesFromBgColor(color);

	const labelPod = labelSource === 'notes' ? note : labelSource === 'intervals' ? interval : null;
	let labelPropertyValue = PodUtils.getProperty(labelPod, labelProperty);
	if(labelPod && labelProperty === 'degree') labelPropertyValue = labelPropertyValue + 1;
	const label = labelPropertyValue;

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
	const props = { ...DEFAULT_FRETBOARD_PROPS, ...userProps };

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
