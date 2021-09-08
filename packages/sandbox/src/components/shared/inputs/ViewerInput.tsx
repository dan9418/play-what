import React from 'react';
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
import ModalSection from '../../explore/modals/ModalSection';
import ViewerInputManager from '../../explore/modals/ViewerInputManager';
import InputRow from '../ui/InputRow';
import DropdownInput from './DropdownInput';

const StyledViewerInput = styled.div`

`;


const ViewerInput: React.FC<any> = ({ viewerId, setViewerId: _setViewerId, viewerProps, setViewerProps: _setViewerProps }) => {

    const selectedViewerConfig = VIEWER_PRESET_MAP.get(viewerId);

    const setViewerId = (config) => {
        _setViewerId(config.id);
        _setViewerProps(config.value.presets[0].id)
    }

    return (
        <>
            <ModalSection title="Select Viewer" />
            <InputRow label="Viewer">
                <DropdownInput
                    value={{ id: viewerId }}
                    setValue={setViewerId}
                    options={VIEWER_PRESETS}
                />
            </InputRow>
            <ModalSection title="Configure" />
            <ViewerInputManager viewerConfig={selectedViewerConfig} viewerProps={viewerProps} setViewerProps={_setViewerProps} />
        </>
    );
}

export default ViewerInput;
