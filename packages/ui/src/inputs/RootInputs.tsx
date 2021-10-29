
import React from "react";
import { RootInputManager } from "../../../app/src/components/explore/edit-panel/InputManagers";
import { InputId } from "../../../core/src/models/Model.constants";
import NoteUtils from "../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../core/src/models/Pod/Pod.utils";
import ButtonInputRow from "./ButtonInputRow";

interface IInputProps {
    setValue: any;
    value: any;
}

export const DegreeInput: React.FC<IInputProps> = ({ value, setValue }) => {
    const degree = PodUtils.getDegree(value);
    const accidental = NoteUtils.getAccidentalOffset(value);
    const octave = PodUtils.getOctave(value);

    const setDegree = d => {
        const root = NoteUtils.createPod(d, accidental, octave);
        setValue(root);
    }

    return (
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
    );
};

export const AccidentalInput: React.FC<IInputProps> = ({ value, setValue }) => {
    const degree = PodUtils.getDegree(value);
    const accidental = NoteUtils.getAccidentalOffset(value);
    const octave = PodUtils.getOctave(value);

    const setAccidental = a => {
        const root = NoteUtils.createPod(degree, a, octave);
        setValue(root);
    }

    return (
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
    );
};


export const ROOT_INPUTS = [
    {
        propName: 'Degree',
        inputManager: RootInputManager,
        inputId: InputId.Degree
    },
    {
        propName: 'Accidental',
        inputManager: RootInputManager,
        inputId: InputId.Accidental
    }
];
