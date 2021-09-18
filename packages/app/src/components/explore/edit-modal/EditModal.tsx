import React, { useState } from 'react';
import { Modal } from '../../shared/core/Modal';
import { ModalSelector, TabId } from '../../shared/core/ModalSelector';
import IntervalsInputAdvanced from '@pw/ui/src/inputs/IntervalsInputAdvanced';
import RootInputAdvanced from '@pw/ui/src/inputs/RootInputAdvanced';
import ViewerInputAdvanced from '@pw/ui/src/inputs/ViewerInputAdvanced';
import useEditProps from '../../../hooks/useEditProps';

const MODAL_MAP = {
    [TabId.Root]: RootInputAdvanced,
    [TabId.Intervals]: IntervalsInputAdvanced,
    [TabId.Viewer]: ViewerInputAdvanced
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
