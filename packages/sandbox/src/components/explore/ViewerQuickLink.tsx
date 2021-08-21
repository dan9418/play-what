import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from '../../../../viewers/src/viewer.constants';
import { useModalContext } from '../../contexts/ModalContext';
import { viewerState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import DropdownInput from '../shared/ui/inputs/DropdownInput';
import ModalTitle from './ModalTitle';
import QuickLink from './panels/QuickLink';

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

const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [viewerId, setViewerId] = useRecoilState(viewerState);

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId);

    console.log('dpb', viewerId);

    return (
        <QuickLink name="Viewer" preview={viewerConfig.name} modal={<ViewerModal viewerId={viewerId} setViewerId={setViewerId} />} />
    );
};

export default ViewerQuickLink;
