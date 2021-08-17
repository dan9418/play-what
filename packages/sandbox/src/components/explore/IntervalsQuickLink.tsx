import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useModalContext } from '../../contexts/ModalContext';
import { intervalsDetailsState, intervalsState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import IntervalListDelta from './IntervalListDelta';
import IntervalListInput from './IntervalListInput';
import QuickLink from './panels/QuickLink';

const StyledIntervalsModal = styled.div`
    table {
        text-align: left;
        border-collapse: collapse;
        width: 100%;
        td, th {
            padding: 4px;
        }
    }
`;

const IntervalsModal = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);
    const [intervals, setIntervals] = useRecoilState(intervalsState);

    const [afterIntervals, setAfterIntervals] = useState(intervals);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Intervals" onSubmit={() => setIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <IntervalListInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            <h3>Preview</h3>
            <IntervalListDelta intervals={intervals} afterIntervals={afterIntervals} />
        </Modal>
    )
}

const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.preview} modal={<IntervalsModal />} />
    );
};

export default IntervalsQuickLink;
