import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import PW_Tone from '@pw/tone';
import React from 'react';
import './List.css';

const Name = ({ style, children, onClick }) => <div className='name' style={style} onClick={onClick}>{children}</div>;

const IntervalName = ({ interval: raw, ...props }) => {
	const interval = PW_Core.models.math.pod.reduce(raw);
	const [p, d] = interval;
	const text = PW_Core.models.theory.interval.getName(interval)
	const color = PW_Core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};
	return <Name style={style} >{text}</Name>;
}

const IntervalNameList = ({ intervals }) => {
	return (
		<div className='list'>
			{intervals.map((ivl, i) => <IntervalName interval={ivl} key={i} />)}
		</div>
	);
}

const NoteName = ({ note: raw, ...props }) => {
	const note = PW_Core.models.math.pod.reduce(raw);
	const [p, d] = note;
	const text = PW_Core.models.theory.note.getName(note)
	const color = PW_Core.models.theory.degree.getColor(d);
	const style = {
		border: `1px solid ${color}`
	};

	const f = PW_Core.tuning.getFrequency(raw[0]);
	const onClick = () => PW_Tone.out.play(f);

	return <Name style={style} onClick={onClick}>{text}</Name>;
}

const NoteNameList = ({ notes }) => {
	return (
		<div className='list'>
			{notes.map((n, i) => <NoteName note={n} key={i} />)}
		</div>
	);
}

const List = ({ value, type, ...props }) => {
	switch (type) {
	case 'interval':
		return <IntervalName interval={value} {...props} />;
	case 'note':
		return <NoteName note={value} {...props} />;
	case 'intervalList':
		return <IntervalNameList intervals={value} {...props} />;
	case 'noteList':
		return <NoteNameList notes={value} {...props} />;
	default:
		return null;
	}
}

export default List;
