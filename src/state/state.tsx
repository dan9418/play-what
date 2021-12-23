import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import Note from '../core/models/Note';
import THEME from '../styles/theme';

export const rootState = atom<Note | undefined>({
    key: 'rootState',
    default: undefined
});

export const themeState = atom<typeof THEME>({
    key: 'themeState',
    default: THEME
});

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

export const useRootParam = () => {

    const [rootParam, setRootParam] = useQueryParam("root", StringParam);
    const [octaveParam, setOctaveParam] = useQueryParam("octave", NumberParam);
    const note = rootParam ? Note.fromId(rootParam, octaveParam) : undefined;

    return [rootParam, setRootParam, note]
}

export const useOctaveParam = () => useQueryParam("octave", NumberParam);
