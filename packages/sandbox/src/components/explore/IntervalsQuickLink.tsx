import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod, ModelId } from '../../../../core/src/models/Model.constants';
import ModelUtils from '../../../../core/src/models/Model.utils';
import { INTERVAL_PRESETS } from '../../../../core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import { useModalContext } from '../../contexts/ModalContext';
import { intervalsDetailsState, intervalsState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import DeltaTable from './DeltaTable';
import IntervalInput from './IntervalInput';
import IntervalSelector from './IntervalSelector';
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

const StyledTitle = styled.div`
    // border: 1px solid ${({ theme }) => theme.medium};
    /*background-color: #f5f5f5;

    padding: 8px;
    border-radius: 4px;

    margin-bottom: 16px;*/

    .ivl-name {
        text-align: center;
        margin-top: 16px;
        margin-bottom: 0;
    }
    .ivl-summary {
        text-align: center;
        margin-bottom: 24px;
        margin-top: 4px;
        font-style: italic;
        color: #555;
    }
    
`;

const IntervalsModal = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);
    const [intervals, setIntervals] = useRecoilState(intervalsState);

    const [afterIntervals, setAfterIntervals] = useState(intervals);

    const modalContext = useModalContext();

    const [selectedIvl, setSelectedIvl] = useState<IPod>(afterIntervals[0]);
    const selectedPreset = INTERVAL_PRESETS.find(ivl => PodUtils.areEqual(ivl.value, selectedIvl));

    const setIvl = newIvl => {
        const selectedIvlIndex = afterIntervals.findIndex(ivl => PodUtils.areEqual(ivl, selectedIvl));
        let copy = [];
        // copy = [...intervals, preset.value];
        // copy = [...intervals.slice(0, selectedIvlIndex), ...intervals.slice(selectedIvlIndex + 1)];
        copy = [...afterIntervals.slice(0, selectedIvlIndex), newIvl, ...afterIntervals.slice(selectedIvlIndex + 1)];
        setAfterIntervals(copy);
        setSelectedIvl(newIvl);
    };

    return (
        <Modal title="Edit Intervals" onSubmit={() => setIntervals(afterIntervals)} closeModal={modalContext.closeModal} >
            <StyledTitle>
                <h2 className="ivl-name">{selectedPreset.name}</h2>
                <div className="ivl-summary">p = {selectedIvl[0]}, d = {selectedIvl[1]}</div>
            </StyledTitle>
            <IntervalSelector intervals={afterIntervals} selectedIvl={selectedIvl} setSelectedIvl={setSelectedIvl} />
            <IntervalInput intervals={afterIntervals} ivl={selectedIvl} setIvl={setIvl} />
            <DeltaTable
                before={ModelUtils.getPreview(intervals, { podType: ModelId.Interval })}
                after={ModelUtils.getPreview(afterIntervals, { podType: ModelId.Interval })}
            />
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
