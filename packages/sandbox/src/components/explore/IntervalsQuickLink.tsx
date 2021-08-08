import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ModelId } from '../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../core/src/models/Model.utils';
import { useModalContext } from '../../contexts/ModalContext';
import { intervalsDetailsState, intervalsState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import IntervalInput from './IntervalInput';
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
            <StyledIntervalsModal>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Intervals</th>
                            <th>Interpret As</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Before</th>
                            <td>{ModelUtils.getPreview(intervals, { podType: ModelId.Interval })}</td>
                            <td>Chord</td>
                            <td>{ModelUtils.getName(ModelId.Chord, intervals)}</td>
                        </tr>
                        <tr>
                            <th>After</th>
                            <td>{ModelUtils.getPreview(afterIntervals, { podType: ModelId.Interval })}</td>
                            <td>Chord</td>
                            <td>{ModelUtils.getName(ModelId.Chord, afterIntervals)}</td>
                        </tr>
                    </ tbody>
                </ table>
                <IntervalListInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
            </StyledIntervalsModal>
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
