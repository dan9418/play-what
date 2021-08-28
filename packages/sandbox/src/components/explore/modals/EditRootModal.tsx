import React from 'react';
import RootInput from '../../shared/inputs/RootInput';
import HighlightBox from '../../shared/ui/HighlightBox';
import EditModal from './EditModal';

const RootInputAdapter = ({ afterRoot, setAfterRoot }) => <RootInput root={afterRoot} setRoot={setAfterRoot} />

const RootAnalysisAdapter = ({ afterModelDetails }) => {
    return (
        <HighlightBox title={afterModelDetails.root.name} />
    );
}

const EditRootModal: React.FC = () => {
    return (
        <EditModal
            modalTitle="Edit Root"
            InputComponent={RootInputAdapter}
            AnalysisComponent={RootAnalysisAdapter}
        />
    )
}

export default EditRootModal;
