import { useEffect } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { StringParam, useQueryParam } from 'use-query-params';
import { INTERVAL_PRESETS } from '../core/models/Pod/Interval/Interval.constants';
import { NOTE_PRESETS } from '../core/models/Pod/Note/Note.constants';
import { CHORD_PRESETS } from '../core/models/PodList/Chord/Chord.constants';
import { SCALE_PRESETS } from '../core/models/PodList/Scale/Scale.constants';


export const rootState = atom<any>({
    key: 'rootState',
    default: undefined
});

export const intervalsState = atom<any>({
    key: 'intervalsState',
    default: undefined
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

const useIntervalsPreset = (presets, id, isList = false) => {
    const setIntervals = useSetRecoilState(intervalsState);
    const preset = presets.find(p => p.id === id);

    if (!preset) throw new Error('invalid preset');

    setIntervals(preset);
    return preset;
}

export const useIntervalPreset = (id) => {
    return useIntervalsPreset(INTERVAL_PRESETS, id, false);
}

export const useChordPreset = (id) => {
    return useIntervalsPreset(CHORD_PRESETS, id, true);
}

export const useScalePreset = (id) => {
    return useIntervalsPreset(SCALE_PRESETS, id, true);
}

export const useRootParam = () => {
    const [root, setRoot] = useRecoilState(rootState);
    const [rootParam, setRootParam] = useQueryParam("root", StringParam);

    useEffect(() => {
        if (!rootParam) return;
        const note = NOTE_PRESETS.find(p => p.id.toLowerCase() === rootParam.toLowerCase());
        if (!note) throw new Error('Invalid root param');
        setRoot(note);
    }, [rootParam]);
}
