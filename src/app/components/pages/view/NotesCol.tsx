import React from 'react';
import { POD_LIST_PRESET_TYPE_OPTIONS } from "../../../../core/Core.derived";
import { NOTE_PRESETS } from "../../../../core/Note.constants";
import DropdownInput from "../../shared/inputs/DropdownInput";
import InputRow from "../../shared/ui/InputRow";
import CardSection from "./CardSection";
import { IModelState } from "./useModelState";

const NotesCol: React.FC<IModelState> = (props) => {
    const {
        presetType,
        setPresetType,
        presetConfig,
        setPresetConfig,
        root,
        setRoot
    } = props;
    const modelOptions = presetType.data;

    return (
        <>
            <CardSection title="Root">
                <InputRow label="Key Center">
                    <DropdownInput
                        value={root}
                        setValue={setRoot}
                        options={NOTE_PRESETS}
                        idProperty="presetId"
                    />
                </InputRow>
            </CardSection>
            <CardSection title="Intervals">
                <InputRow label="Model Type">
                    <DropdownInput
                        value={presetType}
                        setValue={setPresetType}
                        options={POD_LIST_PRESET_TYPE_OPTIONS}
                        idProperty="id"
                    />
                </InputRow>
                <InputRow label="Preset">
                    <DropdownInput
                        value={presetConfig}
                        setValue={setPresetConfig}
                        options={modelOptions}
                        idProperty="presetId"
                    />
                </InputRow>
            </CardSection>
            {/*<CardSection title="Colors">
                <InputRow label="Color Scheme">
                    <DropdownInput
                        value={colorScheme}
                        setValue={setColorScheme}
                        options={COLOR_SCHEME_PRESETS}
                        idProperty="id"
                    />
                </InputRow>
                <InputRow label="Color Config">
                    <ColorSchemeInput
                        value={colorConfig}
                        setValue={setColorConfig}
                        labelFn={colorScheme.labelFn}
                    />
                </InputRow>
    </CardSection>*/}
        </>
    );
};

export default NotesCol;
