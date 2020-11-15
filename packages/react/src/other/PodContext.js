import PodUtils from '@pw/core/src/modules/models/pod/PodUtils';
import React, { createContext, useContext, useState } from 'react';

const PodContext = createContext(null);

const MAX = [12, 7];

export const PodContextProvider = ({ value, setValue, podType, setPodType, isList, setIsList, children }) => {

	const reducedValue = PodUtils.reduce(value, { isList });

	const podContext = {
		value,
		reducedValue,
		setValue,
		podType,
		setPodType,
		isList,
		setIsList
	};

	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
