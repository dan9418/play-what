import React from 'react';
import styled from 'styled-components';
import Viewer from '../Viewer';
import { StyledPodTable } from './PodTable';

const StyledViewerComparison = styled.div`
    display: grid;

    overflow: hidden;

    padding: 16px 0;

    position: sticky;
    top: 0;

    //border-bottom: 1px solid ${({ theme }) => theme.border};

    background-color: ${({ theme }) => theme.surface.bg};

    @media(min-width: 512px) {
        grid-template-columns: ${({ $isEditing }) => $isEditing ? '1fr 1fr' : '1fr'};
        gap: 16px;
    }

    .fretboard, .keyboard {
        max-width: 512px;
        max-height: 256px;
        margin: 32px auto;
    }

    ${StyledPodTable} {
        width: 100%;
        max-width: 512px;
        //padding: 64px;
    }
`;

const ViewerComparison: React.FC<any> = ({ hideModels, always, ...editProps }) => {

    const isEditing = editProps.beforeModelDetails.notes.preview !== editProps.afterModelDetails.notes.preview;

    return (
        <StyledViewerComparison $isEditing={(isEditing || always)}>
            <Viewer details={editProps.beforeModelDetails} viewerDetails={editProps.beforeViewerDetails} />
            {(isEditing || always) && <Viewer details={editProps.afterModelDetails} viewerDetails={editProps.afterViewerDetails} />}
        </StyledViewerComparison>
    )
}

export default ViewerComparison;
