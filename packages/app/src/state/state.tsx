import { atom, selector } from 'recoil';
import { ICompleteModelDetails, IPod } from '../../../core/src/models/Model.constants';
import { NoteId, NOTE_PRESET_MAP } from '../../../core/src/models/Pod/Note/Note.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import { ChordId, CHORD_PRESET_MAP } from '../../../core/src/models/PodList/Chord/Chord.constants';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';
import { DEFAULT_VIEWER_ID, IViewerDetails, IViewerProps, ViewerId } from '../../../ui/src/viewers/Viewer.constants';
import viewerUtils from '../../../ui/src/viewers/Viewer.utils';

/* ROOT + INTERVALS + NOTES */

export const rootState = atom<IPod | null>({
    key: 'rootState',
    default: NOTE_PRESET_MAP.get(NoteId.C).value
});

export const intervalsState = atom<IPod[]>({
    key: 'intervalsState',
    default: CHORD_PRESET_MAP.get(ChordId.Dom7b9).value
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

/* VIEWER */

export const viewerIdState = atom<ViewerId>({
    key: 'viewerIdState',
    default: DEFAULT_VIEWER_ID
});

export const viewerPropsState = atom<IViewerProps>({
    key: 'viewerPropsState',
    default: {}
});

export const viewerDetailsState = selector<IViewerDetails>({
    key: 'viewerDetailsState',
    get: ({ get }) => {
        const viewerId = get(viewerIdState);
        const viewerProps = get(viewerPropsState);

        return viewerUtils.getDetails(viewerId, viewerProps);
    }
});
