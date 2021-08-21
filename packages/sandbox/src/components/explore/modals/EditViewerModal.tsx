import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { VIEWER_PRESETS } from '../../../../../viewers/src/viewer.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState, viewerState } from '../../../state/state';
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
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerState);
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);
    // @ts-ignore
    const intervals = useRecoilValue(intervalsState);
    // @ts-ignore
    const root = useRecoilValue(rootState);

    const modalContext = useModalContext();

    const setValue = v => setAfterViewerId(v.id);
    const onSubmit = () => setBeforeViewerId(afterViewerId);

    return (
        <Modal title="Edit Root" onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledViewerModal>
                <ModalTitle title={`Fretboard`} />
                <InputRow label="Preset">
                    <DropdownInput value={{ id: afterViewerId }} setValue={setValue} options={VIEWER_PRESETS} />
                </InputRow>
                <InputRow label="Match Octave?">
                    <SwitchInput value={false} setValue={null} />
                </InputRow>
                <DeltaTable
                    beforeRoot={root}
                    afterRoot={root}
                    beforeIntervals={intervals}
                    afterIntervals={intervals}
                    beforeViewerId={beforeViewerId}
                    afterViewerId={afterViewerId}
                />
            </StyledViewerModal>
        </Modal>
    )
}


export default EditViewerModal
