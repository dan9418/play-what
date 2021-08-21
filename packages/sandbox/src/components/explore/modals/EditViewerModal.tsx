import React from 'react';
import styled from 'styled-components';
import { VIEWER_PRESETS } from '../../../../../viewers/src/viewer.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/ui/DropdownInput';
import ModalTitle from './ModalTitle';

const StyledViewerModal = styled.div`
   
`;

const ViewerModal = ({ viewerId, setViewerId }) => {

    const modalContext = useModalContext();

    const setValue = v => setViewerId(v.id);

    return (
        <Modal title="Edit Root" onSubmit={null} closeModal={modalContext.closeModal} >
            <StyledViewerModal>
                <ModalTitle title={`Fretboard`} />
                <DropdownInput value={viewerId} setValue={setValue} options={VIEWER_PRESETS} />
            </StyledViewerModal>
        </Modal>
    )
}
