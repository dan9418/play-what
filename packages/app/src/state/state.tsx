import { atom, selector } from 'recoil';
import { ICompleteModelDetails, IPod } from '../../../core/src/models/Model.constants';
import { NoteId, NOTE_PRESET_MAP } from '../../../core/src/models/Pod/Note/Note.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';
import { ScaleId, SCALE_PRESET_MAP } from '../../../core/src/models/PodList/Scale/Scale.constants';
import { DEFAULT_VIEWER_ID, IViewerDetails, IViewerProps, ViewerId } from '../../../ui/src/viewers/Viewer.constants';
import viewerUtils from '../../../ui/src/viewers/Viewer.utils';

/* ROOT + INTERVALS + NOTES */

interface IDataItem {
    root: IPod,
    intervals: IPod[],
    viewerId?: ViewerId,
    viewerProps?: IViewerProps | any
}

export const dataListState = atom<IDataItem[]>({
    key: 'dataListState',
    default: [
        {
            root: NOTE_PRESET_MAP.get(NoteId.C).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Ionian).value,
            viewerProps: {
                voicing: { value: [[7, 1, 2], [5, 6], [2, 3, 4], [6, 7, 1], [3, 4, 5], [7, 1, 2]] }
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.D).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Dorian).value,
            viewerProps: {
                voicing: { value: [[1, 2, 3], [5, 6, 7], [2, 3, 4], [6, 7, 1], [4, 5], [1, 2, 3]] }
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.E).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Phrygian).value,
            viewerProps: {
                voicing: { value: [[1, 2, 3], [5, 6, 7], [3, 4], [7, 1, 2], [4, 5, 6], [1, 2, 3]] }
            }
        }, {
            root: NOTE_PRESET_MAP.get(NoteId.G).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Mixolydian).value,
            viewerProps: {
                voicing: { value: [[1, 2], [5, 6, 7], [2, 3, 4], [6, 7, 1], [3, 4, 5], [1, 2]] }
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.A).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Aeolian).value,
            viewerProps: {
                voicing: { value: [[1, 2, 3], [5, 6, 7], [2, 3, 4], [7, 1], [4, 5, 6], [1, 2, 3]] }
            }
        }
    ]
});

export const dataIndexState = atom<number>({
    key: 'dataIndexState',
    default: 0
});

export const rootState = selector<IPod | null>({
    key: 'rootState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        return dataList[dataIndex].root;
    }
});

export const intervalsState = selector<IPod[]>({
    key: 'intervalsState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        return dataList[dataIndex].intervals;
    }
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

export const viewerIdState = selector<ViewerId>({
    key: 'viewerIdState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        return dataList[dataIndex].viewerId || DEFAULT_VIEWER_ID;
    }
});

export const viewerPropsState = selector<IViewerProps>({
    key: 'viewerPropsState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        return dataList[dataIndex].viewerProps || {};
    }
});

export const viewerDetailsState = selector<IViewerDetails>({
    key: 'viewerDetailsState',
    get: ({ get }) => {
        const viewerId = get(viewerIdState);
        const viewerProps = get(viewerPropsState);

        return viewerUtils.getDetails(viewerId, viewerProps);
    }
});
