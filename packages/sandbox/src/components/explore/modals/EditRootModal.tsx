import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod } from '../../../../../core/src/models/Model.constants';
import { useModalContext } from '../../../contexts/ModalContext';
import { rootState } from '../../../state/state';
import { Modal } from '../../shared/core/Modal';
import RootInput from '../../shared/inputs/RootInput';
import ModalTitle from '../../shared/ui/HighlightBox';
import DeltaTable from './DeltaTable';

const StyledRootModal = styled.div`
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

const EditRootModal = () => {

    // @ts-ignore
    const [beforeRoot, setBeforeRoot] = useRecoilState(rootState);
    const [afterRoot, setAfterRoot] = useState(beforeRoot);

    const modalContext = useModalContext();

    const before = (
        <>
            {JSON.stringify(beforeRoot)}
        </>
    );

    const after = (
        <>
            {JSON.stringify(afterRoot)}
        </>
    );

    return (
        <Modal title="Edit Root" onSubmit={() => setBeforeRoot(afterRoot as IPod)} closeModal={modalContext.closeModal} >
            <StyledRootModal>
                <ModalTitle title={`root`} />
                <RootInput root={afterRoot} setRoot={setAfterRoot} />
                <DeltaTable before={before} after={after} />
            </StyledRootModal>
        </Modal>
    )
}

export default EditRootModal;
