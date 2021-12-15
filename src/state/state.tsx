import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { StringParam, useQueryParam } from "use-query-params";
import { NoteId } from '../core/models/Model.constants';
import Note from '../core/models/Note';
import THEME from '../styles/theme';

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

export const useRootParam = (getPreset = false) => {

    const [rootParam, setRootParam] = useQueryParam("root", StringParam);
    const preset = rootParam ? new Note(rootParam as NoteId) : undefined;

    return [rootParam, setRootParam, preset]
}
