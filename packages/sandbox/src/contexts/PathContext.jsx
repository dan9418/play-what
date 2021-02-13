
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/pathState';

const PathContext = createContext(null);

export const usePathContext = () => useContext(PathContext);

const getPathUtils = (path, setPath) => {

	const pathHead = path[path.length - 1];
	const pathParent = path.length > 2 ? path[path.length - 2] : null;
	const pop = () => setPath(path.slice(0, path.length - 1));
	const popAt = n => setPath(path.slice(0, n + 1));
	const push = p => setPath([...path, p]);
	const reset = () => setPath([]);

	return {
		path,
		pathHead,
		pathParent,
		pop,
		popAt,
		push,
		reset
	}
}

export const PathContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);

	const pathContext = getPathUtils(path, setPath);

	console.log('pathContext', pathContext);

	return (
		<PathContext.Provider value={pathContext}>
			{children}
		</PathContext.Provider>
	);
};
