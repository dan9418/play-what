import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useModalContext } from '../../contexts/ModalContext';
import { rootDetailsState, rootState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import DeltaTable from './DeltaTable';
import QuickLink from './panels/QuickLink';

const StyledRootModal = styled.div`
    .sketchpad {
        background-color: #f5f5f5;

        padding: 8px;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            display: flex;
            align-items: center;
            justify-content: center;

            margin: 16px 0 8px;

            .spelling {
                font-size: 200%;
            }
            .accidental {
                align-self: flex-start;
                font-weight: 200;
            }
            .octave {
                align-self: flex-end;
                font-weight: 200;
                font-size: 80%;
                padding-bottom: 8px;
            }
        }

        h3 {
            margin-top: 8px;
            color: #555;
        }

        button {
            appearance: none;
            background-color: ${({ theme }) => theme.accent};
            color: white;
            font-weight: bold;

            border: 1px solid #aaa;
            margin: 4px;
            border-radius: 100%;

            width: 48px;
            height: 48px;

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

const RootModal = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);
    const [root, setRoot] = useRecoilState(rootState);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Root" onSubmit={() => setRoot([1, 2])} closeModal={modalContext.closeModal} >
            <StyledRootModal>
                <div className="sketchpad">
                    <h2>
                        <span className="spelling">C</span>
                        <span className="accidental">b</span>
                        <span className="octave">4</span>
                    </h2>
                    <h3>Spelling</h3>
                    <div className="spelling">
                        <button type="button">C</button>
                        <button type="button">D</button>
                        <button type="button">E</button>
                        <button type="button">F</button>
                        <button type="button">G</button>
                        <button type="button">A</button>
                        <button type="button">B</button>
                    </div>
                    <h3>Accidental</h3>
                    <div className="accidental">
                        <button type="button">bb</button>
                        <button type="button">b</button>
                        <button type="button">N</button>
                        <button type="button">#</button>
                        <button type="button">x</button>
                    </div>
                    <h3>Octave</h3>
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
                <DeltaTable before={rootDetails.name} after={rootDetails.name} />
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
