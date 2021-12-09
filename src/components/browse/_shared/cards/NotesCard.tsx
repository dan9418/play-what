import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRootParam } from "../../../../state/state";
import Card from "../../../_shared/ui/Card";

const StyledNotes = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const NotesCard: React.FC<any> = ({ model }) => {

    const [rootParam, setRootParam] = useRootParam();

    if (!rootParam) return null;

    console.log('dpb model', model);

    const notes = model.applyRoot(rootParam).getNoteListClasses();

    return (
        <Card title="Notes">
            <StyledNotes>
                <ul>
                    {notes.map(note => {
                        return (
                            <li key={note.preset.id}>
                                <Link to={`/browse/notes/${note.preset.id}`}>{note.preset.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledNotes>
        </Card>
    );
};

export default NotesCard;
