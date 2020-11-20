import pw_core from '@pw/core';
import { COLOR_FN } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import React from 'react';
import './Meter.css';
import DEFAULT_METER_PROPS from './Meter.defaults';

const getPitchColor = COLOR_FN.pitch;
const getDegreeColor = COLOR_FN.degree;
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
		const value = indexList.find(v => pw_core.CoreUtils.modulo(v, max) === i);
		const reduced = pw_core.CoreUtils.modulo(value, max);
		const color = colorFn(reduced);

		const style = ColorUtils.getStylesFromBgColor(color);
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

const Meter = (userProps) => {
	const props = { ...DEFAULT_METER_PROPS, ...userProps };
	const { podContext } = props;
	const { value, podType } = podContext;

	return <PodListMeter podList={value} />;
}

export default Meter;
