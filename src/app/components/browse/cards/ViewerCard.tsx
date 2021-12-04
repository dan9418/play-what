import React from "react";
import styled from 'styled-components';
import Viewer from "../../create/viewer/Viewer";
import Card from "../../shared/Card";

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
