import React from 'react';
import ViewerInput from '../../shared/inputs/ViewerInput';
import HighlightBox from '../../shared/ui/HighlightBox';
import EditModal from './EditModal';

const ViewerInputAdapter = ({ afterViewerId, setAfterViewerId, afterViewerProps, setAfterViewerProps }) =>
    <ViewerInput viewerId={afterViewerId} setViewerId={setAfterViewerId} viewerProps={afterViewerProps} setViewerProps={setAfterViewerProps} />

const ViewerAnalysisAdapter = ({ afterViewerDetails }) => {
    return (
        <HighlightBox title={afterViewerDetails.viewerName} />
    );
}

const EditViewerModal: React.FC<any> = () => {
    return (
        <EditModal
            modalTitle="Edit Viewer"
            InputComponent={ViewerInputAdapter}
            AnalysisComponent={ViewerAnalysisAdapter}
            hideModels
        />
    )
}


export default EditViewerModal
