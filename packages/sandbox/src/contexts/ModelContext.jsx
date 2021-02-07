
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/state';

const ModelContext = createContext(null);

export const useModelContext = () => useContext(ModelContext);

const getModelUtils = (path, setPath) => {

	const pathHead = path[path.length - 1];
	const pop = () => setPath(path.slice(0, path.length - 1));
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);

	return {
		path,
		pathHead,
		pop,
		popAt,
		push,
		reset
	}
}

export const ModelContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);

	const modelContext = getModelUtils(path, setPath);

	console.log('modelContext', modelContext);

	return (
		<ModelContext.Provider value={modelContext}>
			{children}
		</ModelContext.Provider>
	);
};
