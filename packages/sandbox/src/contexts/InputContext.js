import React, { createContext, useContext } from 'react';

const InputContext = createContext(null);

const getInputContext = (data, setData) => {
	const { podType, keyCenter, intervals, notes } = data;

	const setPodType = x => {
		if (x === 'note') {
			setData({
				...data,
				keyCenter: null,
				intervals: null,
				podType: x
			});
		}
		if (x === 'interval') {
			setData({
				...data,
				keyCenter: [0, 0],
				intervals: data.notes,
				//notes: data.notes,
				podType: x
			});
		}
	};
	const setKeyCenter = x => {
		setData({
			...data,
			keyCenter: x
		});
	};
	const setIntervals = x => {
		setData({
			...data,
			intervals: x
		});
	};
	const setNotes = x => {
		setData({
			...data,
			notes: x
		});
	};

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

	return (
		<InputContext.Provider value={inputContext}>
			{children}
		</InputContext.Provider>
	);
}

const useInputContext = () => useContext(InputContext);

export default useInputContext;
