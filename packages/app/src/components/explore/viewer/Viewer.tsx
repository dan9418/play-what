import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { viewerDetailsState } from "../../../state/state";

const StyledViewer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const Viewer: React.FC<any> = ({ details, viewerDetails, ...rest }) => {

    const masterViewerDetails = useRecoilValue(viewerDetailsState);
    const _viewerDetails = viewerDetails ? viewerDetails : masterViewerDetails;

    return (
        <_viewerDetails.component {..._viewerDetails.props} details={details} {...rest} />
    );
};

export default Viewer;
