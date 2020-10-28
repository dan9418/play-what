import React, { useState } from 'react';
import { PodContextProvider } from '../other/PodContext';
import ModelPanel from '../explore/ModelPanel';
import './ExploreTab.css';

const Explore = () => {
	const [modelType, setModelType] = useState('pod');
	const [podType, setPodType] = useState('note');
	const [theoryType, setTheoryType] = useState('note');
	const [value, setValue] = useState([0, 0]);
	return (
		<div className='explore-tab'>
			<PodContextProvider
				modelType={modelType}
				setModelType={setModelType}
				podType={podType}
				setPodType={setPodType}
				theoryType={theoryType}
				setTheoryType={setTheoryType}
				value={value}
				setValue={setValue}
			>
				<ModelPanel label='Custom' />
			</PodContextProvider>
		</div>
	);
};

export default Explore;
