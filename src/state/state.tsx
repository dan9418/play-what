import { useEffect } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { IPod } from '../core/models/Model.constants';

export const rootState = atom<IPod | undefined>({
    key: 'rootState',
    default: undefined
});

export const intervalsState = atom<IPod[]>({
    key: 'intervalsState',
    default: []
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
    console.log('dpb history', history);

    const popAt = i => setHistory([...history.slice(0, i || 1)]);

    return [history, popAt];
}

export const useIntervalsPreset = (presets, id, isList = false) => {
    const setIntervals = useSetRecoilState(intervalsState);
    setIntervals([]);
    const preset = presets.find(p => p.id === id) || { value: [] };
    setIntervals(isList ? preset.value : [preset.value]);
    return preset;
}
