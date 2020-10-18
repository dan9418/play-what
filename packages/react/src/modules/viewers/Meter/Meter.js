import pw_core from '@pw/core';
import pw_color from '@pw/color';
import React from 'react';
import './Meter.css';

const getPitchColor = pw_core.models.index.pitch.getColor;
const getDegreeColor = pw_core.models.index.degree.getColor;
const modulo = pw_core.models.index.modulo;
const MAX = pw_core.models.pod.max;

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
		const color = colorFn ? colorFn(reduced) : pw_core.models.index.pitch.getColor(reduced);

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
			<label className='meter-label'>pitch</label>
			<IndexListMeter indexList={P} max={MAX[0]} colorFn={getPitchColor} {...props} />
			<label className='meter-label'>degree</label>
			<IndexListMeter indexList={D} max={MAX[1]} colorFn={getDegreeColor} {...props} />
		</>
	);
}

const Meter = ({ value, modelType, podType, ...props }) => {
	switch (modelType) {
	case 'pod':
		return <PodListMeter podList={[value]} {...props} />;
	case 'podList':
		return <PodListMeter podList={value} {...props} />;
	default:
		return null;
	}
}

export default Meter;
