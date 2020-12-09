import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { VIEWER } from '../../viewers/viewers';
import './Explore.css';
import InputPanel from './panels/InputPanel';
import OutputPanel from './panels/OutputPanel';
import Timeline from './Timeline/Timeline';

const OUTPUT_1 = {
	id: 'output1',
	name: 'Output 1',
	value: {
		viewerInput: null,
		viewerDef: VIEWER.fretboard,
		viewerProps: VIEWER.fretboard.defaultProps
	}
};

const OUTPUT_2 = {
	id: 'output1',
	name: 'Output 1',
	value: {
		viewerInput: null,
		viewerDef: VIEWER.keyboard,
		viewerProps: VIEWER.keyboard.defaultProps
	}
}

const DEFAULT_FRAMESET = {
	id: '2-5-1',
	name: '2-5-1',
	measures: [[SCALE.Major.value, [], SCALE.NaturalMinor.value, SCALE.Chromatic.value], [SCALE.Major.value, [], [], []]]
}

const Explore = () => {
	const [frameset, setFrameset] = useState(DEFAULT_FRAMESET);
	const [position, setPosition] = useState([0, 0]);

	const frame = frameset.measures[position[0]][position[1]];

	return (
		<div className="explore">
			{/*<InputPanel frameset={frameset} setFrameset={setFrameset} position={position} />*/}
			<OutputPanel frame={frame} outputs={[OUTPUT_1, OUTPUT_2]} />
			<Timeline frameset={frameset} position={position} setPosition={setPosition} />
		</div>
	);
};

export default Explore;
