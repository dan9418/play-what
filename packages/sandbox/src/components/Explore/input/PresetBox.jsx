import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext from "../../contexts/EditContext";

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

export default PresetBox;
