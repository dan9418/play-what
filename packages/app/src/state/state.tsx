import { atom, selector } from 'recoil';
import { ICompleteModelDetails, IPod } from '../../../core/src/models/Model.constants';
import { NoteId, NOTE_PRESET_MAP } from '../../../core/src/models/Pod/Note/Note.constants';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import { VOICING } from '../../../core/src/models/PodList/Chord/Chord.constants';
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
            root: NOTE_PRESET_MAP.get(NoteId.F).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Ionian).value,
            viewerProps: {
                voicing: VOICING.CAGED_SCALE_IONIAN
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.G).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Dorian).value,
            viewerProps: {
                voicing: VOICING.CAGED_SCALE_DORIAN
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.A).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Phrygian).value,
            viewerProps: {
                voicing: VOICING.CAGED_SCALE_PHRYGIAN
            }
        }, {
            root: NOTE_PRESET_MAP.get(NoteId.C).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Mixolydian).value,
            viewerProps: {
                voicing: VOICING.CAGED_SCALE_MIXOLYDIAN
            }
        },
        {
            root: NOTE_PRESET_MAP.get(NoteId.D).value,
            intervals: SCALE_PRESET_MAP.get(ScaleId.Aeolian).value,
            viewerProps: {
                voicing: VOICING.CAGED_SCALE_AEOLIAN
            }
        }
    ]
});

export const dataIndexState = atom<number>({
    key: 'dataIndexState',
    default: undefined
});

export const rootState = selector<IPod | null>({
    key: 'rootState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        if (dataIndex === undefined) return;

        return dataList[dataIndex].root;
    }
});

export const intervalsState = selector<IPod[]>({
    key: 'intervalsState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        if (dataIndex === undefined) return;

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

        if (dataIndex === undefined) return;

        return dataList[dataIndex].viewerId || DEFAULT_VIEWER_ID;
    }
});

export const viewerPropsState = selector<IViewerProps>({
    key: 'viewerPropsState',
    get: ({ get }) => {
        const dataList = get(dataListState);
        const dataIndex = get(dataIndexState);

        if (dataIndex === undefined) return;

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
