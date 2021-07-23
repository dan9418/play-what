import { ModelId, MODEL_VALUES } from '@pw/core/src/models/Model.constants';
import React from "react";
import DropdownInput from '../../shared/ui/inputs/DropdownInput';
import LabelRow from './../LabelRow';
import Panel from './Panel';
import { PodCardList } from '../PodCard';

const IntervalsPanel: React.FC<any> = ({ preview, modelConfig, setModelId, presetConfig, setPresetId, intervals }) => {

    return (
        <>
            <LabelRow labels={[
                <DropdownInput key="1" value={modelConfig} setValue={setModelId} options={MODEL_VALUES.filter(c => c.modelId !== ModelId.Note)} idProperty="modelId" displayProperty="name" />,
                <DropdownInput key="2" value={presetConfig} setValue={config => setPresetId(config.id)} options={modelConfig.presets} />
            ]} />
            <PodCardList podType={ModelId.Interval} pods={intervals} />
        </>
    );
};

export default IntervalsPanel;
