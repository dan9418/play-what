import React from "react";
import { useRecoilValue } from "recoil";
import { detailsState, viewerDetailsState } from "../../state/state";
import PodTable, { StyledPodTable } from "./modals/PodTable";
import styled from 'styled-components'

const StyledViewer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Viewer: React.FC<any> = ({ details, viewerDetails, ...rest }) => {

    const masterDetails = useRecoilValue(detailsState);
    const masterViewerDetails = useRecoilValue(viewerDetailsState);

    const _details = details ? details : masterDetails;
    const _viewerDetails = viewerDetails ? viewerDetails : masterViewerDetails;

    return (
        <StyledViewer>
            <PodTable root={masterDetails.root.value} intervals={masterDetails.intervals.value} notes={masterDetails.notes.value} />
            <_viewerDetails.component {..._viewerDetails.props} details={_details} {...rest} />
        </StyledViewer>
    );
};

export default Viewer;
