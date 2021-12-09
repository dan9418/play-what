import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { NOTE_PRESETS } from '../core/models/Note.constants';
import { useQueryParam, StringParam } from "use-query-params"

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

    if (getPreset) {
        return [];
        //return NOTE_PRESETS.find(p => p.id.toLowerCase() === rootParam.toLowerCase());
    }
    else {
        return [rootParam, setRootParam]
    }
}
