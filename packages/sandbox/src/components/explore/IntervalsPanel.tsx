import { ModelId, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import React from "react";
import DropdownInput from '../shared/ui/inputs/DropdownInput';
import LabelRow from './LabelRow';
import Panel from './Panel';
import { PodCardList } from './PodCard';

const IntervalsPanel: React.FC<any> = ({ intervalsPreview, modelConfig, setModelId, data, setData, intervals }) => {

    const intervalsModal = <h2>Edit Intervals</h2>;

    return (
        <Panel title="Intervals" subtitle={intervalsPreview} modal={intervalsModal}>
            <LabelRow label="Model">
                <DropdownInput value={modelConfig} setValue={setModelId} options={MODEL_VALUES.filter(c => c.modelId !== ModelId.Note)} idProperty="modelId" displayProperty="name" />
            </LabelRow>
            <LabelRow label="Preset">
                <DropdownInput value={data} setValue={setData} options={modelConfig.presets} />
            </LabelRow>
            <PodCardList podType={ModelId.Interval} pods={intervals} />
        </Panel>
    );
};

export default IntervalsPanel;
