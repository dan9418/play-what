import React, { useState } from 'react';
import styled from 'styled-components';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import TuningUtils from '../../../../../core/src/tuning/Tuning.utils';
import { HELP_PREVIEW, HELP_ROOT_EDIT } from '../../../utils/help';
import { Modal } from '../../shared/core/Modal';
import RootInput from '../../../../../viewers/src/inputs/RootInput';
import RootInputPreset from '../../../../../viewers/src/inputs/RootInputPreset';
import { StyledHighlightBox } from '../../shared/ui/HighlightBox';
import ModalSection from './ModalSection';
import useEditProps from './useEditProps';
import ViewerComparison from './ViewerComparison';

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
        buttonText: 'Basic',
        buttonAction: () => setIsAdvanced(false)
    } : {
        buttonText: 'Advanced',
        buttonAction: () => setIsAdvanced(true)
    };

    return (
        <Modal
            title="Edit"
            {...editProps}
        >
            <RootAnalysisAdapter {...editProps} />

            <ModalSection title="Edit Root" {...buttonProps} helpText={HELP_ROOT_EDIT}>
                {isAdvanced ?
                    <RootInput root={editProps.afterRoot} setRoot={editProps.setAfterRoot} />
                    :
                    <RootInputPreset root={editProps.afterRoot} setRoot={editProps.setAfterRoot} />
                }
            </ModalSection>
            <ModalSection title="Preview" helpText={HELP_PREVIEW}>
                <ViewerComparison {...editProps} />
            </ModalSection>
        </Modal >
    );
}

export default EditRootModal;
