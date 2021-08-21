import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { IPod } from '../../../../core/src/models/Model.constants';
import { ACCIDENTAL, ACCIDENTAL_VALUES } from '../../../../core/src/models/Pod/Note/Note.constants';
import NoteUtils from '../../../../core/src/models/Pod/Note/Note.utils';
import PodUtils from '../../../../core/src/models/Pod/Pod.utils';
import { DEGREE_PRESETS } from '../../../../core/src/theory/Degree.constants';
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
    const [root, setRoot] = useRecoilState(rootState);

    const modalContext = useModalContext();

    const beforeAccidental = NoteUtils.getAccidentalOffset(root);
    const beforeOctave = PodUtils.getOctave(root);
    const beforeDegree = PodUtils.getDegree(root);

    const [afterDegree, setAfterDegree] = useState(beforeDegree);
    const [afterAccidental, setAfterAccidental] = useState(beforeAccidental);
    const [afterOctave, setAfterOctave] = useState(beforeOctave);

    const afterDegreeText = DEGREE_PRESETS.find(x => x.value === afterDegree).name;
    const afterAccidentalText = ACCIDENTAL_VALUES.find(x => x.value === afterAccidental).symbol;

    const afterPod = NoteUtils.createPod(afterDegree, afterAccidental, afterOctave);

    return (
        <Modal title="Edit Root" onSubmit={() => setRoot(afterPod as IPod)} closeModal={modalContext.closeModal} >
            <StyledRootModal>
                <div className="sketchpad">
                    <ModalTitle title={`${afterDegreeText}${afterAccidentalText}${afterOctave}`} />

                    <div className="input-row">
                        <h3>Spelling</h3>
                        <div className="spelling">
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={0}>C</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={1}>D</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={2}>E</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={3}>F</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={4}>G</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={5}>A</RootButton>
                            <RootButton value={afterDegree} setValue={setAfterDegree} buttonValue={6}>B</RootButton>
                        </div>
                    </div>
                    <div className="input-row">
                        <h3>Accidental</h3>
                        <div className="accidental">
                            <RootButton value={afterAccidental} setValue={setAfterAccidental} buttonValue={-2}>bb</RootButton>
                            <RootButton value={afterAccidental} setValue={setAfterAccidental} buttonValue={-1}>b</RootButton>
                            <RootButton value={afterAccidental} setValue={setAfterAccidental} buttonValue={0}>N</RootButton>
                            <RootButton value={afterAccidental} setValue={setAfterAccidental} buttonValue={1}>#</RootButton>
                            <RootButton value={afterAccidental} setValue={setAfterAccidental} buttonValue={2}>x</RootButton>
                        </div>
                    </div>
                    <div className="input-row">
                        <h3>Octave</h3>
                        <div className="octave">
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={0}>0</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={1}>1</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={2}>2</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={3}>3</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={4}>4</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={5}>5</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={6}>6</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={7}>7</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={8}>8</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={9}>9</RootButton>
                            <RootButton value={afterOctave} setValue={setAfterOctave} buttonValue={10}>10</RootButton>
                        </div>
                    </div>
                </div>
                <DeltaTable beforePods={[root]} afterPods={[afterPod]} />
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
