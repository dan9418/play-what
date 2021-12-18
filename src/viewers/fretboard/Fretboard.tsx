import * as React from "react";
import StyledFretboard from "./Fretboard.styles";
import { DEFAULT_FRETBOARD_PROPS, getDotsForFret, getFretRatios, IFretboardProps, IFretProps } from "./Fretboard.utils";
import FretLabel from "./FretLabel";

export const Fret: React.FC<IFretProps> = props => {

	const { tuning, stringIndex, fretIndex, showFretNumbers, showFretDots, getFretLabelProps } = props;

	const classes = ['fret'];
	if (fretIndex === 0)
		classes.push('open');

	const isLowString = stringIndex === tuning.length - 1;
	const isHighString = stringIndex === 0;

	const fretLabelProps = getFretLabelProps ? getFretLabelProps(stringIndex, fretIndex, tuning) : {};

	return (
		<div className={classes.join(' ')}>
			<div className="fret-number">
				{showFretNumbers && isHighString && fretIndex > 0 && fretIndex}
			</div>
			<div className='fret-string' />
			<FretLabel {...fretLabelProps} />
			<div className="fret-dots">
				{showFretDots && isLowString && fretIndex > 0 && getDotsForFret(fretIndex)}
			</div>
		</div>
	);
};

const getFrets = (props: IFretboardProps) => {
	const { fretRange, tuning } = props;
	const [lo, hi] = fretRange;

	const allFrets = [];
	for (let s = 0; s < tuning.length; s++) {
		for (let f = lo; f <= hi; f++) {
			allFrets.push(
				<Fret
					key={`s${s}-f${f}`}
					stringIndex={s}
					fretIndex={f}
					tuning={tuning}
					{...props}
				/>
			);
		}
	}
	return allFrets;
};

const Fretboard: React.FC<IFretboardProps> = (userProps) => {
	const props = { ...DEFAULT_FRETBOARD_PROPS, ...userProps };

	const [lo, hi] = props.fretRange;
	const numFrets = hi - lo + 1;
	const numStrings = props.tuning.length;
	const gridTemplateColumns = getFretRatios(numFrets).map(n => n + 'fr').join(' ');
	const gridTemplateRows = `repeat(${numStrings}, 1fr)`;
	const fretboardStyles = {
		gridTemplateColumns,
		gridTemplateRows
	};

	return (
		<StyledFretboard className='fretboard' style={fretboardStyles}>
			{getFrets(props)}
		</StyledFretboard>
	);
};

export default Fretboard;
