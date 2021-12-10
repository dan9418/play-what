import React from "react";
import styled from 'styled-components';
import Viewer from "../../../_shared/fretboard/Viewer";
import Card from "../../../_shared/ui/Card";

const StyledViewerCard = styled.div`
    padding: 0 16px;
`;

const ViewerCard: React.FC<any> = ({ model }) => {
    return (
        <Card title="Details">
            <StyledViewerCard>
                <Viewer model={model} />
            </StyledViewerCard>
        </Card>
    );
};

export default ViewerCard;
