import * as React from "react";
import PW_Core from '@pw/core';
import "./Note.css";

export const Frequency = ({ f }) => <div className="frequency">{`${f} Hz`}</div>;
export const Name = ({ name }) => <div className="name">{`${name}`}</div>;
export const Vector = ({ vector }) => <div className="vector">{`(${vector[0]}, ${vector[1]})`}</div>;
export const PitchIndex = ({ pitchIndex }) => <div className="pitch-index">{`#${pitchIndex}`}</div>;

export const Note = ({ vector, ctx, colorFn }) => {
	const pitchIndex = vector[0];
	const name = PW_Core.models.math.vector.getNoteName(ctx);
	const f = Math.round(PW_Core.tuning.getFrequency(vector[0]));
	const colorStyles = colorFn(ctx)

	return (
		<div className='note' style={colorStyles}>
			<Name name={name} />
			<div>
				<PitchIndex pitchIndex={pitchIndex} />
				<Vector vector={vector} />
			</div>
			<Frequency f={f} />
		</div>
	);
};
