import React from 'react';
import styled from 'styled-components';
import { VIEWER_PRESETS, VIEWER_PRESET_MAP } from '../../../../../viewers/src/viewer.constants';
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

    const presetOptions = [
        { id: 'unselected', name: '---', props: {} },
        ...selectedViewerConfig.value.presets
    ];

    return (
        <StyledViewerInput>
            <InputRow label="Viewer">
                <DropdownInput
                    value={{ id: viewerId }}
                    setValue={setViewerId}
                    options={VIEWER_PRESETS}
                />
            </InputRow>
            <InputRow label="Preset">
                <DropdownInput
                    value={null}
                    setValue={x => _setViewerProps(x.props)}
                    options={presetOptions}
                />
            </InputRow>
            <ViewerInputManager viewerConfig={selectedViewerConfig} viewerProps={viewerProps} setViewerProps={_setViewerProps} />
        </StyledViewerInput>
    );
}

export default ViewerInput;
