import React, { createContext, useContext } from 'react';

const InputContext = createContext(null);

export const InputContextProvider = ({ input, setInput, children }) => {

	const { pods, podType } = input.value;
	const setPods = newPods => setInput({ ...input, value: { ...input.value, pods: newPods } });
	const setPodType = newPodType => setInput({ ...input, value: { ...input.value, podType: newPodType } });

	const inputContext = {
		pods, podType, setPods, setPodType
	};

	return (
		<InputContext.Provider value={inputContext}>
			{children}
		</InputContext.Provider>
	);
}

const useInputContext = () => useContext(InputContext);

export default useInputContext;
