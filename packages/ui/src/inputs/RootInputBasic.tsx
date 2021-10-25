
import React from "react";
import styled from 'styled-components';
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import NoteUtils from "../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../core/src/models/Pod/Pod.utils";
import ButtonInputRow from "./ButtonInputRow";
import NumericInput from "./NumericInput";
import SwitchInput from "./SwitchInput";

const StyledRootInputBasic = styled.div`

    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;

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
            <LabelledInput text="Root">
                <ButtonInputRow
                    value={root}
                    setValue={setRoot}
                    options={[
                        {
                            text: 'C',
                            value: 0
                        },
                        {
                            text: 'D',
                            value: 1
                        },
                        {
                            text: 'E',
                            value: 2
                        },
                        {
                            text: 'F',
                            value: 3
                        },
                        {
                            text: 'G',
                            value: 4
                        },
                        {
                            text: 'A',
                            value: 5
                        },
                        {
                            text: 'b',
                            value: 6
                        }
                    ]}
                />
            </LabelledInput >
            <LabelledInput text="Accidental">
                <ButtonInputRow
                    value={accidental}
                    setValue={setAccidental}
                    options={[
                        {
                            text: 'b',
                            value: -1
                        },
                        {
                            text: 'N',
                            value: 0
                        },
                        {
                            text: '#',
                            value: 1
                        }
                    ]}
                />
            </LabelledInput >

            <div className="match-octave">
                <SwitchInput value={false} setValue={null} />
            </div>

            <div className="octave">
                <NumericInput value={octave} setValue={setOctave} />
            </div>

        </StyledRootInputBasic >
    );
};

export default RootInputBasic;
