import { Link } from "gatsby";
import React, { useState } from 'react';
import styled from "styled-components";
import { POD_LIST_PRESET_TYPE_OPTIONS } from "../../../../core/Core.derived";
import { IIntervalPreset, INTERVAL_PRESET_MAP, IntervalId } from "../../../../core/Interval.constants";
import { getName as getIntervalName } from "../../../../core/Interval.utils";
import { NOTE_PRESETS } from "../../../../core/Note.constants";
import { getName as getNoteName } from "../../../../core/Note.utils";
import { addPods, getRootedName } from "../../../../core/Pod.utils";
import { getModelRoute } from "../../../../core/Routing.utils";
import DropdownInput from "../../shared/inputs/DropdownInput";
import Card from '../../shared/ui/Card';
import CardFooterButton from "../../shared/ui/CardFooterButton";
import InputRow from "../../shared/ui/InputRow";
import CardSection from "./CardSection";
import { IModelState } from "./useModelState";

const StyledDetailsCol = styled.div`
  .name {
    font-size: 140%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;

    .item {
      margin: 0 8px;
      text-align: center;
      .note {
        font-weight: bold;
        font-size: 120%;
      }
      .interval {
        color: ${(props) => props.theme?.text?.secondary};
      }
    }
  }
  .notes {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const NotesCol: React.FC<IModelState> = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const {
        presetType,
        setPresetType,
        presetConfig,
        setPresetConfig,
        root,
        setRoot
    } = props;
    const modelOptions = presetType.data;
    const intervalIds = presetConfig.valueIds;

    return (
        <>
            <Card title="Notes">
                <StyledDetailsCol>
                    <CardSection>
                        <div className="notes">
                            <Link
                                to={getModelRoute(
                                    presetType.id,
                                    presetConfig.presetId,
                                    root.presetId
                                )}
                                className="name"
                            >
                                {getRootedName(presetConfig, root)}
                            </Link>
                            <div className="info">
                                {intervalIds.map((ivl, i) => {
                                    const intervalPreset = INTERVAL_PRESET_MAP.get(ivl as IntervalId) as IIntervalPreset;
                                    const intervalPod = intervalPreset.pod;
                                    const intervalName = getIntervalName(intervalPod)
                                    const notePod = root && addPods(root.pod, intervalPreset.pod);
                                    const noteName = notePod && getNoteName(notePod);

                                    return (
                                        <div key={i} className="item">
                                            <div className="note">{noteName}</div>
                                            <div className="interval">{intervalName}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </CardSection>
                    {isEditing && (
                        <div>
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
                        </div>
                    )}
                    <CardFooterButton isActive={isEditing} onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'DONE' : 'EDIT'}</CardFooterButton>
                </StyledDetailsCol>
            </Card>
        </>
    );
};

export default NotesCol;
