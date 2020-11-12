import React, { createContext, useContext, useState } from 'react';

const PodContext = createContext(null);

export const PodContextProvider = ({ value, setValue, podType, setPodType, isList, setIsList, children }) => {

	const podContext = {
		value,
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
