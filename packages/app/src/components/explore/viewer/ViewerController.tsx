import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../../../core/src/models/PodList/PodList.utils";
import IconButton from "../../../../../ui/src/inputs/IconButton";
import ViewerUtils from "../../../../../ui/src/viewers/Viewer.utils";
import { dataIndexState, dataListState, detailsState } from "../../../state/state";
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

const ViewerController: React.FC<any> = ({ listIndex, ...rest }) => {

    const [dataList, setDataList] = useRecoilState(dataListState);
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);
    const dataItem = dataList[listIndex];

    const details = PodListUtils.getDetails(dataItem.root, dataItem.intervals);
    const viewerDetails = ViewerUtils.getDetails(dataItem.viewerId, dataItem.viewerProps);

    return (
        <StyledViewerController $isActive={dataIndex === listIndex}>
            <div className="header">
                <button
                    type="button"
                    onClick={() => setDataIndex(listIndex)}
                    className="header-btn"
                >
                    {details.notes.formattedName}
                </button>
                <div className="button-container">
                    <IconButton iconId="edit" />
                </div>
            </div>
            <div className="viewer-container">
                <Viewer details={details} viewerDetails={viewerDetails} />
            </div>
        </StyledViewerController>
    );
};

export default ViewerController;
