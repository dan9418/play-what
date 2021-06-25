
import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';

const PathNavContext = React.createContext(null);

interface IPathNavContext {
	path: number[];
	pop: () => void;
	popAt: (number) => void;
	push: (number) => void;
	reset: () => void;
	prev: () => void;
	next: () => void;
}

export const usePathNavContext = (): IPathNavContext => React.useContext(PathNavContext);

const getPathNavContext = (path, setPath, siblings): IPathNavContext => {

	const pop = () => {
		setPath(path.slice(0, path.length - 1));
	}

	const popAt = n => {
		setPath(path.slice(0, n + 1));
	}

	const push = p => {
		setPath([...path, ...p]);
	};

	const reset = () => {
		setPath([]);
	}

	const prev = siblings && siblings.prev
		? () => setPath([...path.slice(0, path.length - 1), siblings.prev.data.pathId])
		: null;

	const next = siblings && siblings.next
		? () => setPath([...path.slice(0, path.length - 1), siblings.next.data.pathId])
		: null;

	return {
		path,
		pop,
		popAt,
		push,
		reset,
		prev,
		next
	}
}

export const PathNavContextProvider: React.FC = ({ children }) => {
	const [path, setPath] = useRecoilState(null);
	const siblings = useRecoilValue(null);

	const pathNavContext = getPathNavContext(path, setPath, siblings);

	return (
		<PathNavContext.Provider value={pathNavContext}>
			{children}
		</PathNavContext.Provider>
	);
};
