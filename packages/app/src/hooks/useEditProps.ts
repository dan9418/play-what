import { useRecoilState } from 'recoil';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';
import { useModalContext } from '../contexts/ModalContext';
import { dataIndexState, dataListState, viewerIdState, viewerPropsState } from '../state/state';
import { IPod } from './../../../core/src/models/Model.constants';
import { getListHelpers } from './../utils/getListHelpers';

const useEditSelectedProps = () => {

    // @ts-ignore
    const [dataList, setDataList] = useRecoilState(dataListState);
    // @ts-ignore
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

    const dataItem = dataList[dataIndex];
    const root = dataItem.root;
    const intervals = dataItem.intervals;

    const listHelpers = getListHelpers(dataList, setDataList, dataIndex);

    const setRoot = x => listHelpers.setData({ root: x, intervals })
    const setIntervals = x => listHelpers.setData({ root, intervals: x })

    const editSelectedProps = {
        root,
        setRoot,
        intervals,
        setIntervals
    };

    return editSelectedProps;
}

const useEditProps = () => {

    const { root, setRoot, intervals, setIntervals } = useEditSelectedProps();

    // @ts-ignore
    const [viewerId, setViewerId] = useRecoilState(viewerIdState);
    // @ts-ignore
    const [viewerProps, setViewerProps] = useRecoilState(viewerPropsState);

    const modalContext = useModalContext();
    const onCancel = () => modalContext.closeModal();

    const onApply = () => {
        setRoot(root as IPod);
        setIntervals(intervals as IPod[]);
        setViewerId(viewerId);
        setViewerProps(viewerProps);
    };

    const onDone = () => {
        onApply();
        onCancel();
    };

    const modelDetails = PodListUtils.getDetails(root, intervals);

    const editProps = {
        viewerId,
        setViewerId,
        viewerProps,
        setViewerProps,
        root,
        setRoot,
        intervals,
        setIntervals,
        modelDetails,
        onCancel,
        onApply,
        onDone
    };

    return editProps;
}

export default useEditProps;
