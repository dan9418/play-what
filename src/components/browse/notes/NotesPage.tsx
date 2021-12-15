import { NOTE_PRESETS } from "@pw-core/models/Model.presets";
import { Link } from "gatsby";
import React from "react";
import SearchPage from "../_shared/SearchPage";

const NotesPage: React.FC<any> = props => {
    return (
        <SearchPage
            title="Notes"
            subtitle="An note is a single pitch"
            headers={[
                'Name'
            ]}
            rows={NOTE_PRESETS}
            getCols={preset => {
                return [
                    <Link to={`/browse/notes/${preset.id}`}>{preset.name}</Link>,
                ]
            }}
            {...props}
        />
    );
};

export default NotesPage;
