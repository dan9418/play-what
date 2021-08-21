import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import IntervalInput from '../../shared/inputs/IntervalInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import DeltaTable from './DeltaTable';

const EditIntervalsModal = () => {

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Intervals" onSubmit={() => setBeforeIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <ModalTitle title={PodListUtils.getName(afterIntervals)} />
            <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            <DeltaTable
                beforePods={beforeIntervals}
                afterPods={afterIntervals}
                isInterval
            />
        </Modal>
    );
}

export default EditIntervalsModal;
