import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod } from '../../../../../core/src/models/Model.constants';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../viewers/src/viewer.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import THEME from '../../../styles/theme';
import { Modal } from '../../shared/core/Modal';
import HighlightBox from '../../shared/ui/HighlightBox';
import Viewer from '../Viewer';
import ModalSection from './ModalSection';
import PodTable from './PodTable';

const StyledEditModal = styled.div`
    display: flex;
    flex-direction: column;

    .divider {
        width: 100%;
        border-bottom: 1px solid ${THEME.border};

        @media(min-width: 1024px) {
                grid-column: 1 / span 2;
        }
    }

    .comparison {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
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

                <div className="comparison">
                    <div>
                        <h3>Before</h3>
                        <ModalSection title="Before" />
                        {!hideModels && (
                            <HighlightBox>
                                <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeModelDetails.notes.value} />
                            </HighlightBox>
                        )}
                        <Viewer details={beforeModelDetails} viewerDetails={beforeViewerDetails} />
                    </div>

                    <div>
                        <ModalSection title="After" />
                        {!hideModels && (
                            <HighlightBox >
                                <PodTable root={afterRoot} intervals={afterIntervals} notes={afterModelDetails.notes.value} />
                            </HighlightBox>
                        )}
                        <Viewer details={afterModelDetails} viewerDetails={afterViewerDetails} />
                    </div>
                </div>
            </StyledEditModal>
        </Modal>
    )
}

export default EditModal;
