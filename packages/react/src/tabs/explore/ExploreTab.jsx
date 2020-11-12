import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import React, { useState } from 'react';
import { PodContextProvider } from '../../other/PodContext';
import './ExploreTab.css';
import Panel from './Panel';

const Explore = () => {
	const [keyCenter, setKeyCenter] = useState([0, 0]);
	const [intervals, setIntervals] = useState([[1, 1], [2, 2]]);

	const notes = PodUtils.addPodList(keyCenter, intervals);

	return (
		<div className='explore-tab'>
			<h2>Key Center</h2>
			<PodContextProvider value={keyCenter} podType="note" isList={false}>
				<Panel />
			</PodContextProvider>
			<h2>Intervals</h2>
			<PodContextProvider value={intervals} podType="interval" isList>
				<Panel />
			</PodContextProvider>
			<h2>Notes</h2>
			<PodContextProvider value={notes} podType="note" isList>
				<Panel />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
