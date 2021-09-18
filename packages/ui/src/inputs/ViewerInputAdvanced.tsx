import ViewerInput from '@pw/ui/src/inputs/ViewerInput';
import React from 'react';
import ModalSection from '../../../app/src/components/shared/modal/ModalSection';
import useEditProps from '../../../app/src/hooks/useEditProps';
import ViewerComparison from '../../../app/src/components/explore/edit-modal/ViewerComparison';
import HighlightBox from '../ui/HighlightBox';
import { HELP_PREVIEW } from '../../../app/src/utils/help';

const ViewerInputAdapter = ({ afterViewerId, setAfterViewerId, afterViewerDetails, setAfterViewerProps }) =>
    <ViewerInput viewerId={afterViewerId} setViewerId={setAfterViewerId} viewerProps={afterViewerDetails.props} setViewerProps={setAfterViewerProps} />

const ViewerAnalysisAdapter = ({ afterViewerDetails }) => {
    return (
        <HighlightBox title={afterViewerDetails.viewerName} />
    );
}

const ViewerInputAdvanced: React.FC<any> = () => {
    const editProps = useEditProps();

    return (
        <>
            <ViewerAnalysisAdapter {...editProps} />

            <ViewerInputAdapter {...editProps} />
            <ModalSection title="Preview" helpText={HELP_PREVIEW}>
                <ViewerComparison {...editProps} always />
            </ModalSection>
        </>
    )
}


export default ViewerInputAdvanced
