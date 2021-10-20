import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import IconButton from "../../../../../ui/src/inputs/IconButton";
import IntervalsInputBasic from "../../../../../ui/src/inputs/IntervalsInputBasic";
import RootInputBasic from "../../../../../ui/src/inputs/RootInputBasic";
import useEditProps from "../../../hooks/useEditProps";
import { detailsState, viewerDetailsState } from "../../../state/state";
import Viewer from "./Viewer";

const StyledViewerController = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;

    background: ${({ theme }) => theme.surface.gradient};

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 8px;
        .button-container {
            button {
                background-color: transparent;
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 16px;
    }

    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
`;

const ViewerController: React.FC<any> = ({ details, viewerDetails, ...rest }) => {

    const masterDetails = useRecoilValue(detailsState);
    const masterViewerDetails = useRecoilValue(viewerDetailsState);

    const _details = details ? details : masterDetails;
    const _viewerDetails = viewerDetails ? viewerDetails : masterViewerDetails;

    const noteNames = _details.notes.preview.split(',');
    const intervalNames = _details.intervals.preview.split(',');

    const editProps = useEditProps();

    return (
        <StyledViewerController>
            <div className="header">
                <h2>{_details.notes.formattedName}</h2>
                <div className="button-container">
                    <IconButton iconId="up" />
                    <IconButton iconId="down" />
                    <IconButton iconId="maximize" />
                    <IconButton iconId="delete" />
                </div>
            </div>
            <div className="grid">
                <Viewer />
                <div className="controls">
                    <RootInputBasic {...editProps} />
                    <IntervalsInputBasic {...editProps} />
                </div>
            </div>
        </StyledViewerController>
    );
};

export default ViewerController;
