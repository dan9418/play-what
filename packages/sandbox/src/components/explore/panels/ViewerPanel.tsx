import React from "react";
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Panel from './Panel';
import styled from 'styled-components';

const StyledViewerWrapper = styled.div`
    width: 100%;
    padding: 16px;
`;

const ViewerPanel: React.FC<any> = ({ modelId, notes }) => {

    const labelProps = {
        modelId,
        modelValue: notes
    }


    return (
        <StyledViewerWrapper>
            <Fretboard labelProps={labelProps} />
        </StyledViewerWrapper>
    );
};

export default ViewerPanel;
