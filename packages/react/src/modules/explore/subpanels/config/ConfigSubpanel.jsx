import PodList from "@pw/core/src/modules/models/podList/PodList";
import React, { useState } from "react";
import usePodContext, { MODELS, STRUCTURES } from "../../../other/PodContext";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import SwitchInput from "../../../ui/SwitchInput/SwitchInput";
import EditDash from "../../EditDash";

const PodTypeBar = ({ isEditing }) => {
	const { value, podType, setPodType } = usePodContext();
	if (!(value instanceof PodList)) return null;
	return (
		<div className='subinput-bar'>
			<div>Pod Type</div>
			<DropdownInput options={[]} value={podType} setValue={null} />
		</div>
	);
};

const ModelBar = ({ isEditing }) => {
	const { value, setValue, structure, model, preset } = usePodContext();
	return (
		<>
			<div className='input-bar'>
				<div>Structure</div>
				{isEditing ?
					<DropdownInput options={STRUCTURES} value={structure} setValue={v => setValue(new v.cl(v.defaultValue))} />
					: structure.id
				}
			</div>
			{value instanceof PodList && <PodTypeBar />}
			<div className='input-bar'>
				<div>Model</div>
				{isEditing ?
					<DropdownInput options={structure.models} value={model} setValue={v => setValue(new v.cl(v.defaultValue))} />
					: model.id || 'n/a'}
			</div>
		</>
	);
};

const PresetBar = ({ isEditing }) => {
	const { value, setValue, model, preset } = usePodContext();

	return (
		<div className='input-bar'>
			<div>Preset</div>
			{isEditing ?
				<DropdownInput options={model.cl.presetValues} value={preset} setValue={v => setValue(new model.cl(v.value))} />
				: 'n/a'}
		</div>
	);
};

const ConfigSubpanel = () => {
	const podContext = usePodContext();
	const { value, setValue } = podContext;

	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className='subpanel'>
			<EditDash name="Config" isEditing={isEditing} setIsEditing={setIsEditing} />
			<ModelBar isEditing={isEditing} />
			<PresetBar isEditing={isEditing} />
		</div>
	);
};

export default ConfigSubpanel;
