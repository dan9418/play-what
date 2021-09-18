import NoteUtils from "@pw/core/src/models/Pod/Note/Note.utils";
import PodUtils from "@pw/core/src/models/Pod/Pod.utils";
import React from "react";
import styled from 'styled-components';
import NumericInput from "./NumericInput";

const StyledRootInputBasic = styled.div`

    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 8px;

    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        appearance: none;
        background-color: ${({ theme }) => theme.surface.highlight};
        border: none;
        //background-color: ${({ theme }) => theme.surface.highlight};;
        //color: ${({ theme }) => theme.text.medium};
        font-weight: bold;

        border: 1px solid #aaa;

        //border-radius: 4px;
        padding: 8px;

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
            background-color: ${({ theme }) => theme.clickable};
            border-color: ${({ theme }) => theme.clickable};
            color: white;
        }

        &.active {
            background-color: ${({ theme }) => theme.active};
            border-color: ${({ theme }) => theme.active};
            color: white;
            font-weight: bold;
        }
    }
`;

const RootButton = ({ children, value, setValue, buttonValue }) => {
    const className = value === buttonValue ? 'active' : undefined;
    return (
        <button type="button" onClick={() => setValue(buttonValue)} className={className}>{children}</button>
    );
}

const RootInputBasic: React.FC<any> = editProps => {

    const { beforeRoot, setBeforeRoot } = editProps;

    const accidental = NoteUtils.getAccidentalOffset(beforeRoot);
    const octave = PodUtils.getOctave(beforeRoot);
    const degree = PodUtils.getDegree(beforeRoot);

    const setAccidental = a => {
        const afterRoot = NoteUtils.createPod(degree, a, octave);
        setBeforeRoot(afterRoot);
    }

    const setOctave = o => {
        const afterRoot = NoteUtils.createPod(degree, accidental, o);
        setBeforeRoot(afterRoot);
    }

    const setDegree = d => {
        const afterRoot = NoteUtils.createPod(d, accidental, octave);
        setBeforeRoot(afterRoot);
    }

    return (
        <StyledRootInputBasic>
            <div className="top">
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
            <div className="bottom">
                <div className="accidental">
                    <RootButton value={accidental} setValue={setAccidental} buttonValue={-1}>b</RootButton>
                    <RootButton value={accidental} setValue={setAccidental} buttonValue={0}>N</RootButton>
                    <RootButton value={accidental} setValue={setAccidental} buttonValue={1}>#</RootButton>
                </div>
                <div className="accidental">
                    <NumericInput value={octave} setValue={setOctave} />
                </div>
            </div>
        </StyledRootInputBasic>
    );
};

export default RootInputBasic;
