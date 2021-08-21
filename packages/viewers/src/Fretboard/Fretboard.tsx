import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_FRETBOARD_PROPS from "./Fretboard.defaults";
import FretLabel from "./FretLabel";

export const Fret = ({ tuning, stringIndex, fretIndex, labelProps, hideLabel }) => {
	const classes = ['fret'];
	if (fretIndex === 0)
		classes.push('open');

	const noteIndex = tuning[stringIndex] + fretIndex;
	const isLowString = stringIndex === tuning.length - 1;
	const isHighString = stringIndex === 0;

	return (
		<div className={classes.join(' ')}>
			<div className="fret-number">
				{!hideLabel && isHighString && fretIndex > 0 && fretIndex}
			</div>
			<div className='fret-string' />
			<FretLabel {...labelProps} noteIndex={noteIndex} hideLabel={hideLabel} />
			<div className="fret-dots">
				{!hideLabel && isLowString && fretIndex > 0 && api.getDotsForFret(fretIndex)}
			</div>
		</div>
	);
};

const getFrets = (props) => {
	const { fretRange, tuning, labelProps, hideLabel } = props;
	const [lo, hi] = fretRange;

	const allFrets = [];
	for (let s = 0; s < tuning.length; s++) {
		for (let f = lo; f <= hi; f++) {
			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					stringIndex={s}
					fretIndex={f}
					labelProps={labelProps}
					hideLabel={hideLabel}
					tuning={tuning}
				/>
			);
		}
	}
	return allFrets;
};

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
};

export default Fretboard;
