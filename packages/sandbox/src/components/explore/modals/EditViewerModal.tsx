import React from 'react';
import { Modal } from '../../shared/core/Modal';
import ViewerInput from '../../shared/inputs/ViewerInput';
import HighlightBox from '../../shared/ui/HighlightBox';
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
        <Modal
            title="Edit"
            {...editProps}
        >
            <ViewerAnalysisAdapter {...editProps} />
            <ViewerComparison {...editProps} always />
            <ViewerInputAdapter {...editProps} />
        </Modal>
    )
}


export default EditViewerModal
