import React from "react";
import Fretboard from '../../../../../viewers/src/Fretboard/Fretboard';
import Panel from './Panel';

const ViewerPanel: React.FC<any> = ({ modelId, notes }) => {

    const labelProps = {
        modelId,
        modelValue: notes
    }

    const viewerModal = <h2>Edit Viewer</h2>;

    return (
        <Panel name="Viewer" preview="Fretboard" modal={viewerModal}>
            <Fretboard labelProps={labelProps} />
        </Panel>
    );
};

export default ViewerPanel;
