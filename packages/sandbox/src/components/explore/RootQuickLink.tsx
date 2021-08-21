import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import NoteUtils from '../../../../core/src/models/Pod/Note/Note.utils';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import { useModalContext } from '../../contexts/ModalContext';
import { rootDetailsState, rootState } from '../../state/state';
import { Modal } from '../shared/core/Modal';
import DeltaTable from './DeltaTable';
import ModalTitle from './ModalTitle';
import QuickLink from './panels/QuickLink';

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

        h2 {
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
            color: #555;
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

const RootButton = ({ children, value, setValue, buttonValue }) => {
    const className = value === buttonValue ? 'active' : undefined;
    return (
        <button type="button" onClick={() => setValue(buttonValue)} className={className}>{children}</button>
    );
}

const RootModal = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);
    const [root, setRoot] = useRecoilState(rootState);

    const modalContext = useModalContext();

    const pitchClass = PodUtils.getPitchClass(root);
    const accidental = NoteUtils.getAccidentalOffset(root);
    const octave = PodUtils.getOctave(root);
    const degree = PodUtils.getDegree(root);

    let setDegree;
    let setOctave;
    let setAccidental;

    console.log('dpb root', pitchClass, octave, degree);

    return (
        <Modal title="Edit Root" onSubmit={() => setRoot([1, 2])} closeModal={modalContext.closeModal} >
            <StyledRootModal>
                <div className="sketchpad">
                    <ModalTitle title={(
                        <>
                            <span className="spelling">C</span>
                            <span className="accidental">b</span>
                            <span className="octave">4</span>
                        </>
                    )} subtitle={`[${pitchClass}, ${degree}]`} />

                    <div className="input-row">
                        <h3>Spelling</h3>
                        <div className="spelling">
                            <RootButton value={degree} setValue={setDegree} buttonValue={0}>C</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={1}>D</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={2}>E</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={3}>F</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={4}>G</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={5}>A</RootButton>
                            <RootButton value={degree} setValue={setDegree} buttonValue={6}>B</RootButton>
                        </div>
                    </div>
                    <div className="input-row">
                        <h3>Accidental</h3>
                        <div className="accidental">
                            <RootButton value={accidental} setValue={setAccidental} buttonValue={-2}>bb</RootButton>
                            <RootButton value={accidental} setValue={setAccidental} buttonValue={-1}>b</RootButton>
                            <RootButton value={accidental} setValue={setAccidental} buttonValue={0}>N</RootButton>
                            <RootButton value={accidental} setValue={setAccidental} buttonValue={1}>#</RootButton>
                            <RootButton value={accidental} setValue={setAccidental} buttonValue={2}>x</RootButton>
                        </div>
                    </div>
                    <div className="input-row">
                        <h3>Octave</h3>
                        <div className="octave">
                            <RootButton value={octave} setValue={setOctave} buttonValue={0}>0</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={1}>1</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={2}>2</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={3}>3</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={4}>4</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={5}>5</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={6}>6</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={7}>7</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={8}>8</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={9}>9</RootButton>
                            <RootButton value={octave} setValue={setOctave} buttonValue={10}>10</RootButton>
                        </div>
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
