import React from "react";
import styled from 'styled-components';
import Card from "../../shared/Card";
import Viewer from "../../shared/Viewer";

const StyledViewerCard = styled.div`

`;

const ViewerCard: React.FC<any> = ({ pods }) => {

    return (
        <Card title="Viewer">
            <StyledViewerCard>
                <Viewer />
            </StyledViewerCard>
        </Card>
    );
};

export default ViewerCard;
