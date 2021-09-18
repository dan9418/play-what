
import React from 'react';
import styled from 'styled-components';
import ModalSection from '../../../app/src/components/shared/modal/ModalSection';
import useEditProps from '../../../app/src/hooks/useEditProps';
import ViewerComparison from '../../../app/src/components/explore/edit-modal/ViewerComparison';
import { HELP_PREVIEW, HELP_ROOT_EDIT } from '../../../app/src/utils/help';
import { StyledHighlightBox } from '../HighlightBox';
import RootInput from './RootInput';
import NoteUtils from '../../../core/src/models/Pod/Note/Note.utils';
import TuningUtils from '../../../core/src/tuning/Tuning.utils';

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
