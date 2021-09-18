import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import { InputId, IPreset } from '@pw/core/src/models/Model.constants';
import { IViewer } from '../../../../../viewers/src/Viewer.constants';
import DropdownInput from "@pw/ui/src/inputs/DropdownInput";
import NumericInput from '@pw/ui/src/inputs/NumericInput';
import RangeInput from '@pw/ui/src/inputs/RangeInput';
import SwitchInput from '@pw/ui/src/inputs/SwitchInput';
import InputRow from '@pw/ui/src/InputRow';

const StyledViewerInputManager = styled.div`
   
`;

interface IViewerInputManagerProps {
    viewerConfig: IPreset<IViewer>;
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

const ViewerInputManager: React.FC<IViewerInputManagerProps> = ({ viewerConfig, viewerProps, setViewerProps }) => {

    const inputs = viewerConfig.value.inputs;

    const inputRows: ReactNode[] = [];
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const { inputId, propId, propName, inputProps, useValueProperty } = input;
        const Component = getViewerComponent(inputId);

        const setValue = newValue => {
            setViewerProps({
                ...viewerProps,
                [propId]: useValueProperty ? newValue.value : newValue
            });
        }

        console.log('viewerProps', viewerProps);

        inputRows.push(
            <InputRow label={propName} key={propId}>
                <Component
                    value={viewerProps[propId]}
                    setValue={setValue}
                    {...inputProps}
                />
            </InputRow>
        )
    }

    return (
        <StyledViewerInputManager>
            {inputRows}
        </StyledViewerInputManager>
    );
}


export default ViewerInputManager
