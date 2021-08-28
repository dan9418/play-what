import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useModalContext } from '../../../contexts/ModalContext';
import { viewerIdState, viewerPropsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import ViewerInput from '../../shared/inputs/ViewerInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import DeltaTable from './DeltaTable';

const StyledViewerModal = styled.div`
   
`;

const EditViewerModal: React.FC<any> = () => {

    // @ts-ignore
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerIdState);
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);

    const [beforeViewerProps, setBeforeViewerProps] = useRecoilState(viewerPropsState);
    const [afterViewerProps, setAfterViewerProps] = useState(beforeViewerProps);

    const modalContext = useModalContext();

    const onSubmit = () => {
        setBeforeViewerId(afterViewerId);
        setBeforeViewerProps(afterViewerProps)
    }

    return (
        <Modal title="Edit Root" onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledViewerModal>
                <ModalTitle title={`Fretboard`} />
                <ViewerInput viewerId={afterViewerId} setViewerId={setAfterViewerId} viewerProps={afterViewerProps} setViewerProps={setAfterViewerProps} />
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
