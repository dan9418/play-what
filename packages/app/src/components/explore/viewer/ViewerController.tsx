import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import IconButton from "../../../../../ui/src/inputs/IconButton";
import { dataIndexState, detailsState } from "../../../state/state";
import Viewer from "./Viewer";

const StyledViewerController = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;

    background: ${({ theme }) => theme.surface.gradient};
    border-radius: 8px;

    .header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        margin-bottom: 16px;
        .button-container {
            display: flex;
            button {
                background-color: transparent;
            }
        }
        .header-btn {
            appearance: none;
            border: none;
            background-color: transparent;
            font-weight: bold;
            font-size: 140%;
            color: ${({ theme }) => theme.text.primary};
            cursor: pointer;
            width: 100%;
            text-align: left;
        }
    }
`;

const ViewerController: React.FC<any> = ({ details, viewerDetails, listIndex, ...rest }) => {

    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);


    const masterDetails = useRecoilValue(detailsState);

    const _details = details ? details : masterDetails;

    return (
        <StyledViewerController $isActive={dataIndex === listIndex}>
            <div className="header">
                <button
                    type="button"
                    onClick={() => setDataIndex(listIndex)}
                    className="header-btn"
                >
                    {_details.notes.formattedName}
                </button>
                <div className="button-container">
                    <IconButton iconId="up" />
                    <IconButton iconId="down" />
                    <IconButton iconId="maximize" />
                    <IconButton iconId="delete" />
                </div>
            </div>
            <div className="viewer-container">
                <Viewer details={_details} />
            </div>
        </StyledViewerController>
    );
};

export default ViewerController;
