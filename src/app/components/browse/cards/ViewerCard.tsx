import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../../core/models/PodList/PodList.utils";
import { dataIndexState, rootState } from "../../../state/state";
import Viewer from "../../create/viewer/Viewer";
import Card from "../../shared/Card";

const StyledViewerCard = styled.div`

`;


const ViewerCard: React.FC<any> = ({ pods }) => {


    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);
    const [root, setRoot] = useRecoilState(rootState);

    const details = PodListUtils.getDetails(root || [0, 0], pods);


    if (typeof dataIndex === 'undefined') return null;

    return (
        <Card title="Viewer">
            <StyledViewerCard>
                <Viewer details={details} />
            </StyledViewerCard>
        </Card>
    );
};

export default ViewerCard;
