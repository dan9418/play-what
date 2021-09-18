import { IPod } from './../../../core/src/models/Model.constants';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import viewerUtils from '../../../ui/src/viewers/Viewer.utils';
import { useModalContext } from '../contexts/ModalContext';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../state/state';
import PodListUtils from '../../../core/src/models/PodList/PodList.utils';

const useEditProps = ({
    _beforeRoot,
    _beforeIntervals,
    _afterRoot,
    _afterIntervals,
    _beforeViewerId,
    _beforeViewerProps,
    _afterViewerId,
    _afterViewerProps
} = {} as any) => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    // @ts-ignore
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerIdState);
    // @ts-ignore
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);
    // @ts-ignore
    const [beforeViewerProps, setBeforeViewerProps] = useRecoilState(viewerPropsState);
    // @ts-ignore
    const [afterViewerProps, setAfterViewerProps] = useState(beforeViewerProps);

    const modalContext = useModalContext();

    const onCancel = () => modalContext.closeModal();

    const onApply = () => {
        setBeforeRoot(afterRoot as IPod);
        setBeforeIntervals(afterIntervals as IPod[]);
        setBeforeViewerId(afterViewerId);
        setBeforeViewerProps(afterViewerProps);
    };

    const onDone = () => {
        onApply();
        onCancel();
    };

    const beforeModelDetails = PodListUtils.getDetails(_beforeRoot || beforeRoot, _beforeIntervals || beforeIntervals);
    const afterModelDetails = PodListUtils.getDetails(_afterRoot || afterRoot, _afterIntervals || afterIntervals);

    const beforeViewerDetails = viewerUtils.getDetails(_beforeViewerId || beforeViewerId, _beforeViewerProps || beforeViewerProps);
    const afterViewerDetails = viewerUtils.getDetails(_afterViewerId || afterViewerId, _afterViewerProps || afterViewerProps);

    const editProps = {
        beforeViewerId,
        setBeforeViewerId,
        afterViewerId,
        setAfterViewerId,
        beforeViewerProps,
        setBeforeViewerProps,
        afterViewerProps,
        setAfterViewerProps,
        beforeRoot,
        setBeforeRoot,
        afterRoot,
        setAfterRoot,
        beforeIntervals,
        setBeforeIntervals,
        afterIntervals,
        setAfterIntervals,
        beforeModelDetails,
        afterModelDetails,
        beforeViewerDetails,
        afterViewerDetails,
        onCancel,
        onApply,
        onDone
    };

    return editProps;
}

export default useEditProps;
