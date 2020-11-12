import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import Panel from '../Panel';

const BasicDemo = () => {
	const [keyCenter, setKeyCenter] = useState([0, 0]);
	const [podType, setPodType] = useState('note');
	const [isList, setIsList] = useState(false);

	return (
		<>
			<PodContextProvider value={keyCenter} podType={podType} isList={isList}>
				<Panel name="Basic" />
			</PodContextProvider>
		</>
	);
};

export default BasicDemo;
