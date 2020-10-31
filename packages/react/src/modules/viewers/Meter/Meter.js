import pw_core from '@pw/core';
import pw_color from '@pw/color';
import React from 'react';
import './Meter.css';

const getPitchColor = pw_core.models.pitch.getColor;
const getDegreeColor = pw_core.models.degree.getColor;
const MAX = [12, 7];

const ListMeter = ({ list }) => {
	const cells = list.map((l, i) => <div className='cell' style={l.style} key={i}>{l.text}</div>);
	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const IndexListMeter = ({ max, nameFn, indexList, colorFn }) => {
	const list = [];
	for (let i = 0; i < max; i++) {
		const value = indexList.find(v => pw_core.models.index.modulo({ a: v, b: max }) === i);
		const reduced = pw_core.models.index.modulo({ a: value, b: max });
		const color = colorFn(reduced);

		const style = pw_color.getStylesFromBgColor(color);
		const text = nameFn ? nameFn(i) : i;

		list.push({ style, text });
	}
	return <ListMeter list={list} />
};

const PodListMeter = ({ podList, ...props }) => {
	const P = podList.map(([p, d]) => p);
	const D = podList.map(([p, d]) => d);
	return (
		<>
			<IndexListMeter indexList={P} max={MAX[0]} colorFn={getPitchColor} {...props} />
			<IndexListMeter indexList={D} max={MAX[1]} colorFn={getDegreeColor} {...props} />
		</>
	);
}

const Meter = ({ value, ...props }) => {
	if(value instanceof pw_core.Pod)
		return <PodListMeter podList={[value]} {...props} />;
	else if(value instanceof pw_core.PodList)
		return <PodListMeter podList={value} {...props} />;
	return null;
}

export default Meter;
