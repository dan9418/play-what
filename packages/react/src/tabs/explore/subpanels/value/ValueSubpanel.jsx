import { LIST_PRESETS } from "@pw/core/src/modules/theory/presets";
import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import ButtonInput from "../../../../ui/ButtonInput/ButtonInput";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import Subpanel from "../../Subpanel";
import ValueTable from "./ValueTable";

const PresetBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState(LIST_PRESETS[0]);
	const { value, setValue, podType, isList } = usePodContext();
	const { isEditing } = useEditContext();
	if (!isList || !isEditing) return null;
	const setHelper = v => setValue(v.value);
	return (
		<div className="preset-box">
			<ButtonInput onClick={() => setIsOpen(!isOpen)} >{isOpen ? 'Done' : 'Load Preset'}</ButtonInput>
			{isOpen && (
				<div>
					Type:
					<DropdownInput options={LIST_PRESETS} value={type} setValue={setType} />
					Preset:
					<DropdownInput options={type.presets} value={null} setValue={setHelper} />
				</div>
			)}
		</div>
	);
};

const ValueSubpanel = () => {
	return (
		<Subpanel name="Value" >
			<ValueTable />
			<PresetBox />
		</Subpanel>
	);
};

export default ValueSubpanel;
