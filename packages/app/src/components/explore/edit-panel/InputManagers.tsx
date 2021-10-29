import React, { Fragment, ReactNode } from 'react';
import { InputId } from '../../../../../core/src/models/Model.constants';
import DropdownInput from '../../../../../ui/src/inputs/DropdownInput';
import NumericInput from '../../../../../ui/src/inputs/NumericInput';
import RangeInput from '../../../../../ui/src/inputs/RangeInput';
import SwitchInput from '../../../../../ui/src/inputs/SwitchInput';
import { IViewerInputConfig } from '../../../../../ui/src/viewers/Viewer.constants';
import useEditProps from '../../../hooks/useEditProps';
import LabelledInput from '../../shared/labelled-input/LabelledInput';

interface IInputManagerProps {
    input: IViewerInputConfig;
}

const getInputComponent = (inputId: InputId): any => {
    switch (inputId) {
        case InputId.Switch:
            return SwitchInput;
        case InputId.Numeric:
            return NumericInput;
        case InputId.Range:
            return RangeInput;
        case InputId.Dropdown:
            return DropdownInput;
        default:
            return Fragment;
    }
}

export const ViewerPropsInputManager: React.FC<IInputManagerProps> = ({ input }) => {
    const { viewerProps, setViewerProps } = useEditProps();

    const { inputId, propId, propName, inputProps, useValueProperty } = input;
    const Component = getInputComponent(inputId);

    if (!Component) return null;

    const setValue = newValue => {
        setViewerProps({
            ...viewerProps,
            [propId]: useValueProperty ? newValue.value : newValue
        });
    }

    return (
        <LabelledInput text={propName}>
            <Component
                value={viewerProps[propId]}
                setValue={setValue}
                {...inputProps}
            />
        </LabelledInput>
    );
}


export const RootInputManager: React.FC<IInputManagerProps> = ({ input }) => {
    const { root, setRoot } = useEditProps();

    const { inputId, propName, inputProps } = input;
    const Component = getInputComponent(inputId);

    if (!Component) return null;

    return (
        <LabelledInput text={propName}>
            <Component
                value={root}
                setValue={setRoot}
                {...inputProps}
            />
        </LabelledInput>
    );
}
