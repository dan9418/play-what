import React, { createContext, useContext } from 'react';

const InputContext = createContext(null);

const getInputContext = (data, setData) => {
	const { podType, keyCenter, intervals, notes } = data;

	const setPodType = x => setData({
		...data,
		podType: x
	});
	const setKeyCenter = null;
	const setIntervals = null;
	const setNotes = null;

	return {
		podType,
		setPodType,
		keyCenter,
		setKeyCenter,
		intervals,
		setIntervals,
		notes,
		setNotes
	};
};

export const InputContextProvider = ({ data, setData, children }) => {

	const inputContext = getInputContext(data, setData);

	console.log(data, inputContext)

	return (
		<InputContext.Provider value={inputContext}>
			{children}
		</InputContext.Provider>
	);
}

const useInputContext = () => useContext(InputContext);

export default useInputContext;
