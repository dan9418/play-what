import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import Panel from '../Panel';

const CellDemo = () => {
	const [keyCenter, setKeyCenter] = useState([0, 0]);
	const [intervals, setIntervals] = useState([[1, 1], [2, 2]]);

	const notes = PodUtils.addPodList(keyCenter, intervals);

	return (
		<>
			<PodContextProvider value={keyCenter} podType="note" isList={false}>
				<Panel name="Key Center" />
			</PodContextProvider>
			<PodContextProvider value={intervals} podType="interval" isList>
				<Panel name="Intervals" />
			</PodContextProvider>
			<PodContextProvider value={notes} podType="note" isList>
				<Panel name="Notes" />
			</PodContextProvider>
		</>
	);
};

export default CellDemo;
