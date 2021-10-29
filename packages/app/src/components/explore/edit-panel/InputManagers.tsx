import React, { Fragment } from "react";
import { InputId } from '../../../../../core/src/models/Model.constants';
import NoteUtils from "../../../../../core/src/models/Pod/Note/Note.utils";
import PodUtils from "../../../../../core/src/models/Pod/Pod.utils";
import ButtonInputRow from "../../../../../ui/src/inputs/ButtonInputRow";
import DropdownInput from '../../../../../ui/src/inputs/DropdownInput';
import { IntervalsInput } from '../../../../../ui/src/inputs/IntervalsInput';
import NumericInput from '../../../../../ui/src/inputs/NumericInput';
import RangeInput from '../../../../../ui/src/inputs/RangeInput';
import SwitchInput from '../../../../../ui/src/inputs/SwitchInput';
import { IViewerInputConfig } from '../../../../../ui/src/viewers/Viewer.constants';

interface IInputProps {
    setValue: any;
    value: any;
}

export const getInputComponent = (inputId: InputId): any => {
    switch (inputId) {
        case InputId.Switch:
            return SwitchInput;
        case InputId.Numeric:
            return NumericInput;
        case InputId.Range:
            return RangeInput;
        case InputId.Dropdown:
            return DropdownInput;
        case InputId.Degree:
            return DegreeInput;
        case InputId.Accidental:
            return AccidentalInput;
        case InputId.Intervals:
            return IntervalsInput;
        default:
            return Fragment;
    }
}

export const viewerPropsMapper = (editProps: any, input: IViewerInputConfig): any => {
    const { viewerProps, setViewerProps } = editProps;
    const { propId, inputProps, useValueProperty } = input;

    const value = viewerProps[propId];

    const setValue = newValue => {
        setViewerProps({
            ...viewerProps,
            [propId]: useValueProperty ? newValue.value : newValue
        });
    }

    return {
        value,
        setValue,
        ...(inputProps || {})
    }
}

export const rootMapper = (editProps: any, input: IViewerInputConfig): any => {
    const { root, setRoot } = editProps;
    const { inputProps } = input;

    return {
        value: root,
        setValue: setRoot,
        ...(inputProps || {})
    }
}


export const intervalsMapper = (editProps: any, input: IViewerInputConfig): any => {
    const { intervals, setIntervals } = editProps;
    const { inputProps } = input;

    return {
        value: intervals,
        setValue: setIntervals,
        ...(inputProps || {})
    }
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
        inputMapper: rootMapper,
        inputId: InputId.Degree
    },
    {
        propName: 'Accidental',
        inputMapper: rootMapper,
        inputId: InputId.Accidental
    }
];
