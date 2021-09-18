import React from 'react';
import ViewerInput from '../../../../../ui/src/inputs/ViewerInput';
import { HELP_PREVIEW } from '../../../utils/help';
import HighlightBox from '../../shared/ui/HighlightBox';
import ModalSection from './ModalSection';
import useEditProps from './useEditProps';
import ViewerComparison from './ViewerComparison';

const ViewerInputAdapter = ({ afterViewerId, setAfterViewerId, afterViewerDetails, setAfterViewerProps }) =>
    <ViewerInput viewerId={afterViewerId} setViewerId={setAfterViewerId} viewerProps={afterViewerDetails.props} setViewerProps={setAfterViewerProps} />

const ViewerAnalysisAdapter = ({ afterViewerDetails }) => {
    return (
        <HighlightBox title={afterViewerDetails.viewerName} />
    );
}

const EditViewerModal: React.FC<any> = () => {
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


export default EditViewerModal
