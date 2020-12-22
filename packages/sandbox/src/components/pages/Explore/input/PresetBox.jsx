import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React, { useState } from "react";
import styled from 'styled-components';

const StyledPresetBox = styled.div`
	text-align: center;
	
	& button {
		width: 50%;
    	margin: 8px 0;
	}

	& table {
		margin: auto;
	}

	& th, td {
		padding: 8px;
	}
`;

const PresetBox = () => {
	const [type, setType] = useState(PRESET_TYPES[0]);
	const setHelper = null; //v => setPods(v.value);
	return (
		<StyledPresetBox>
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
			<ButtonInput>Import</ButtonInput>
		</StyledPresetBox>
	);
};

export default PresetBox;
