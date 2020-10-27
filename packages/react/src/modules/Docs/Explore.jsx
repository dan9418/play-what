import React, { useState } from 'react';
import ModelPanel from './ModelPanel';

const Explore = () => {
	const [modelType, setModelType] = useState('pod');
	const [podType, setPodType] = useState('note');
	const [theoryType, setTheoryType] = useState('note');
	const [value, setValue] = useState([0, 0]);
	return (
		<table className='explore'>
			<ModelPanel
				label='Custom'
				modelType={modelType}
				setModelType={setModelType}
				podType={podType}
				setPodType={setPodType}
				theoryType={theoryType}
				setTheoryType={setTheoryType}
				value={value}
				setValue={setValue}
			/>
		</table>
	);
};

export default Explore;
