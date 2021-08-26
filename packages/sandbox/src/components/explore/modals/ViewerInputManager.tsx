import React, { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import { InputId, IPreset } from '../../../../../core/src/models/Model.constants';
import { IViewer } from '../../../../../viewers/src/viewer.constants';
import SwitchInput from '../../shared/inputs/SwitchInput';
import InputRow from '../../shared/ui/InputRow';

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
        default:
            return Fragment;
    }
}

const ViewerInputManager: React.FC<IViewerInputManagerProps> = ({ viewerConfig, viewerProps, setViewerProps }) => {

    const inputs = viewerConfig.value.inputs;

    const inputRows: ReactNode[] = [];
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const { inputId, propId, propName, inputProps } = input;
        const Component = getViewerComponent(inputId);

        const setValue = newValue => {
            setViewerProps({
                ...viewerProps,
                [propId]: newValue
            });
        }

        inputRows.push(
            <InputRow label={propName}>
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
