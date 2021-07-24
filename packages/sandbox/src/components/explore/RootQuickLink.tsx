import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useModalContext } from '../../contexts/ModalContext';
import { rootDetailsState, rootState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import QuickLink from './panels/QuickLink';

const StyledRootModal = styled.div`
    .sketchpad {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            background-color: ${({ theme }) => theme.light};
            border-radius: 4px;
            border: 0;
            padding: 4px;
            margin: 4px;
            font-size: 150%;
            cursor: pointer;
        }

        .spelling {
           
        }
    }
`;

const RootModal = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);
    const [root, setRoot] = useRecoilState(rootState);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Root" onSubmit={() => setRoot([1, 2])} closeModal={modalContext.closeModal} >
            <StyledRootModal>
                <h3>Before:</h3>
                <div>{rootDetails.name}</div>
                <div>{JSON.stringify(root)}</div>
                <h3>After:</h3>
                <div>{rootDetails.name}</div>
                <div>{JSON.stringify(root)}</div>
                <div className="sketchpad">
                    <div className="spelling">
                        <button type="button">C</button>
                        <button type="button">D</button>
                        <button type="button">E</button>
                        <button type="button">F</button>
                        <button type="button">G</button>
                        <button type="button">A</button>
                        <button type="button">B</button>
                    </div>
                    <div className="accidental">
                        <button type="button">bb</button>
                        <button type="button">b</button>
                        <button type="button">N</button>
                        <button type="button">#</button>
                        <button type="button">x</button>
                    </div>
                    <div className="octave">
                        <button type="button">0</button>
                        <button type="button">1</button>
                        <button type="button">2</button>
                        <button type="button">3</button>
                        <button type="button">4</button>
                        <button type="button">5</button>
                        <button type="button">6</button>
                        <button type="button">7</button>
                        <button type="button">8</button>
                        <button type="button">9</button>
                        <button type="button">10</button>
                    </div>
                </div>
            </StyledRootModal>
        </Modal>
    )
}

const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);

    return (
        <QuickLink name="Root" preview={rootDetails.name} modal={<RootModal />} />
    );
};

export default RootQuickLink;
