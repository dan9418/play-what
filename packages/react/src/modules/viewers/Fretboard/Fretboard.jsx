import pw_core from '@pw/core';
import pw_color from '@pw/color';
import * as React from "react";
import * as api from './Fretboard.api';
import "./Fretboard.css";
import DEFAULT_PROPS from "./Fretboard.defaults";

const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export const Fret = ({ context, projection, result }) => {
	let classes = ['fret'];
	if (context.fretIndex === 0)
		classes.push('open');

	const x = projection.cell.B[context.podIndex];
	let d = null;
	let p = null;
	if (x) {
		d = x[1];
		p = x[0];
	}
	const color = projection.colorFn(d);
	const colorStyles = pw_color.getStylesFromBgColor(color);

	const text = x ? projection.textFn({ a: x }) : '';

	const styles = {
		position: 'absolute',
		width: '90%',
		height: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%',
		...colorStyles
	};

	return (
		<div className={classes.join(' ')}>
			{false && <div className='fret-number'>{context.fretIndex + 1}</div>}
			<div className='fret-string' />
			<div className='label' style={styles}>
				{text}
			</div>
			{false && <div className='fret-dots'>{api.getDotsForFret(fretIndex + 1)}</div>}
		</div>
	);
}

const getFrets = (props) => {
	const { fretRange, tuning, projection } = props;
	const { cell, colorFn, textFn, reduced } = projection;
	//let min = config.strings.reduce((prev, current) => (prev.tuning < current.tuning) ? prev : current).tuning + config.fretLow;
	//let max = config.strings.reduce((prev, current) => (prev.tuning > current.tuning) ? prev : current).tuning + config.fretHigh;

	const result = pw_core.models.struct.cell.evaluate(cell);

	const allFrets = [];

	for (let s = 0; s < tuning.length; s++) {
		for (let f = fretRange[0]; f <= fretRange[1]; f++) {

			const noteIndex = tuning[s] + f;
			const index = pw_core.models.math.matrix.findIndexOfVectorWithPitch({
				A: result,
				p: noteIndex
			});

			const pod = cell.B[index];

			const ctx = {
				tuning,
				stringIndex: s,
				fretRange,
				fretIndex: f,
				noteIndex,
				vector: pod,
				podIndex: index
			};

			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					context={ctx}
					projection={projection}
					result={result}
				/>
			);
		}
	}
	return allFrets;
}

const getFretRatios = (numFrets) => {
	let ratios = [];
	for (let i = 1; i <= numFrets; i++) {
		ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
	}
	return ratios;
}

const Fretboard = ({ style, ...userProps }) => {
	const props = Object.assign({}, DEFAULT_PROPS, userProps);
	// Calculate fretboard dimensions

	const numFrets = props.fretRange[1] - props.fretRange[0] + 1;
	const numStrings = props.tuning.length;
	const gridTemplateColumns = getFretRatios(numFrets).map(n => n + 'fr').join(' ');
	const gridTemplateRows = `repeat(${numStrings}, 1fr)`;
	const fretboardStyles = {
		gridTemplateColumns,
		gridTemplateRows,
		...style
	};

	return (
		<div className='fretboard' style={fretboardStyles}>
			{getFrets(props)}
		</div>
	);
}

export default Fretboard;
