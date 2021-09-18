import React, { useState } from 'react';
import IntervalsInputAdvanced from '../../../../../ui/src/inputs/IntervalsInputAdvanced';
import RootInputAdvanced from '../../../../../ui/src/inputs/RootInputAdvanced';
import ViewerInputAdvanced from '../../../../../ui/src/inputs/ViewerInputAdvanced';
import useEditProps from '../../../hooks/useEditProps';
import { Modal } from '../../shared/modal/Modal';
import { ModalSelector, TabId } from './ModalSelector';


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
