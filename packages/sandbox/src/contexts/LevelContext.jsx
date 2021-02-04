
import React, { createContext, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/state';

const LevelContext = createContext(null);

export const useLevelContext = () => useContext(LevelContext);

const getLevelUtils = (path, setPath) => {

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

export const LevelContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);

	const levelContext = getLevelUtils(path, setPath);

	console.log('levelContext', levelContext);

	return (
		<LevelContext.Provider value={levelContext}>
			{children}
		</LevelContext.Provider>
	);
};
