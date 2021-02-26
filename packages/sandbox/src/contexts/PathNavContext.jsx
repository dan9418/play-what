
import React, { createContext, useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { pathState } from '../state/pathState';

const PathNavContext = createContext(null);

export const usePathNavContext = () => useContext(PathNavContext);

const getPathNavContext = (path, setPath) => {

	const pop = () => {
		setPath(path.slice(0, path.length - 1));
	}

	const popAt = n => {
		setPath(path.slice(0, n + 1));
	}

	const push = p => {
		setPath([...path, p]);
	};

	const reset = () => {
		setPath([]);
	}

	return {
		path,
		pop,
		popAt,
		push,
		reset
	}
}

export const PathNavContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);

	const pathNavContext = getPathNavContext(path, setPath);

	return (
		<PathNavContext.Provider value={pathNavContext}>
			{children}
		</PathNavContext.Provider>
	);
};
