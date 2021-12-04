import React from "react";
import styled from 'styled-components';
import Viewer from "../../../_shared/fretboard/Viewer";
import Card from "../../../_shared/ui/Card";

const StyledViewerCard = styled.div`

`;

const ViewerCard: React.FC<any> = () => {
    return (
        <Card title="Preview">
            <StyledViewerCard>
                <Viewer />
            </StyledViewerCard>
        </Card>
    );
};

export default ViewerCard;
