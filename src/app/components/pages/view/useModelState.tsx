import { useState } from "react";
import { POD_LIST_PRESET_TYPE_OPTIONS } from "../../../../core/Core.derived";
import { NOTE_PRESETS } from "../../../../core/Note.constants";

const getInitPresetType = (qpPresetType?: string) => {
    const found = POD_LIST_PRESET_TYPE_OPTIONS.find(
        (type) => type.id && type.id === qpPresetType
    );
    if (!found) throw new Error('Cannot find preset type: ' + qpPresetType);
    return found;
};

const getInitPresetConfig = (presetType, qpPresetId?: string) => {
    const found = presetType.data.find((preset) => preset.presetId === qpPresetId);
    if (!found) throw new Error('Cannot find preset id: ' + qpPresetId);
    return found;
};

const getInitRoot = (qpRootId?: string) => {
    const found = NOTE_PRESETS.find((note) => note.presetId === qpRootId);
    if (!found) throw new Error('Cannot find root id: ' + qpRootId);
    return found;
};

export interface IModelState {
    presetType,
    setPresetType,
    presetConfig,
    setPresetConfig,
    root,
    setRoot
}

const useModelState = (initPresetType: string, initPresetId: string, initRootId: string) => {
    const [presetType, setPresetType] = useState(getInitPresetType(initPresetType));
    const [presetConfig, setPresetConfig] = useState(
        getInitPresetConfig(presetType, initPresetId)
    );

    const [root, setRoot] = useState(getInitRoot(initRootId));

    return {
        presetType,
        setPresetType,
        presetConfig,
        setPresetConfig,
        root,
        setRoot
    };
};

export default useModelState;
