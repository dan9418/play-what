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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;

    .fretboard {
        margin: 0;
    }

    h3 {
        text-align: center;
        text-transform: uppercase;
        color: #555;
        font-size: 140%;
        margin-bottom: 8px;
    }
`;

const EditModal: React.FC<any> = ({ modalTitle, InputComponent, AnalysisComponent, hideModels, ...rest }) => {

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

    const beforeModelDetails = PodListUtils.getDetails(rest.beforeRoot || beforeRoot, rest.beforeIntervals || beforeIntervals);
    const afterModelDetails = PodListUtils.getDetails(rest.afterRoot || afterRoot, rest.afterIntervals || afterIntervals);

    const beforeViewerDetails = viewerUtils.getDetails(rest.beforeViewerId || beforeViewerId, rest.beforeViewerProps || beforeViewerProps);
    const afterViewerDetails = viewerUtils.getDetails(rest.afterViewerId || afterViewerId, rest.afterViewerProps || afterViewerProps);

    const editProps = {
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
        beforeModelDetails,
        afterModelDetails,
        beforeViewerDetails,
        afterViewerDetails,
        ...rest
    };

    return (
        <Modal title={modalTitle} onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledEditModal>
                <AnalysisComponent {...editProps} />

                <InputComponent {...editProps} />

                <div>
                    <h3>Before</h3>
                    <Viewer details={beforeModelDetails} viewerDetails={beforeViewerDetails} hideLabel />
                </div>

                <div>
                    <h3>After</h3>
                    <Viewer details={afterModelDetails} viewerDetails={afterViewerDetails} hideLabel />
                </div>

                {!hideModels &&
                    <>
                        <ModalTitle>
                            <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeModelDetails.notes.value} />
                        </ModalTitle>
                        <ModalTitle >
                            <PodTable root={afterRoot} intervals={afterIntervals} notes={afterModelDetails.notes.value} />
                        </ModalTitle>
                    </>
                }
            </StyledEditModal>
        </Modal>
    )
}

export default EditModal;
