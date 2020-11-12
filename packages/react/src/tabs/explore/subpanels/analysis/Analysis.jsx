import pw_color from '@pw/color';
import pw_core from '@pw/core';
import Degree from '@pw/core/src/modules/models/index/Degree';
import Pitch from '@pw/core/src/modules/models/index/Pitch';
import React from 'react';
import './Analysis.css';

const getPitchColor = Pitch.getColor
const getDegreeColor = Degree.getColor
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

const PodListMeter = ({ podList }) => {
	const P = podList.map(([p, d]) => p);
	const D = podList.map(([p, d]) => d);
	return (
		<>
			<IndexListMeter indexList={P} max={MAX[0]} colorFn={getPitchColor} />
			<IndexListMeter indexList={D} max={MAX[1]} colorFn={getDegreeColor} />
		</>
	);
}

const Analysis = ({ value, type }) => {
	//if (type === 'podIndex')
	//	return <IndexListMeter indexList={[value]} max={value} colorFn={getPitchColor} />
	if (type === 'keyCenter')
		return <PodListMeter podList={[value]} />;
	else if (type === 'intervalList' || type === 'noteList')
		return <PodListMeter podList={value} />;
	return JSON.stringify(value);
}

export default Analysis;
