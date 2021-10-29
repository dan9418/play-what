
import React from "react";
import styled from 'styled-components';
import LabelledInput from "../../../app/src/components/shared/labelled-input/LabelledInput";
import NoteUtils from "../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../core/src/models/Pod/Pod.utils";
import ButtonInputRow from "./ButtonInputRow";
import NumericInput from "./NumericInput";
import SwitchInput from "./SwitchInput";

const StyledRootInputBasic = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

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

            <LabelledInput text="Spelling">
                <ButtonInputRow
                    value={degree}
                    setValue={setDegree}
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
                            text: 'B',
                            value: 6
                        }
                    ]}
                />
            </LabelledInput>

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
            </LabelledInput>

            {false && <>
                <LabelledInput text="Match Octave">
                    <SwitchInput value={false} setValue={null} />
                </LabelledInput>

                <LabelledInput text="Octave">
                    <NumericInput value={octave} setValue={setOctave} />
                </LabelledInput>
            </>}

        </StyledRootInputBasic >
    );
};

export default RootInputBasic;
