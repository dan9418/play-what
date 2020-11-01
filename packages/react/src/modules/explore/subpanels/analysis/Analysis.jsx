import pw_core from '@pw/core';
import pw_color from '@pw/color';
import React from 'react';
import './Analysis.css';

const getPitchColor = pw_core.Pitch.getColor;
const getDegreeColor = pw_core.Degree.getColor;
const MAX = [12, 7];

const ListMeter = ({ list }) => {
	const cells = list.map((l, i) => <div className='cell' style={l.style} key={i}>{l.text}</div>);
	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const IndexListMeter = ({ max, indexList, colorFn }) => {
	const list = [];
	for (let i = 0; i < max; i++) {
		const value = indexList.find(v => pw_core.Utils.modulo(v, max) === i);
		const reduced = pw_core.Utils.modulo(value, max);
		const color = colorFn(reduced);

		const style = pw_color.getStylesFromBgColor(color);
		const text = i;

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

const Analysis = ({ value, ...props }) => {
	const v = value.getValue();
	if (value instanceof pw_core.PodIndex)
		return <IndexListMeter indexList={[v]} max={v} colorFn={getPitchColor} {...props} />
	if (value instanceof pw_core.Pod)
		return <PodListMeter podList={[v]} {...props} />;
	else if (value instanceof pw_core.PodList)
		return <PodListMeter podList={v} {...props} />;
	return JSON.stringify(value);
}

export default Analysis;
