import PodUtils from '@pw/core/src/Pod.utils';
import { NOTE, SCALE } from '@pw/core/src/Pod.presets';
import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import Panel from '../Panel';

const CellDemo = () => {
	const [keyCenter, setKeyCenter] = useState(NOTE.D.value);
	const [intervals, setIntervals] = useState(SCALE.Major.value);

	const notes = PodUtils.addPodList(keyCenter, intervals);

	console.log('Cell', keyCenter, intervals, notes);

	return (
		<>
			<PodContextProvider value={keyCenter} setValue={setKeyCenter} podType="note">
				<Panel name="Key Center" />
			</PodContextProvider>
			<PodContextProvider value={intervals} setValue={setIntervals} podType="interval">
				<Panel name="Intervals" />
			</PodContextProvider>
			<PodContextProvider value={notes} podType="note">
				<Panel name="Notes" />
			</PodContextProvider>
		</>
	);
};

export default CellDemo;
