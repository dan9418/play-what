import React from "react";
import { useRecoilState } from "recoil";
import { VIEWER_PRESET_MAP } from "../../../../viewers/src/viewer.constants";
import { notesState, viewerState } from "../../state/state";

const Viewer: React.FC<any> = ({ notes, viewerId, ...rest }) => {

    // @ts-ignore
    const [_notes] = useRecoilState(notesState);
    // @ts-ignore
    const [_viewerId] = useRecoilState(viewerState);

    const labelProps = {
        notes: notes ? notes : _notes
    };

    if (!labelProps.notes.length) return <>No intervals set.</>;

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId ? viewerId : _viewerId).value;

    return (
        <viewerConfig.component {...viewerConfig.props} labelProps={labelProps} {...rest} />
    );
};

export default Viewer;
