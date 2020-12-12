import { SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import './Explore.css';
import OutputPanel from './panels/OutputPanel';
import Timeline from './Timeline/Timeline';

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
			<OutputPanel frame={frames[index]} />
			<Timeline frames={frames} index={index} setIndex={setIndex} />
		</div>
	);
};

export default Explore;
