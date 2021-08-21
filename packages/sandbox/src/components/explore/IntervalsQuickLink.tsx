import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import PodListUtils from '../../../../core/src/models/PodList/PodList.utils';
import { useModalContext } from '../../contexts/ModalContext';
import { intervalsDetailsState, intervalsState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import DeltaTable from './DeltaTable';
import IntervalInput from './IntervalInput';
import ModalTitle from './ModalTitle';
import QuickLink from './panels/QuickLink';

const IntervalsModal = () => {

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Intervals" onSubmit={() => setBeforeIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <ModalTitle title={PodListUtils.getName(afterIntervals)} subtitle={JSON.stringify(afterIntervals)} />
            <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            <DeltaTable
                beforePods={beforeIntervals}
                afterPods={afterIntervals}
            />
        </Modal>
    );
}

const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.preview} modal={<IntervalsModal />} />
    );
};

export default IntervalsQuickLink;
