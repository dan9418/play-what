import { COLOR_SCHEME } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import CoreUtils from '@pw/core/src/Core.utils';
import React from 'react';
import './Meter.css';
import DEFAULT_METER_PROPS from './Meter.defaults';

const getPitchColor = p => COLOR_SCHEME.pitchClass[p % 12];
const getDegreeColor = d => COLOR_SCHEME.degree[d % 7];
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
		const index = indexList.find(v => CoreUtils.modulo(v, max) === i);
		const reduced = CoreUtils.modulo(index, max);
		const color = colorFn(reduced);

		const style = ColorUtils.getStylesFromBgColor(color);
		const text = i;

		list.push({ style, text });
	}
	return <ListMeter list={list} />
};

const PodListMeter = ({ pods }) => {
	const P = pods.map(([p, d]) => p);
	const D = pods.map(([p, d]) => d);
	return (
		<>
			<IndexListMeter indexList={P} max={MAX[0]} colorFn={(i) => getPitchColor(i)} />
			<IndexListMeter indexList={D} max={MAX[1]} colorFn={(i) => getDegreeColor(i)} />
		</>
	);
}

const Meter = (userProps) => {
	const props = { ...DEFAULT_METER_PROPS, ...userProps };
	const { pods, podType } = props;

	return <PodListMeter pods={pods} />;
}

export default Meter;
