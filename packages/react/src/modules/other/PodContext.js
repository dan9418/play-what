import React, { createContext, useContext } from 'react';

const PodContext = createContext(null);

export const PodContextProvider = ({
	modelType,
	setModelType,
	podType,
	setPodType,
	theoryType,
	setTheoryType,
	value,
	setValue,
	children
}) => {
	const podContext = {
		modelType,
		setModelType,
		podType,
		setPodType,
		theoryType,
		setTheoryType,
		value,
		setValue
	};
	return (
		<PodContext.Provider value={podContext}>
			{children}
		</PodContext.Provider>
	);
}

const usePodContext = () => useContext(PodContext);

export default usePodContext;
