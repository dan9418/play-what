import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod } from '../../../../../core/src/models/Model.constants';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../viewers/src/viewer.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import ModalTitle from '../../shared/ui/HighlightBox';
import Viewer from '../Viewer';
import PodTable from './PodTable';

const StyledEditModal = styled.div`

`;

const EditModal: React.FC<any> = ({ modalTitle, InputComponent, ...rest }) => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    // @ts-ignore
    const [beforeViewerId, setBeforeViewerId] = useRecoilState(viewerIdState);
    // @ts-ignore
    const [afterViewerId, setAfterViewerId] = useState(beforeViewerId);
    // @ts-ignore
    const [beforeViewerProps, setBeforeViewerProps] = useRecoilState(viewerPropsState);
    // @ts-ignore
    const [afterViewerProps, setAfterViewerProps] = useState(beforeViewerProps);

    const modalContext = useModalContext();

    const onSubmit = () => {
        setBeforeRoot(afterRoot as IPod);
        setBeforeIntervals(afterIntervals as IPod[]);
        setBeforeViewerId(afterViewerId);
        setBeforeViewerProps(afterViewerProps);
    };

    const modalProps = {
        beforeViewerId,
        setBeforeViewerId,
        afterViewerId,
        setAfterViewerId,
        beforeViewerProps,
        setBeforeViewerProps,
        afterViewerProps,
        setAfterViewerProps,
        beforeRoot,
        setBeforeRoot,
        afterRoot,
        setAfterRoot,
        beforeIntervals,
        setBeforeIntervals,
        afterIntervals,
        setAfterIntervals,
        ...rest
    };

    const beforeModelDetails = PodListUtils.getDetails(modalProps.beforeRoot, modalProps.beforeIntervals);
    const afterModelDetails = PodListUtils.getDetails(modalProps.afterRoot, modalProps.afterIntervals);

    const beforeViewerDetails = viewerUtils.getDetails(modalProps.beforeViewerId, modalProps.beforeViewerProps);
    const afterViewerDetails = viewerUtils.getDetails(modalProps.afterViewerId, modalProps.afterViewerProps);

    return (
        <Modal title={modalTitle} onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledEditModal>
                <InputComponent {...modalProps} />
                <h3>Before</h3>
                <ModalTitle>
                    <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeModelDetails.notes.value} />
                </ModalTitle>
                <Viewer details={beforeModelDetails} viewerDetails={beforeViewerDetails} hideLabel />
                <h3>After</h3>
                <ModalTitle >
                    <PodTable root={afterRoot} intervals={afterIntervals} notes={afterModelDetails.notes.value} />
                </ModalTitle>
                <Viewer details={afterModelDetails} viewerDetails={afterViewerDetails} hideLabel />
            </StyledEditModal>
        </Modal>
    )
}

export default EditModal;
