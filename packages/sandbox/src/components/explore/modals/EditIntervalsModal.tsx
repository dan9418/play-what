import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PodType } from '../../../../../core/src/models/Model.constants';
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
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    const modalContext = useModalContext();

    const title = PodListUtils.getName(afterIntervals, PodType.Interval);
    const preset = PodListUtils.findPreset(afterIntervals);

    const subtitle = preset ? preset.name : 'Unknown';

    return (
        <Modal title="Edit Intervals" onSubmit={() => setBeforeIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <ModalTitle title={title} subtitle={subtitle} />
            <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            <DeltaTable
                beforeIntervals={beforeIntervals}
                afterIntervals={afterIntervals}
            />
        </Modal>
    );
}

export default EditIntervalsModal;
