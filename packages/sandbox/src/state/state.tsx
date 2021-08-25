import { atom, selector } from 'recoil';
import { ICompleteModelDetails, IPod } from '../../../core/src/models/Model.constants';
import { NoteId, NOTE_PRESET_MAP } from '../../../core/src/models/Pod/Note/Note.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import { ChordId, CHORD_PRESET_MAP } from '../../../core/src/models/PodList/Chord/Chord.constants';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';
import { ViewerId } from '../../../viewers/src/viewer.constants';


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

        return PodUtils.addPodList(root, intervals);
    }
});

export const detailsState = selector<ICompleteModelDetails>({
    key: 'detailsState',
    get: ({ get }) => {
        const root = get(rootState);
        const intervals = get(intervalsState);

        return PodListUtils.getDetails(root, intervals);
    }
});
