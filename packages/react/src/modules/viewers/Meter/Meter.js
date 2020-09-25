import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './Meter.css';

const ListMeter = ({ list }) => {
	const cells = list.map((l, i) => <div className='cell' style={l.style} key={i}>{l.text}</div>);
	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const ScalarListMeter = ({ max, nameFn, scalarList, colorFn }) => {
	const list = [];
	for (let i = 0; i < max; i++) {
		const value = scalarList.find(v => PW_Core.models.math.scalar.modulo({ a: v, b: max }) === i);
		const reduced = PW_Core.models.math.scalar.modulo({ a: value, b: max });
		const color = colorFn ? colorFn(reduced) : PW_Core.models.theory.pitch.getColor(reduced);

		const style = PW_Color.getStylesFromBgColor(color);
		const text = nameFn ? nameFn(i) : i;

		list.push({ style, text });
	}
	return <ListMeter list={list} />
};

const OctaveListMeter = ({ pitchList }) => {
	const list = [];
	for (let i = 0; i < 12; i++) {
		const pitch = pitchList.find(p => PW_Core.models.math.scalar.modulo({ a: p, b: 12 }) === i) || null;
		if (pitch === null) {
			list.push({
				style: {},
				text: ''
			});
			continue;
		}

		const o = PW_Core.models.math.scalar.floor(pitch, 12);

		const color = PW_Core.models.theory.pitch.getColor(o);
		const style = PW_Color.getStylesFromBgColor(color);
		const text = o + 4;

		list.push({ style, text });
	}
	return <ListMeter list={list} />
};

const PodListMeter = ({ podList, max, ...props }) => {
	const [maxP, maxD] = max;
	const P = podList.map(([p, d]) => p);
	const D = podList.map(([p, d]) => d);
	const colorFnP = PW_Core.models.theory.pitch.getColor;
	const colorFnD = PW_Core.models.theory.degree.getColor;
	return (
		<>
			<ScalarListMeter scalarList={P} max={maxP} colorFn={colorFnP} {...props} />
			<ScalarListMeter scalarList={D} max={maxD} colorFn={colorFnD} {...props} />
		</>
	);
}

const Meter = ({ value, mathType, max, ...props }) => {
	switch (mathType) {
	case 'scalar':
		return <ScalarListMeter scalarList={[value]} max={max} {...props} />;
	case 'scalarList':
		return <ScalarListMeter scalarList={value} max={max} {...props} />;
	case 'pod':
		return <PodListMeter podList={[value]} max={max} {...props} />;
	case 'podList':
		return <PodListMeter podList={value} max={max} {...props} />;
	default:
		return null;
	}
}

export default Meter;
