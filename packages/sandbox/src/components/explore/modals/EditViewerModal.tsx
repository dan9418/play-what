import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { viewerIdState, viewerPropsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import DropdownInput from '../../shared/inputs/DropdownInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import InputRow from '../../shared/ui/InputRow';
import DeltaTable from './DeltaTable';
import ViewerInputManager from './ViewerInputManager';

const StyledViewerModal = styled.div`
   
`;

const EditViewerModal: React.FC<any> = () => {

    // @ts-ignore
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerIdState);
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);

    const [beforeViewerProps, setBeforeViewerProps] = useRecoilState(viewerPropsState);
    const [afterViewerProps, setAfterViewerProps] = useState(beforeViewerProps);

    const modalContext = useModalContext();

    const selectedViewerConfig = VIEWER_PRESET_MAP.get(afterViewerId);

    const setViewerId = (config) => {
        setAfterViewerId(config.id);
        setAfterViewerProps(config.value.presets[0].id)
    }

    const onSubmit = () => {
        setBeforeViewerId(afterViewerId);
        setBeforeViewerProps(afterViewerProps)
    }

    const presetOptions = [
        { id: 'unselected', name: '---', props: {} },
        ...selectedViewerConfig.value.presets
    ];

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
                        value={{ id: afterViewerProps }}
                        setValue={x => setAfterViewerProps(x.props)}
                        options={presetOptions}
                    />
                </InputRow>
                <ViewerInputManager viewerConfig={selectedViewerConfig} viewerProps={afterViewerProps} setViewerProps={setAfterViewerProps} />
                <DeltaTable
                    beforeViewerId={beforeViewerId}
                    afterViewerId={afterViewerId}
                    beforeViewerProps={beforeViewerProps}
                    afterViewerProps={afterViewerProps}
                />
            </StyledViewerModal>
        </Modal>
    )
}


export default EditViewerModal
