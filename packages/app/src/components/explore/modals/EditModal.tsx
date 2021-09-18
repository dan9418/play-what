import React, { useState } from 'react';
import { Modal } from '../../shared/core/Modal';
import { ModalSelector, TabId } from '../../shared/core/ModalSelector';
import EditIntervalsModal from './EditIntervalsModal';
import EditRootModal from './EditRootModal';
import EditViewerModal from './EditViewerModal';
import useEditProps from './useEditProps';

const MODAL_MAP = {
    [TabId.Root]: EditRootModal,
    [TabId.Intervals]: EditIntervalsModal,
    [TabId.Viewer]: EditViewerModal
}

const EditModal: React.FC = () => {
    const editProps = useEditProps();

    const [tabId, setTabId] = useState(TabId.Root);

    const Component = MODAL_MAP[tabId];

    return (
        <Modal
            title="Edit"
            {...editProps}
        >
            <ModalSelector tabId={tabId} setTabId={setTabId} />
            <Component />
        </Modal >
    );
}

export default EditModal;
