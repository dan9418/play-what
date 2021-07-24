import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useModalContext } from '../../contexts/ModalContext';
import { intervalsDetailsState, intervalsState, intervalsDetailsState, intervalsState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import QuickLink from './panels/QuickLink';

const StyledIntervalsModal = styled.div`
    .sketchpad {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        button {
            background-color: ${({ theme }) => theme.light};
            border-radius: 4px;
            border: 0;
            padding: 4px;
            margin: 4px;
            font-size: 150%;
            cursor: pointer;
        }

        
    }
`;

const IntervalsModal = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);
    const [intervals, setIntervals] = useRecoilState(intervalsState);

    const modalContext = useModalContext();

    return (
        <Modal title="Edit Intervals" onSubmit={() => setIntervals([[1, 2]])} closeModal={modalContext.closeModal} >
            <StyledIntervalsModal>
                <h3>Before:</h3>
                <div>{intervalsDetails.name}</div>
                <div>{JSON.stringify(intervals)}</div>
                <h3>After:</h3>
                <div>{intervalsDetails.name}</div>
                <div>{JSON.stringify(intervals)}</div>
                <div className="sketchpad">

                    <div />
                    <div />
                    <div />
                    <button type="button">A2</button>
                    <button type="button">A3</button>
                    <button type="button">A4</button>
                    <div />
                    <button type="button">A5</button>
                    <div />
                    <button type="button">A6</button>
                    <div />
                    <div />

                    <button type="button">P1</button>
                    <button type="button">m2</button>
                    <button type="button">M2</button>
                    <button type="button">M3</button>
                    <button type="button">P4</button>
                    <div />
                    <button type="button">P5</button>
                    <button type="button">m6</button>
                    <button type="button">M6</button>
                    <button type="button">m7</button>
                    <button type="button">M7</button>

                    <div />
                    <div />
                    <div />
                    <button type="button">d3</button>
                    <button type="button">d4</button>
                    <div />
                    <button type="button">d5</button>
                    <button type="button">d6</button>
                    <div />
                    <button type="button">d7</button>
                    <div />
                </div>
            </StyledIntervalsModal>
        </Modal>
    )
}

const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.preview} modal={<IntervalsModal />} />
    );
};

export default IntervalsQuickLink;
