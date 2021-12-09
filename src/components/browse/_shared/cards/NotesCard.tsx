import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import ModelUtils from "../../../../core/models/Model.utils";
import { NOTE_PRESETS } from "../../../../core/models/Note.constants";
import Card from "../../../_shared/ui/Card";

const StyledNotes = styled.div`
    ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;


const NotesCard: React.FC<any> = () => {

    return null;

    const notes = null;

    return (
        <Card title="Notes">
            <StyledNotes>
                <ul>
                    {notes.map(note => {
                        const preset = NOTE_PRESETS.find(p => ModelUtils.areEqual(p.value, ModelUtils.reduce(note)));
                        if (!preset) return null;
                        return (
                            <li key={preset.id}>
                                <Link to={`/browse/notes/${preset.id}`}>{preset.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </StyledNotes>
        </Card>
    );
};

export default NotesCard;
