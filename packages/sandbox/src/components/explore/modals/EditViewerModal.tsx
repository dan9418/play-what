import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { viewerIdState, viewerPresetIdState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/inputs/DropdownInput';
import SwitchInput from '../../shared/inputs/SwitchInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import InputRow from '../../shared/ui/InputRow';
import DeltaTable from './DeltaTable';

const StyledViewerModal = styled.div`
   
`;

const EditViewerModal = () => {

    // @ts-ignore
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerIdState);
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);

    const [beforeViewerPresetId, setBeforeViewerPresetId] = useRecoilState(viewerPresetIdState);
    const [afterViewerPresetId, setAfterViewerPresetId] = useState(beforeViewerPresetId);

    const modalContext = useModalContext();

    const selectedViewerConfig = VIEWER_PRESET_MAP.get(afterViewerId);

    const setViewerId = (config) => {
        setAfterViewerId(config.id);
        setAfterViewerPresetId(config.value.presets[0].id)
    }

    const onSubmit = () => {
        setBeforeViewerId(afterViewerId);
        setBeforeViewerPresetId(selectedViewerConfig.value.presets[0].id)
    }

    const presetOptions = selectedViewerConfig.value.presets;

    return (
        <Modal title="Edit Root" onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledViewerModal>
                <ModalTitle title={`Fretboard`} />
                <InputRow label="Viewer">
                    <DropdownInput
                        value={{ id: afterViewerId }}
                        setValue={setViewerId}
                        options={VIEWER_PRESETS}
                    />
                </InputRow>
                <InputRow label="Preset">
                    <DropdownInput
                        value={{ id: afterViewerPresetId }}
                        setValue={x => setAfterViewerPresetId(x.id)}
                        options={presetOptions}
                    />
                </InputRow>
                <InputRow label="Match Octave?">
                    <SwitchInput value={false} setValue={null} />
                </InputRow>
                <DeltaTable
                    beforeViewerId={beforeViewerId}
                    afterViewerId={afterViewerId}
                    beforeViewerPresetId={beforeViewerPresetId}
                    afterViewerPresetId={afterViewerPresetId}
                />
            </StyledViewerModal>
        </Modal>
    )
}


export default EditViewerModal
