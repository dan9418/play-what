import React, { createContext, useContext } from 'react';

const PodContext = createContext(null);

export const PodContextProvider = ({
	value,
	setValue,
	podType,
	setPodType,
	children
}) => {
	const podContext = {
		value,
		setValue,
		podType,
		setPodType
	};
	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
