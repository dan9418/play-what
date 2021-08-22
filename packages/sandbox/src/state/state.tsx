import { atom, selector } from 'recoil';
import { IPod } from '../../../core/src/models/Model.constants';
import ModelUtils from '../../../core/src/models/Model.utils';
import { NoteId, NOTE_PRESET_MAP } from '../../../core/src/models/Pod/Note/Note.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import { ChordId, CHORD_PRESET_MAP } from '../../../core/src/models/PodList/Chord/Chord.constants';
import { ViewerId } from '../../../viewers/src/viewer.constants';

export interface IDetailsState<T> {
    value: T,
    name: string,
    preview: string
}

export const rootState = atom<IPod | null>({
    key: 'rootState',
    default: NOTE_PRESET_MAP.get(NoteId.C).value
});

export const intervalsState = atom<IPod[]>({
    key: 'intervalsState',
    default: CHORD_PRESET_MAP.get(ChordId.Maj7).value
});

export const viewerState = atom<any>({
    key: 'viewerState',
    default: ViewerId.Guitar
});

export const notesState = selector<IPod[]>({
    key: 'notesState',
    get: ({ get }) => {
        const root = get(rootState);
        const intervals = get(intervalsState);

        if (!root) return [];

        const notes = PodUtils.addPodList(root, intervals);

        return notes;
    }
});

export const rootDetailsState = selector<IDetailsState<IPod>>({
    key: 'rootDetailsState',
    get: ({ get }) => {
        const root = get(rootState);

        if (!root) return {
            value: null,
            name: '?',
            preview: '?'
        }

        return {
            value: root as IPod,
            name: ModelUtils.getNoteName(root),
            preview: ''
        }
    }
});

export const intervalsDetailsState = selector<IDetailsState<IPod[]>>({
    key: 'intervalsDetailsState',
    get: ({ get }) => {
        const intervals = get(intervalsState);

        return {
            value: intervals,
            name: 'intervals name',
            preview: 'intervals preview'
        }
    }
});

export const notesDetailsState = selector<IDetailsState<IPod[]>>({
    key: 'notesDetailsState',
    get: ({ get }) => {
        const rootDetails = get(rootDetailsState);
        const intervalsDetails = get(intervalsDetailsState);
        const notes = get(notesState);

        if (!rootDetails) return {
            value: null,
            name: '?',
            preview: '?'
        }

        return {
            value: notes,
            name: `${rootDetails.name} ${intervalsDetails.name}`,
            preview: 'notes preview'
        }
    }
});
