
import React, { createContext, useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/pathState';

const PathContext = createContext(null);

export const usePathContext = () => useContext(PathContext);

const getPathUtils = (path, setPath, inputs, setInputs) => {

	const pop = () => setPath(path.slice(0, path.length - 1));
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => {
		setPath([...path, p]);
		setInputs([...inputs, p.modelData.inputs || null]);
	};
	const reset = () => setPath([]);
	const pathHead = path[path.length - 1];

	return {
		path,
		pop,
		popAt,
		push,
		reset,
		pathHead,
		inputs
	}
}

export const PathContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);
	const [inputs, setInputs] = useState([null]);

	const pathContext = getPathUtils(path, setPath, inputs, setInputs);

	console.log('dpb pathContext', pathContext);

	return (
		<PathContext.Provider value={pathContext}>
			{children}
		</PathContext.Provider>
	);
};
