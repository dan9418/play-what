import PodUtils from '@pw/core/src/PodUtils';
import { NOTE, SCALE } from '@pw/core/src/Presets';
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
			<PodContextProvider value={keyCenter} setValue={setKeyCenter} podType="note" isList={false}>
				<Panel name="Key Center" />
			</PodContextProvider>
			<PodContextProvider value={intervals} setValue={setIntervals} podType="interval" isList>
				<Panel name="Intervals" />
			</PodContextProvider>
			<PodContextProvider value={notes} podType="note" isList>
				<Panel name="Notes" />
			</PodContextProvider>
		</>
	);
};

export default CellDemo;
