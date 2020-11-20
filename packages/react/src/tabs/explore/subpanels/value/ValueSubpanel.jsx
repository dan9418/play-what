import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import React, { useState } from "react";
import useEditContext from "../../../../other/EditContext";
import usePodContext from "../../../../other/PodContext";
import ButtonInput from "../../../../ui/ButtonInput/ButtonInput";
import DropdownInput from "../../../../ui/DropdownInput/DropdownInput";
import Subpanel from "../../Subpanel";
import ValueTable from "./table/ValueTable";

const PresetBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState(PRESET_TYPES[0]);
	const { value, setValue, podType } = usePodContext();
	const { isEditing } = useEditContext();
	if (!isEditing) return null;
	const setHelper = v => setValue(v.value);
	return (
		<div className="preset-box">
			<ButtonInput onClick={() => setIsOpen(!isOpen)} >{isOpen ? 'Done' : 'Load Preset'}</ButtonInput>
			{isOpen && (
				<table className="preset-table">
					<thead>
						<tr>
							<th>Type</th>
							<th>Preset</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<DropdownInput options={PRESET_TYPES} value={type} setValue={setType} />
							</td>
							<td>
								<DropdownInput options={type.presets} value={null} setValue={setHelper} />
							</td>
						</tr>
					</tbody>
				</table>
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
