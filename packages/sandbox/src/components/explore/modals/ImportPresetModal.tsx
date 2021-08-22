import React from 'react';
import styled from 'styled-components';
import MASTER_PRESETS from '../../../../../core/src/models/PodList/PodList.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/inputs/DropdownInput';
import SwitchInput from '../../shared/inputs/SwitchInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import InputRow from '../../shared/ui/InputRow';

const StyledImportPresetModal = styled.div`
   
`;

const ImportPresetModal = () => {
    const modalContext = useModalContext();
    return (
        <Modal title="Edit Root" onSubmit={null} closeModal={modalContext.closeModal} >
            <StyledImportPresetModal>
                <ModalTitle title={`Fretboard`} />
                <InputRow label="Type">
                    <DropdownInput value={{ id: '' }} setValue={null} options={MASTER_PRESETS} />
                </InputRow>
                <InputRow label="Subtype">
                    <SwitchInput value={false} setValue={null} />
                </InputRow>

            </StyledImportPresetModal>
        </Modal>
    )
}


export default ImportPresetModal
