import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import React, { useState } from "react";
import ButtonInput from "../../../ui/ButtonInput/ButtonInput";
import DropdownInput from "../../../ui/DropdownInput/DropdownInput";
import Subpanel from "../Subpanel";
import PodTable from "./table/PodTable";
import styled from 'styled-components';
import useEditContext from "../../../other/EditContext";

const StyledPresetBox = styled.div`
	padding: 8px;
	text-align: center;
	
	& button {
		width: 50%;
    margin: 8px;
	}

	& button {
		width: 50%;
		border-radius: 8px;
		text-transform: uppercase;
	}

	& table {
		margin: auto;
    	margin-top: 16px;
	}
`;

const PresetBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState(PRESET_TYPES[0]);
	const { isEditing } = useEditContext();
	if (!isEditing) return null;
	const setHelper = null; //v => setPods(v.value);
	return (
		<StyledPresetBox>
			<ButtonInput onClick={() => setIsOpen(!isOpen)} >{isOpen ? 'Done' : 'Load Preset'}</ButtonInput>
			{isOpen && (
				<table>
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
		</StyledPresetBox>
	);
};

const InputSubpanel = ({ name, i, inputs, setInputs }) => {
	return (
		<Subpanel
			name={name}
			data={inputs}
			setData={setInputs}
			i={i}
		>
			<PodTable />
			<PresetBox />
		</Subpanel>
	);
};

export default InputSubpanel;
