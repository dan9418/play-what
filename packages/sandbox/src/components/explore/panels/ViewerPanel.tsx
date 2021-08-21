import React from "react";
import { useRecoilState } from "recoil";
import { VIEWER_PRESET_MAP } from "../../../../../viewers/src/viewer.constants";
import { modelIdState, notesState, viewerState } from "../../../state/state";

const ViewerPanel: React.FC<any> = () => {

    // @ts-ignore
    const [modelId] = useRecoilState(modelIdState);
    // @ts-ignore
    const [modelValue] = useRecoilState(notesState);
    // @ts-ignore
    const [viewerId] = useRecoilState(viewerState);

    if (!modelValue.length) return <>No intervals set.</>;

    const labelProps = {
        modelId,
        modelValue
    };

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId).value;

    return (
        <viewerConfig.component {...viewerConfig.props} labelProps={labelProps} />
    );
};

export default ViewerPanel;
