
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/pathState';

const PathContext = createContext(null);

export const usePathContext = () => useContext(PathContext);

const getPathUtils = (path, setPath) => {

	const pop = () => setPath(path.slice(0, path.length - 1));
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);
	const pathHead = path[path.length - 1];

	return {
		path,
		pop,
		popAt,
		push,
		reset,
		pathHead
	}
}

export const PathContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);

	const pathContext = getPathUtils(path, setPath);

	console.log('dpb pathContext', pathContext);

	return (
		<PathContext.Provider value={pathContext}>
			{children}
		</PathContext.Provider>
	);
};
