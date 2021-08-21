import React from "react";
import { useRecoilState } from "recoil";
import { VIEWER_PRESET_MAP } from "../../../../viewers/src/viewer.constants";
import { modelIdState, notesState, viewerState } from "../../state/state";

const Viewer: React.FC<any> = ({ modelValue, viewerId, ...rest }) => {

    // @ts-ignore
    const [modelId] = useRecoilState(modelIdState);
    // @ts-ignore
    const [_modelValue] = useRecoilState(notesState);
    // @ts-ignore
    const [_viewerId] = useRecoilState(viewerState);

    const labelProps = {
        modelId,
        modelValue: modelValue ? modelValue : _modelValue
    };

    if (!labelProps.modelValue.length) return <>No intervals set.</>;

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId ? viewerId : _viewerId).value;

    return (
        <viewerConfig.component {...viewerConfig.props} labelProps={labelProps} {...rest} />
    );
};

export default Viewer;
