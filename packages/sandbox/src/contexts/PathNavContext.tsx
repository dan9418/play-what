
import { useRecoilState, useRecoilValue } from 'recoil';
import { pathState, siblingsState } from '../state/pathState';
const React = require("react");

const PathNavContext = React.createContext(null);

export const usePathNavContext = () => React.useContext(PathNavContext);

const getPathNavContext = (path, setPath, siblings) => {

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

	const prev = siblings && siblings.prev
		? () => setPath([...path.slice(0, path.length - 1), siblings.prev])
		: null;

	const next = siblings && siblings.next
		? () => setPath([...path.slice(0, path.length - 1), siblings.next])
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

export const PathNavContextProvider = ({ children }) => {
	const [path, setPath] = useRecoilState(pathState);
	const siblings = useRecoilValue(siblingsState);

	const pathNavContext = getPathNavContext(path, setPath, siblings);

	return (
		<PathNavContext.Provider value={pathNavContext}>
			{children}
		</PathNavContext.Provider>
	);
};
