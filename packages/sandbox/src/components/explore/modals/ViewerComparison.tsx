import React from 'react';
import styled from 'styled-components';
import HighlightBox from '../../shared/ui/HighlightBox';
import Viewer from '../Viewer';
import ModalSection from './ModalSection';
import PodTable from './PodTable';

const StyledViewerComparison = styled.div`
    display: grid;

    @media(min-width: 512px) {
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    .fretboard {
        margin-top: 32px;
    }
`;

const ViewerComparison: React.FC<any> = ({ hideModels, ...editProps }) => {

    return (
        <StyledViewerComparison>
            <div>
                <ModalSection title="Before" />
                {!hideModels && (
                    <HighlightBox>
                        <PodTable root={editProps.beforeRoot} intervals={editProps.beforeIntervals} notes={editProps.beforeModelDetails.notes.value} />
                    </HighlightBox>
                )}
                <Viewer details={editProps.beforeModelDetails} viewerDetails={editProps.beforeViewerDetails} />
            </div>

            <div>
                <ModalSection title="After" />
                {!hideModels && (
                    <HighlightBox >
                        <PodTable root={editProps.afterRoot} intervals={editProps.afterIntervals} notes={editProps.afterModelDetails.notes.value} />
                    </HighlightBox>
                )}
                <Viewer details={editProps.afterModelDetails} viewerDetails={editProps.afterViewerDetails} />
            </div>
        </StyledViewerComparison>
    )
}

export default ViewerComparison;
