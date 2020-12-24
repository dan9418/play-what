import React, { createContext, useContext } from 'react';

const InputContext = createContext(null);

export const InputContextProvider = ({ data, setData, children }) => {

	const inputContext = {
		data,
		setData
	};

	return (
		<InputContext.Provider value={inputContext}>
			{children}
		</InputContext.Provider>
	);
}

const useInputContext = () => useContext(InputContext);

export default useInputContext;
