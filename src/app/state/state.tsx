import { atom } from 'recoil';
import { IPod } from '../../core/models/Model.constants';

export const rootState = atom<IPod | undefined>({
    key: 'rootState',
    default: undefined
});

export const intervalsState = atom<IPod[]>({
    key: 'intervalsState',
    default: []
});
