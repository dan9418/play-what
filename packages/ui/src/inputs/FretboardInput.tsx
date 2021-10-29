import React from "react";
import styled from 'styled-components';
import ViewerInputManager from "../../../app/src/components/explore/edit-panel/ViewerInputManager";
import { ViewerId, VIEWER_PRESET_MAP } from "../viewers/Viewer.constants";

const StyledFretboardInput = styled.div`

`;

const FretboardInput: React.FC<any> = editProps => {

    const { viewerProps, setViewerProps } = editProps;

    console.log(viewerProps);

    return (
        <StyledFretboardInput>
            <ViewerInputManager
                viewerConfig={VIEWER_PRESET_MAP.get(ViewerId.Fretboard)}
                viewerProps={viewerProps}
                setViewerProps={setViewerProps}
            />
        </StyledFretboardInput>
    );
};

export default FretboardInput;
