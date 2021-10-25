import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../../../core/src/models/PodList/PodList.utils";
import Icon from "../../../../../ui/src/Icon";
import IconButton from "../../../../../ui/src/inputs/IconButton";
import ViewerUtils from "../../../../../ui/src/viewers/Viewer.utils";
import { dataIndexState, dataListState, detailsState } from "../../../state/state";
import EditPanel from "../edit-panel/EditPanel";
import Viewer from "./Viewer";

const StyledViewerController = styled.div`
    width: 100%;
    height: 100%;
   
    background: #f3f3f3;
    border-radius: 8px;

    .header-btn {
        appearance: none;
        border: none;
        background-color: transparent;
        font-weight: bold;
        font-size: 1.5em;
        color: ${({ theme }) => theme.text.primary};
        cursor: pointer;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 16px;

        border-radius: 8px 8px 0 0;

        background: #eee;
        &:hover {
            background:${({ theme }) => theme.surface.gradient};
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

    const isActive = dataIndex === listIndex;

    return (
        <StyledViewerController $isActive={isActive}>
            <button
                type="button"
                onClick={() => setDataIndex(dataIndex === listIndex ? undefined : listIndex)}
                className="header-btn"
            >
                <span>{details.notes.formattedName}</span>
                <Icon iconId="edit" />
            </button>
            {
                isActive &&
                <EditPanel />
            }
            <div className="viewer-container">
                <Viewer details={details} viewerDetails={viewerDetails} />
            </div>
        </StyledViewerController >
    );
};

export default ViewerController;
