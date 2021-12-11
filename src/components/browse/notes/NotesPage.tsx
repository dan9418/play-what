import { Link } from "gatsby";
import React from "react";
import { NoteTag } from "@pw-core/models/Model.constants";
import { NOTE_PRESETS } from "@pw-core/models/Model.presets";
import SearchPage from "../_shared/SearchPage";

const NotesPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Notes"
            subtitle="An note is a single pitch"
            tag={NoteTag}
            headers={[
                'Name',
                'Id'
            ]}
            rows={NOTE_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/notes/${preset.id}`}>{preset.name}</Link>,
                    preset.id
                ]
            }}
            {...props}
        />
    );
};

export default NotesPage;
