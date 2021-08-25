import React from "react";
import { useRecoilValue } from "recoil";
import { detailsState, viewerDetailsState } from "../../state/state";

const Viewer: React.FC<any> = ({ details, viewerDetails, ...rest }) => {

    const masterDetails = useRecoilValue(detailsState);
    const masterViewerDetails = useRecoilValue(viewerDetailsState);

    const _details = details ? details : masterDetails;
    const _viewerDetails = viewerDetails ? viewerDetails : masterViewerDetails;

    return (
        <_viewerDetails.component {..._viewerDetails.props} details={_details} {...rest} />
    );
};

export default Viewer;
