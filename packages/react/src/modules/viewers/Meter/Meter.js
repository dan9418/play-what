import PW_Core from '@pw/core';
import PW_Color from '@pw/color';
import React from 'react';
import './Meter.css';

const IntegerListMeter = ({ max, integerList, colorFn }) => {

	const cells = [];
	for (let i = 0; i < max; i++) {
		const value = integerList.find(v => PW_Core.models.math.integer.modulo(v, max) === i);
		const reduced = PW_Core.models.math.integer.modulo(value, max);
		const color = colorFn ? colorFn(reduced) : PW_Core.models.theory.pitchClass.getColor(reduced);

		let styles = PW_Color.getStylesFromBgColor(color);

		cells.push(<div className='cell' style={styles} key={i}>{i}</div>)
	}

	return (
		<div className='meter'>
			{cells}
		</div>
	);
};

const PodListMeter = ({ podList, max }) => {
	const [maxP, maxD] = max;
	const P = podList.map(v => v[0]);
	const D = podList.map(v => v[1]);
	const colorFnP = PW_Core.models.theory.pitchClass.getColor;
	const colorFnD = PW_Core.models.theory.degree.getColor;
	return (
		<>
			<IntegerListMeter integerList={P} max={maxP} colorFn={colorFnP} />
			<IntegerListMeter integerList={D} max={maxD} colorFn={colorFnD} />
		</>
	);
}

const Meter = ({ value, type, max, ...props }) => {
	switch (type) {
	case 'integer':
		return <IntegerListMeter integerList={[value]} max={max} {...props}/>;
	case 'integerList':
		return <IntegerListMeter integerList={value} max={max} {...props}/>;
	case 'pod':
		return <PodListMeter podList={[value]} max={max} {...props}/>;
	case 'podList':
		return <PodListMeter podList={value} max={max} {...props}/>;
	default:
		return null;
	}
}

export default Meter;
