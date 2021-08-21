import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import IntervalInput from '../../shared/inputs/IntervalInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import DeltaTable from './DeltaTable';

const EditIntervalsModal = () => {

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [root] = useRecoilState(rootState);
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Intervals" onSubmit={() => setBeforeIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <ModalTitle title={PodListUtils.getName(afterIntervals)} />
            <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            <DeltaTable
                beforeRoot={root}
                afterRoot={root}
                beforeIntervals={beforeIntervals}
                afterIntervals={afterIntervals}
                isInterval
            />
        </Modal>
    );
}

export default EditIntervalsModal;
