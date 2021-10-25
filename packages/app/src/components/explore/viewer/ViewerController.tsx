import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import IconButton from "../../../../../ui/src/inputs/IconButton";
import { dataIndexState, detailsState } from "../../../state/state";
import Viewer from "./Viewer";

const StyledViewerController = styled.div`
    width: 100%;
    height: 100%;
   

    background: #eee;//${({ theme }) => theme.surface.highlight};
    border-radius: 8px;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;

        padding: 16px;
        .button-container {
            display: flex;
            button {
                background-color: transparent;
                padding: 0;
            }
        }
        .header-btn {
            appearance: none;
            border: none;
            background-color: transparent;
            font-weight: bold;
            font-size: 1.5em;
            color: ${({ theme }) => theme.text.primary};
            cursor: pointer;
            width: 100%;
            text-align: left;
        }
    }
    .viewer-container {
        padding: 16px;
    }
`;

const ViewerController: React.FC<any> = ({ details, listIndex, ...rest }) => {

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
                    <IconButton iconId="edit" />
                </div>
            </div>
            <div className="viewer-container">
                <Viewer details={_details} />
            </div>
        </StyledViewerController>
    );
};

export default ViewerController;
