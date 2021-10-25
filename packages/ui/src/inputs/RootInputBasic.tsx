
import React from "react";
import styled from 'styled-components';
import NoteUtils from "../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../core/src/models/Pod/Pod.utils";
import NumericInput from "./NumericInput";
import SwitchInput from "./SwitchInput";

const StyledRootInputBasic = styled.div`

    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;

    label {
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
        letter-spacing: 1px;
        color: #555;
        margin-bottom: 4px;
        display: none;
    }

    .spelling, .accidental, .octave {
        
    }

    .spelling button, .accidental button {
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

    const { root, setRoot } = editProps;

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
        <StyledRootInputBasic>

            <div className="spelling">
                <RootButton value={degree} setValue={setDegree} buttonValue={0}>C</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={1}>D</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={2}>E</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={3}>F</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={4}>G</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={5}>A</RootButton>
                <RootButton value={degree} setValue={setDegree} buttonValue={6}>B</RootButton>
            </div>

            <div className="accidental">
                <RootButton value={accidental} setValue={setAccidental} buttonValue={-1}>b</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={0}>N</RootButton>
                <RootButton value={accidental} setValue={setAccidental} buttonValue={1}>#</RootButton>
            </div>

            <div className="match-octave">
                <SwitchInput value={false} setValue={null} />
            </div>

            <div className="octave">
                <NumericInput value={octave} setValue={setOctave} />
            </div>

        </StyledRootInputBasic>
    );
};

export default RootInputBasic;
