import * as React from "react";
import PW_Core from '@pw/core';
import "./Concept.css";
import PodMeter from "./Meter";

export const Frequency = ({ f }) => <div className="frequency">{`${f} Hz`}</div>;
export const Name = ({ name }) => <div className="name">{`${name}`}</div>;
export const Pod = ({ pod }) => <div className="pod">{`(${pod[0]}, ${pod[1]})`}</div>;
export const PitchIndex = ({ pitchIndex }) => <div className="pitch-index">{`#${pitchIndex}`}</div>;

export const Note = ({ pod, ctx, colorFn }) => {
	const pitchIndex = pod[0];
	const name = PW_Core.models.vector.getNoteName(ctx);
	const f = Math.round(PW_Core.Tuning.getFrequency(pod[0]));
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

export const NoteList = ({ notes, keyCenter, colorFn }) => {
	const noteComps = notes.map((n, i) => <Note pod={n} ctx={{ pod: n, homePod: keyCenter }} colorFn={colorFn} key={i} />);
	return (
		<>
			<div className='flex-row'>
				{noteComps}
			</div>
			<PodMeter pods={notes} />
		</>
	);
};

export const Interval = ({ pod, ctx, colorFn }) => {
	const name = PW_Core.models.vector.getIntervalName(ctx);
	const pitchIndex = pod[0];
	const styles = colorFn(ctx);

	return (
		<div className='interval' style={styles}>
			<Name name={name} />
			<div>
				<PitchIndex pitchIndex={pitchIndex} />
				<Pod {...pod} />
			</div>
		</div>
	);
};

export const IntervalList = ({ intervals, colorFn }) => {
	const intervalComps = intervals.map((n, i) => <Interval pod={n} ctx={{ pod: n }} colorFn={colorFn} key={i} />);
	return (
		<>
			<div className='flex-row'>
				{intervalComps}
			</div>
			<PodMeter pods={intervals} />
		</>
	);
};

export const KeyCenter = ({ keyCenter, ctx, colorFn }) => {
	return (
		<div className='key-center'>
			<Note pod={keyCenter} ctx={{ pod: keyCenter }} colorFn={colorFn} />
			<div className='meter-container'>
				<PodMeter pods={[keyCenter]} />
			</div>
		</div>
	);
};
