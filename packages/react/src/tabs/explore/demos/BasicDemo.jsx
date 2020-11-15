import React, { useState } from 'react';
import { PodContextProvider } from '../../../other/PodContext';
import Panel from '../Panel';

const BasicDemo = () => {
	const [value, setValue] = useState([[0, 0], [1, 1], [2, 2]]);
	const [podType, setPodType] = useState('note');
	const [isList, setIsList] = useState(true);

	return (
		<>
			<PodContextProvider value={value} setValue={setValue} podType={podType} setPodType={setPodType} isList={isList} setIsList={setIsList}>
				<Panel name="Basic" />
			</PodContextProvider>
		</>
	);
};

export default BasicDemo;
