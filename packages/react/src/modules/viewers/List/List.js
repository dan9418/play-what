import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './List.css';

const TextList = ({ list }) => {
	const cells = list.map((l, i) => <div className='list-item' style={l.style} key={i}>{l.text}</div>);
	return (
		<div className='list'>
			{cells}
		</div>
	);
};

const IntervalList = ({ intervals, ...props }) => {
	const list = intervals.map(ivl => {
		const color = PW_Core.models.theory.degree.getColor(ivl[1]);
		const style = {
			border: `1px solid ${color}`
		};
		const text = PW_Core.models.theory.interval.getName(ivl)
		return { style, text };
	});
	return <TextList list={list} />;
}

const List = ({ value, type, ...props }) => {
	switch (type) {
	case 'interval':
		return <IntervalList intervals={value} {...props} />;
	default:
		return null;
	}
}

export default List;
