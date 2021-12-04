import React from "react";
import styled from 'styled-components';
import Card from "../../_shared/ui/Card";

const StyledChordRelated = styled.div`

`;


const ChordRelatedCard: React.FC<any> = ({ chord }) => {
    return (
        <Card title="Related">
            <StyledChordRelated>
                <h3>Subsets</h3>
                <h3>Supersets</h3>
            </StyledChordRelated>
        </Card>
    );
};

export default ChordRelatedCard;
