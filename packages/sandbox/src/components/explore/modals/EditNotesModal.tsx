import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod, PodType } from '../../../../../core/src/models/Model.constants';
import NoteUtils from '../../../../../core/src/models/Pod/Note/Note.utils';
import PodListUtils from '../../../../../core/src/models/PodList/PodList.utils';
import { useModalContext } from '../../../contexts/ModalContext';
import { intervalsState, rootState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import IntervalInput from '../../shared/inputs/IntervalInput';
import RootInput from '../../shared/inputs/RootInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import DeltaTable, { StyledDeltaTable } from './DeltaTable';

const StyledNotesModal = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;

    > :nth-child(5) {
        grid-column: 1 / span 2;
    }

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

const EditNotesModal: React.FC = () => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    // @ts-ignore
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    const modalContext = useModalContext();

    // @ts-ignore
    const [beforeIntervals, setBeforeIntervals] = useRecoilState(intervalsState);
    // @ts-ignore
    const [afterIntervals, setAfterIntervals] = useState(beforeIntervals);

    const rootTitle = NoteUtils.getName(afterRoot)
    const intervalsTitle = PodListUtils.getName(afterIntervals, PodType.Interval);
    const title = `${rootTitle} ${intervalsTitle}`;
    const preset = PodListUtils.findPreset(afterIntervals);

    const subtitle = preset ? preset.name : 'Unknown';

    const onSubmit = () => {
        setBeforeRoot(afterRoot as IPod);
        setBeforeIntervals(afterIntervals as IPod[]);
    };

    return (
        <Modal title="Edit Notes" onSubmit={onSubmit} closeModal={modalContext.closeModal} >
            <StyledNotesModal>
                <div className="header-box">
                    <h3>Root</h3>
                    <ModalTitle title={rootTitle} subtitle={subtitle} />
                </div>
                <div className="header-box">
                    <h3>Intervals</h3>
                    <ModalTitle title={intervalsTitle} subtitle={subtitle} />
                </div>
                <RootInput root={afterRoot} setRoot={setAfterRoot} />
                <IntervalInput intervals={afterIntervals} setIntervals={setAfterIntervals} />
                <div className="header-box">
                    <h3>Preview</h3>
                    <DeltaTable
                        beforeRoot={beforeRoot}
                        afterRoot={afterRoot}
                        beforeIntervals={beforeIntervals}
                        afterIntervals={afterIntervals}
                    />
                </div>
            </StyledNotesModal>
        </Modal>
    )
}

export default EditNotesModal;
