import React from "react";
import styled from 'styled-components';
import ViewerInputManager from "../../../app/src/components/explore/edit-panel/ViewerInputManager";
import { FRETBOARD_INPUTS } from "../viewers/Viewer.constants";

const StyledFretboardInput = styled.div`

`;

const FretboardInput: React.FC<any> = editProps => {

    const { viewerProps, setViewerProps } = editProps;

    return (
        <StyledFretboardInput>
            <ViewerInputManager
                inputs={FRETBOARD_INPUTS}
                viewerProps={viewerProps}
                setViewerProps={setViewerProps}
            />
        </StyledFretboardInput>
    );
};

export default FretboardInput;
