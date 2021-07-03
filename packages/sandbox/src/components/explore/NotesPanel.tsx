import React from "react";
import Meter from '../../../../viewers/src/Meter/Meter';
import Panel from './Panel';

const NotesPanel: React.FC<any> = ({ rootValue, notes, notesPreview }) => {

    const notesModal = <h2>Edit Notes</h2>;

    return (
        <Panel title="Notes" subtitle={notesPreview} modal={notesModal}>
            <Meter modelRoot={rootValue} modelValue={notes} />
        </Panel>
    );
};

export default NotesPanel;
