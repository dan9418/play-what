import { atom, useSetRecoilState } from 'recoil';
import { IPod } from '../core/models/Model.constants';

export const rootState = atom<IPod | undefined>({
    key: 'rootState',
    default: undefined
});

export const intervalsState = atom<IPod[]>({
    key: 'intervalsState',
    default: []
});

export const useIntervalsPreset = (presets, id, isList = false) => {
    const setIntervals = useSetRecoilState(intervalsState);
    //setIntervals([]);
    const preset = presets.find(p => p.id === id) || { value: [] };
    console.log('xxx', preset.value);
    setIntervals(isList ? preset.value : [preset.value]);
    return preset;
}
