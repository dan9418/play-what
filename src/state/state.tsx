import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

interface IHistoryEntry {
    id: string;
    name: string;
    path: string;
}

export const historyState = atom<IHistoryEntry[]>({
    key: 'historyState',
    default: [{
        id: 'index',
        name: 'Home',
        path: '/'
    }]
});

export const useHistory = (id: string, name: string, path: string): [any, any] => {
    const [history, setHistory] = useRecoilState(historyState);
    useEffect(() => {
        setHistory([
            ...history,
            {
                id,
                name,
                path
            }
        ]);
    }, []);
    console.log('pw-history', history);

    const popAt = i => setHistory([...history.slice(0, i || 1)]);

    return [history, popAt];
}

/*export const useRootParam = () => {
    const [root, setRoot] = useRecoilState(rootState);
    const [rootParam, setRootParam] = useQueryParam("root", StringParam);

    useEffect(() => {
        if (!rootParam) return;
        const note = NOTE_PRESETS.find(p => p.id.toLowerCase() === rootParam.toLowerCase());
        if (!note) throw new Error('Invalid root param');
        setRoot(note);
    }, [rootParam]);
}*/
