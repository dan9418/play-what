import React from 'react';
import styled from 'styled-components';
import NoteUtils from '../../../core/src/models/Pod/Note/Note.utils';
import PodUtils from '../../../core/src/models/Pod/Pod.utils';
import InputRow from '../InputRow';


const StyledRootInput = styled.div`
    button {
        appearance: none;
        background-color: transparent;
        border: none;
        //background-color: ${({ theme }) => theme.surface.highlight};;
        //color: ${({ theme }) => theme.text.medium};
        font-weight: bold;

        //border: 1px solid #aaa;

        border-radius: 4px;
        padding: 8px;
        margin: 0 2px;

        /*&:first-child {
            border-radius: 4px 0 0 4px;
        }
        &:last-child {
            border-radius: 0 4px 4px 0;
        }*/
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

const RootInput = ({ root, setRoot }) => {
    const accidental = NoteUtils.getAccidentalOffset(root);
    const octave = PodUtils.getOctave(root);
    const degree = PodUtils.getDegree(root);

    const setAccidental = a => {
        const root = NoteUtils.createPod(degree, a, octave);
        setRoot(root);
    }

    const setOctave = o => {
        const root = NoteUtils.createPod(degree, accidental, o);
        setRoot(root);
    }

    const setDegree = d => {
        const root = NoteUtils.createPod(d, accidental, octave);
        setRoot(root);
    }

    return (
        <StyledRootInput>
            <InputRow label="Spelling">
                <RootButton value={degree} setValue={setDegree} buttonValue={0}>C</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={1}>D</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={2}>E</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={3}>F</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={4}>G</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={5}>A</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={6}>B</RootButton>
            </InputRow>
            <InputRow label="Accidental">
                <RootButton value={accidental} setValue={setAccidental} buttonValue={-2}>bb</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={-1}>b</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={0}>N</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={1}>#</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={2}>##</RootButton>
            </InputRow>
            <InputRow label="Octave">
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
            </InputRow>
        </StyledRootInput>
    );
}

export default RootInput;