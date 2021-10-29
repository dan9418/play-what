import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import { InputId } from '../../../../../core/src/models/Model.constants';
import DropdownInput from '../../../../../ui/src/inputs/DropdownInput';
import NumericInput from '../../../../../ui/src/inputs/NumericInput';
import RangeInput from '../../../../../ui/src/inputs/RangeInput';
import SwitchInput from '../../../../../ui/src/inputs/SwitchInput';
import { IViewerInputConfig } from '../../../../../ui/src/viewers/Viewer.constants';
import LabelledInput from '../../shared/labelled-input/LabelledInput';



const StyledViewerInputManager = styled.div`
   
`;

interface IViewerInputManagerProps {
    inputs: IViewerInputConfig[];
    viewerProps: any;
    setViewerProps: Function;
}

const getViewerComponent = (inputId: InputId): any => {
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

const ViewerInputManager: React.FC<IViewerInputManagerProps> = ({ inputs, viewerProps, setViewerProps }) => {

    const inputRows: ReactNode[] = [];
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const { inputId, propId, propName, inputProps, useValueProperty } = input;
        const Component = getViewerComponent(inputId);

        if (!Component) continue;

        const setValue = newValue => {
            setViewerProps({
                ...viewerProps,
                [propId]: useValueProperty ? newValue.value : newValue
            });
        }

        inputRows.push(
            <LabelledInput text={propName}>
                <Component
                    value={viewerProps[propId]}
                    setValue={setValue}
                    {...inputProps}
                />
            </LabelledInput>
        )
    }

    return (
        <StyledViewerInputManager>
            {inputRows}
        </StyledViewerInputManager>
    );
}


export default ViewerInputManager
