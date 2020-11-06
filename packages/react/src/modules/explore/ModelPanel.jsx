import React, { useState } from "react";
import ModelPanelHeader from "./ModelPanelHeader";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import SwitchInput from '../ui/SwitchInput/SwitchInput';
import usePodContext, { MODELS } from "../other/PodContext";
import DropdownInput from "../ui/DropdownInput/DropdownInput";

const PodTypeBar = () => {
	const { podType, setPodType } = usePodContext();
	return (
		<div className='input-bar'>
			<div>Pod Type</div>
			<span>Interval</span>
			<SwitchInput value={podType} setValue={setPodType} />
			<span>Note</span>
		</div>
	);
};

const ModelBar = () => {
	const { value, setValue, model, preset } = usePodContext();
	return (
		<div className='input-bar'>
			<div>Model</div>
			<DropdownInput options={MODELS} value={model} setValue={v => setValue(new v.cl(v.defaultValue))} />
		</div>
	);
};

const PresetBar = () => {
	const { value, setValue, model, preset } = usePodContext();

	return (
		<div className='input-bar'>
			<div>Preset</div>
			<DropdownInput options={model.cl.presetValues} value={preset} setValue={v => setValue(new v.cl(v.value))} />
		</div>
	);
};

const ModelPanelBody = () => {
	return (
		<div className='model-panel-body'>
			<ModelBar />
			<PresetBar />
			<PodTypeBar />
			<ValueSubpanel />
			<AnalysisSubpanel />
		</div>
	);
};

const ModelPanel = ({ label }) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('dpb', label);
	return (
		<div className='model-panel'>
			<ModelPanelHeader label={label} isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (<ModelPanelBody />)}
			<div className='model-panel-footer' />
		</div>
	);
}

export default ModelPanel;
