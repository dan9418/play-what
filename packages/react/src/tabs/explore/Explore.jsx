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
	frames: [
		{
			pods: SCALE.Major.value
		},
		null,
		{
			pods: SCALE.NaturalMinor.value
		},
		{
			pods: SCALE.Chromatic.value
		},
		{
			pods: SCALE.Major.value
		},
		null,
		{
			pods: SCALE.NaturalMinor.value
		},
		null
	]
};

const Explore = () => {
	const [frames, setFrames] = useState(DEFAULT_FRAMESET.frames);
	const [index, setIndex] = useState(0);

	return (
		<div className="explore">
			{/*<InputPanel frameset={frameset} setFrameset={setFrameset} position={position} />*/}
			<OutputPanel frame={frames[index]} outputs={[OUTPUT_1, OUTPUT_2]} />
			<Timeline frames={frames} index={index} setIndex={setIndex} />
		</div>
	);
};

export default Explore;
