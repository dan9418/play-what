import { useRecoilState } from 'recoil';
import { dataIndexState, dataListState } from '../state/state';
import { getListHelpers } from '../utils/getListHelpers';

const useEditNotesProps = () => {

    // @ts-ignore
    const [dataList, setDataList] = useRecoilState(dataListState);
    // @ts-ignore
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

    if (dataIndex === undefined) return;

    const dataItem = dataList[dataIndex];
    const root = dataItem.root;
    const intervals = dataItem.intervals;

    const listHelpers = getListHelpers(dataList, setDataList, dataIndex);

    const setRoot = x => listHelpers.setData({ ...dataItem, root: x })
    const setIntervals = x => listHelpers.setData({ ...dataItem, intervals: x })

    return {
        root,
        setRoot,
        intervals,
        setIntervals
    };
}

const useEditViewerProps = () => {

    // @ts-ignore
    const [dataList, setDataList] = useRecoilState(dataListState);
    // @ts-ignore
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

    if (dataIndex === undefined) return;

    const dataItem = dataList[dataIndex];
    const viewerId = dataItem.viewerId;
    const viewerProps = dataItem.viewerProps;

    const listHelpers = getListHelpers(dataList, setDataList, dataIndex);

    const setViewerId = x => listHelpers.setData({ ...dataItem, viewerId: x })
    const setViewerProps = x => listHelpers.setData({ ...dataItem, viewerProps: x })

    return {
        viewerId,
        setViewerId,
        viewerProps,
        setViewerProps
    };
}


const useEditProps = () => {
    // @ts-ignore
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);
    if (dataIndex === undefined) return;

    const editNotesProps = useEditNotesProps();
    const editViewerProps = useEditViewerProps();


    const editProps = {
        ...editViewerProps,
        ...editNotesProps
    };

    return editProps;
}

export default useEditProps;
