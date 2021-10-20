import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import ButtonInput from "../../../../../ui/src/inputs/ButtonInput";
import IconButton from "../../../../../ui/src/inputs/IconButton";
import IntervalsInputBasic from "../../../../../ui/src/inputs/IntervalsInputBasic";
import RootInputBasic from "../../../../../ui/src/inputs/RootInputBasic";
import ViewerInputBasic from "../../../../../ui/src/inputs/ViewerInputBasic";
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
        align-items: flex-start;
        justify-content: space-between;

        margin-bottom: 16px;
        .button-container {
            button {
                background-color: transparent;
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 16px;
    }

    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;

    .advanced {
        width: 100%;
        margin-top: auto;
    }

    .controls {
        padding: 8px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.surface.highlight};
        margin-top: 8px;
    }

`;

const ViewerController: React.FC<any> = ({ details, viewerDetails, ...rest }) => {

    const [editMode, setEditMode] = useState('notes');

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
                <div>
                    <Viewer />
                </div>
                <div className="controls">
                    {editMode === 'notes' ?
                        <>
                            <RootInputBasic {...editProps} />
                            <IntervalsInputBasic {...editProps} />
                            <ButtonInput className="advanced">Advanced</ButtonInput>
                        </>
                        :
                        <>
                            <ViewerInputBasic {...editProps} />
                        </>
                    }
                </div>
            </div>
        </StyledViewerController>
    );
};

export default ViewerController;
