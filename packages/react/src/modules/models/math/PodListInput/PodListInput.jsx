import React from 'react';
import './PodListInput.css';

import PodInput from '../PodInput/PodInput';

import PW_Core from '@pw/core';

const PodListInput = props => {
	const { value, setValue } = props;

	const pods = value.map((v, i) => {
		const setPodValue = r => setValue([...value.slice(0, i), r, ...value.slice(i + 1)]);
		return <PodInput key={i} value={v} setValue={setPodValue} />;
	});

	return (
		<div className="podList-input">
			{pods}
		</div>
	);
}

export default PodListInput;
