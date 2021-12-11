import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledDetailsCard = styled.div`
    
`;

const DetailsCard: React.FC<any> = ({ model }) => {
    const intervals = model.getIntervalListClasses && model.getIntervalListClasses();
    const notes = model.getNoteListClasses && model.getNoteListClasses();

    if (!intervals && !notes) return null;

    return (
        <Card title="Details">
            <StyledDetailsCard>
                <ul>
                    {
                        intervals.map((ivl, i) => (
                            <li key={ivl.id}>
                                <div>{ivl.id}</div>
                                {notes && <div>{notes[i].id}</div>}
                            </li>
                        ))
                    }
                </ul>
            </StyledDetailsCard>
        </Card>
    );
};

export default DetailsCard;
