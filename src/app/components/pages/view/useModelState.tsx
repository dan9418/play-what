import { useState } from "react";
import { POD_LIST_PRESET_TYPE_OPTIONS } from "../../../../core/Core.derived";
import { NOTE_PRESETS } from "../../../../core/Note.constants";

const getInitPresetType = (qpPresetType?: string) => {
    const found = POD_LIST_PRESET_TYPE_OPTIONS.find(
        (type) => type.id && type.id === qpPresetType
    );
    //if (!found) throw new Error('Cannot find preset type: ' + qpPresetType);
    return found || POD_LIST_PRESET_TYPE_OPTIONS[0];
};

const getInitPresetConfig = (presetType, qpPresetId?: string) => {
    const found = presetType.data.find((preset) => preset.presetId === qpPresetId);
    //if (!found) throw new Error('Cannot find preset id: ' + qpPresetId);
    return found || presetType.data[0];
};

const getInitRoot = (qpRootId?: string) => {
    const found = NOTE_PRESETS.find((note) => note.presetId === qpRootId);
    //if (!found) throw new Error('Cannot find root id: ' + qpRootId);
    return found || NOTE_PRESETS[0];
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
    const [presetType, _setPresetType] = useState(() => getInitPresetType(initPresetType));
    const [presetConfig, setPresetConfig] = useState(
        () => getInitPresetConfig(presetType, initPresetId)
    );
    const setPresetType = (type) => {
        _setPresetType(type);
        setPresetConfig(type.data[0]);
    };
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
