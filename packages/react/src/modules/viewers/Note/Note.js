import * as React from "react";
import PW_Core from '@pw/core';
import "./Note.css";

export const Frequency = ({ f }) => <div className="frequency">{`${f} Hz`}</div>;
export const Name = ({ name }) => <div className="name">{`${name}`}</div>;
export const Pod = ({ pod }) => <div className="pod">{`(${pod[0]}, ${pod[1]})`}</div>;
export const PitchIndex = ({ pitchIndex }) => <div className="pitch-index">{`#${pitchIndex}`}</div>;

export const Note = ({ pod, ctx, colorFn }) => {
	const pitchIndex = pod[0];
	const name = PW_Core.models.math.pod.getNoteName(ctx);
	const f = Math.round(PW_Core.tuning.getFrequency(pod[0]));
	const colorStyles = colorFn(ctx)

	return (
		<div className='note' style={colorStyles}>
			<Name name={name} />
			<div>
				<PitchIndex pitchIndex={pitchIndex} />
				<Pod pod={pod} />
			</div>
			<Frequency f={f} />
		</div>
	);
};
