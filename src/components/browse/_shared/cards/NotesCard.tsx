import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledNotes = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const NotesCard: React.FC<any> = ({ model }) => {

    if (!model.rootPreset) return null;

    const notes = model.getNoteListClasses();

    return (
        <Card title="Notes">
            <StyledNotes>
                <ul>
                    {notes.map(note => {
                        return (
                            <li key={note.id}>
                                <Link to={`/browse/notes/${note.id}`}>{note.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledNotes>
        </Card>
    );
};

export default NotesCard;
