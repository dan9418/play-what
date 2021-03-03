import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_FRETBOARD_PROPS from "./Fretboard.defaults";

export const Fret = ({ FretLabel, isLowString, ...rest }) => {
	const classes = ['fret'];
	if (rest.fretIndex === 0)
		classes.push('open');

	return (
		<div className={classes.join(' ')}>
			<div className='fret-string' />
			<FretLabel {...rest} />
			<div className="fret-dots">
				{isLowString && api.getDotsForFret(rest.fretIndex)}
			</div>
		</div>
	);
};

const getFrets = (props) => {
	const { fretRange, tuning, ...rest } = props;
	const [lo, hi] = fretRange;

	const allFrets = [];
	for (let s = 0; s < tuning.length; s++) {
		for (let f = lo; f <= hi; f++) {
			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					stringTuning={tuning[s]}
					stringIndex={s}
					fretIndex={f}
					isLowString={s === tuning.length - 1}
					{...rest}
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
