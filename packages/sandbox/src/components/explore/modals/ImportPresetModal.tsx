import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { PresetTag, PRESET_TYPES } from '../../../../../core/src/models/Model.constants';
import MASTER_PRESETS from '../../../../../core/src/models/PodList/PodList.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/inputs/DropdownInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import InputRow from '../../shared/ui/InputRow';
import DeltaTable from './DeltaTable';

const StyledImportPresetModal = styled.div`
   
`;

const ImportPresetModal = () => {
    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);

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

    const [preset, setPreset] = useState(presetOptions[0]);
    const filteredPresetOptions = presetSubtype === 'unselected' ?
        presetOptions :
        presetOptions.filter(preset => preset.tags.includes(presetSubtype as any));

    const setPresetType = x => {
        _setPresetType(x);
        setPresetSubtype('unselected');
        setPreset(MASTER_PRESETS.find(y => y.tags.includes(x)));
    }

    return (
        <Modal title="Import Preset" onSubmit={() => setBeforeIntervals(preset.value)} closeModal={modalContext.closeModal} >
            <StyledImportPresetModal>
                <ModalTitle title={preset.name} />
                <InputRow label="Type">
                    <DropdownInput value={{ id: presetType }} setValue={x => setPresetType(x.id)} options={PRESET_TYPES} />
                </InputRow>
                <InputRow label="Filter">
                    <DropdownInput value={{ id: presetSubtype }} setValue={x => setPresetSubtype(x.id)} options={subtypeOptions} />
                </InputRow>
                <InputRow label="Preset">
                    <DropdownInput value={preset} setValue={setPreset} options={filteredPresetOptions} />
                </InputRow>
                <DeltaTable
                    beforeRoot={undefined}
                    afterRoot={undefined}
                    beforeIntervals={beforeIntervals}
                    afterIntervals={preset.value}
                />
            </StyledImportPresetModal>
        </Modal>
    )
}


export default ImportPresetModal
