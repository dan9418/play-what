import { Fragment } from 'react';
import { InputId } from '../../../../../core/src/models/Model.constants';
import DropdownInput from '../../../../../ui/src/inputs/DropdownInput';
import { IntervalsInput } from '../../../../../ui/src/inputs/IntervalsInput';
import NumericInput from '../../../../../ui/src/inputs/NumericInput';
import RangeInput from '../../../../../ui/src/inputs/RangeInput';
import { AccidentalInput, DegreeInput } from '../../../../../ui/src/inputs/RootInputs';
import SwitchInput from '../../../../../ui/src/inputs/SwitchInput';
import { IViewerInputConfig } from '../../../../../ui/src/viewers/Viewer.constants';


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
