import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledInversions = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const InversionsCard: React.FC<any> = ({ model }) => {

    const inversions = [
        {
            id: '1',
            name: 'First'
        },
        {
            id: '2',
            name: 'Second'
        },
        {
            id: '3',
            name: 'Third'
        }
    ]

    return (
        <Card title="Inversions">
            <StyledInversions>
                <ul>
                    {inversions.map(note => {
                        return (
                            <li key={note.id}>
                                <Link to={`/browse/inversions/${note.id}`}>{note.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledInversions>
        </Card>
    );
};

export default InversionsCard;
