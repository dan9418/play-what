import React, { useState } from 'react';
import styled from 'styled-components';
import { PresetTag, PRESET_TYPES } from '../../../../../core/src/models/Model.constants';
import MASTER_PRESETS from '../../../../../core/src/models/PodList/PodList.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/inputs/DropdownInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import InputRow from '../../shared/ui/InputRow';

const StyledImportPresetModal = styled.div`
   
`;

const ImportPresetModal = () => {
    const modalContext = useModalContext();

    const [presetType, _setPresetType] = useState(PresetTag.Chord);
    const presetTagSet = new Set();
    const presetOptions = MASTER_PRESETS.filter(preset => {
        if (preset.tags.includes(presetType)) {
            preset.tags.forEach(t => presetTagSet.add(t))
            return true;
        }
    });
    const subtypeOptions = [
        { id: 'unselected', name: '---' },
        ...Array.from(presetTagSet).map((v) => ({ name: v, id: v })).slice(1)
    ];

    const [presetSubtype, setPresetSubtype] = useState('unselected');
    const setPresetType = x => { _setPresetType(x); setPresetSubtype('unselected') }

    const [preset, setPreset] = useState(presetOptions[0]);
    const filteredPresetOptions = presetSubtype === 'unselected' ?
        presetOptions :
        presetOptions.filter(preset => preset.tags.includes(presetSubtype as any));

    return (
        <Modal title="Edit Root" onSubmit={null} closeModal={modalContext.closeModal} >
            <StyledImportPresetModal>
                <ModalTitle title={`Fretboard`} />
                <InputRow label="Type">
                    <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
                </InputRow>
                <InputRow label="Subtype">
                    <DropdownInput value={{ id: presetSubtype }} setValue={x => setPresetSubtype(x.id)} options={subtypeOptions} />
                </InputRow>
                <InputRow label="Preset">
                    <DropdownInput value={preset} setValue={setPreset} options={filteredPresetOptions} />
                </InputRow>
            </StyledImportPresetModal>
        </Modal>
    )
}


export default ImportPresetModal
