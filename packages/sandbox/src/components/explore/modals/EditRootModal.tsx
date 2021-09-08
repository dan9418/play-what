import React, { useState } from 'react';
import styled from 'styled-components';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import TuningUtils from '../../../../../core/src/tuning/Tuning.utils';
import { Modal } from '../../shared/core/Modal';
import RootInput from '../../shared/inputs/RootInput';
import RootInputPreset from '../../shared/inputs/RootInputPreset';
import { StyledHighlightBox } from '../../shared/ui/HighlightBox';
import ModalSection from './ModalSection';
import useEditProps from './useEditProps';

const StyledRootAnalysis = styled(StyledHighlightBox)`
    .top {
        display: flex;
        align-items: flex-end;
    }
    .base {
        font-weight: bold;
        font-size: 200%;
        padding: 4px;
    }
    .octave {
        margin-bottom: 2px;
    }
    .freq {
        margin-top: 4px;
        color: ${({ theme }) => theme.text.medium};
        font-style: italic;
    }
`;

const RootAnalysisAdapter = ({ afterModelDetails }) => {
    const root = afterModelDetails.root.value;
    const { spelling, accidental, octave } = NoteUtils.getNameParts(root);
    const base = `${spelling}${accidental}`;
    const freq = TuningUtils.getFrequency(root[0]);
    return (
        <StyledRootAnalysis>
            <div className="top">
                <div className="base">{base}</div>
                <div className="octave">{octave}</div>
            </div>
            <div className="freq">{`${freq} Hz`}</div>
        </ StyledRootAnalysis>
    );
}

const EditRootModal: React.FC = () => {
    const editProps = useEditProps();

    const [isAdvanced, setIsAdvanced] = useState(false);

    const buttonProps = isAdvanced ? {
        buttonText: 'Cancel',
        buttonAction: () => setIsAdvanced(false)
    } : {
        buttonText: 'Advanced',
        buttonAction: () => setIsAdvanced(true)
    };

    return (
        <Modal
            title="Edit Intervals"
            onClose={editProps.onCancel}
        >
            <RootAnalysisAdapter {...editProps} />
            <ModalSection title="Import Preset" {...buttonProps} />
            {isAdvanced ?
                <RootInput root={editProps.afterRoot} setRoot={editProps.setAfterRoot} />
                :
                <RootInputPreset root={editProps.afterRoot} setRoot={editProps.setAfterRoot} />
            }
        </Modal >
}

export default EditRootModal;
