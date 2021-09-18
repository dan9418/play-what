import React from 'react';
import styled from 'styled-components';
import NoteUtils from '@pw/core/src/models/Pod/Note/Note.utils';
import TuningUtils from '@pw/core/src/tuning/Tuning.utils';
import RootInput from '@pw/ui/src/inputs/RootInput';
import { HELP_PREVIEW, HELP_ROOT_EDIT } from '../../../utils/help';
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

const RootInputAdvanced: React.FC = () => {
    const editProps = useEditProps();

    return (
        <>
            <RootAnalysisAdapter {...editProps} />
            <ModalSection title="Edit Root" helpText={HELP_ROOT_EDIT}>
                <RootInput root={editProps.afterRoot} setRoot={editProps.setAfterRoot} />
            </ModalSection>
            <ModalSection title="Preview" helpText={HELP_PREVIEW}>
                <ViewerComparison {...editProps} />
            </ModalSection>
        </>
    );
}

export default RootInputAdvanced;
