import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IPod, PodType } from '../../../../../core/src/models/Model.constants';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import viewerUtils from '../../../../../viewers/src/viewer.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState, viewerIdState, viewerPropsState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import IntervalInput from '../../shared/inputs/IntervalInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import Viewer from '../Viewer';
import PodTable from './PodTable';

const StyledIntervalsModal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;

    .header-box {
        h3 {
            margin-bottom: 4px;
            margin-left: 4px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: ${({ theme }) => theme.medium};
        }
    }

    .sketchpad {
        //background-color: #f5f5f5;
        // border-radius: 4px;

        .input-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }

        button {
            appearance: none;
            background-color: efefef;
            color: ${({ theme }) => theme.medium};;
            font-weight: bold;

            border: 1px solid #aaa;

            &:first-child {
                border-radius: 4px 0 0 4px;
            }
            &:last-child {
                border-radius: 0 4px 4px 0;
            }
            &:active {
                background-color: ${({ theme }) => theme.active};
                
            }

            width: 32px;
            height: 32px;

            &:hover {
                cursor: pointer;
                background-color: ${({ theme }) => theme.active};
                color: white;
            }

            &.active {
                background-color: ${({ theme }) => theme.active};
                border-color: ${({ theme }) => theme.active};
                color: white;
                font-weight: bold;
            }
        }
    }
`;

const EditIntervalsModal: React.FC = () => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    // @ts-ignore
    const viewerId = useRecoilValue(viewerIdState);
    // @ts-ignore
    const viewerProps = useRecoilValue(viewerPropsState);

    const modalContext = useModalContext();

    const rootTitle = NoteUtils.getName(afterRoot)
    const intervalsTitle = PodListUtils.getName(afterIntervals, PodType.Interval);
    const preset = PodListUtils.findPreset(afterIntervals);

    const subtitle = preset ? preset.name : 'Unknown';

    const beforeDetails = PodListUtils.getDetails(beforeRoot, beforeIntervals);
    const afterDetails = PodListUtils.getDetails(afterRoot, afterIntervals);

    const viewerDetails = viewerUtils.getDetails(viewerId, viewerProps);

    const onSubmit = () => {
        setBeforeRoot(afterRoot as IPod);
        setBeforeIntervals(afterIntervals as IPod[]);
    };

    return (
        <Modal title="Edit Notes" onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledIntervalsModal>

                <div className="header-box">
                    <h3>Intervals</h3>
                    <ModalTitle title={intervalsTitle} subtitle={subtitle} />
                </div>

                <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />

                <div className="header-box">
                    <h3>Before</h3>
                    <ModalTitle>
                        <PodTable root={beforeRoot} intervals={beforeIntervals} notes={beforeDetails.notes.value} />
                    </ModalTitle>
                    <Viewer details={beforeDetails} viewerDetails={viewerDetails} hideLabel />
                </div>

                <div className="header-box">
                    <h3>After</h3>
                    <ModalTitle >
                        <PodTable root={afterRoot} intervals={afterIntervals} notes={afterDetails.notes.value} />
                    </ModalTitle>
                    <Viewer details={afterDetails} viewerDetails={viewerDetails} hideLabel />
                </div>

            </StyledIntervalsModal>
        </Modal>
    )
}

export default EditIntervalsModal;
