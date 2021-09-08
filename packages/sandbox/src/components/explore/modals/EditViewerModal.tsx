import React from 'react';
import { Modal } from '../../shared/core/Modal';
import ViewerInput from '../../shared/inputs/ViewerInput';
import HighlightBox from '../../shared/ui/HighlightBox';

const ViewerInputAdapter = ({ afterViewerId, setAfterViewerId, afterViewerDetails, viewerProps, setAfterViewerProps }) =>
    <ViewerInput viewerId={afterViewerId} setViewerId={setAfterViewerId} viewerProps={afterViewerDetails.props} setViewerProps={setAfterViewerProps} />

const ViewerAnalysisAdapter = ({ afterViewerDetails }) => {
    return (
        <HighlightBox title={afterViewerDetails.viewerName} />
    );
}

const EditViewerModal: React.FC<any> = () => {
    return (
        <Modal
            title="Edit Viewer"
            hideModels
        >
            {/*
                ViewerInputAdapter
                ViewerAnalysisAdapter
            */}
        </Modal>
    )
}


export default EditViewerModal
