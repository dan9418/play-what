import React, { createContext, useContext } from 'react';

const PodContext = createContext(null);

export const PodContextProvider = ({
	value,
	setValue,
	children
}) => {
	const podContext = {
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
