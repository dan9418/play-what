import { PRESET_TYPES } from "@pw/core/src/Pod.presets";
import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import useInputContext from "../../../../contexts/InputContext";

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

const InputPresetBox = () => {
	const [type, setType] = useState(PRESET_TYPES[0]);
	const [preset, setPreset] = useState(PRESET_TYPES[0].presets[0]);
	const { intervals, setIntervals, notes, setNotes, podType } = useInputContext();

	const pods = podType === 'interval' ? intervals : notes;
	const setPods = podType === 'interval' ? setIntervals : setNotes;
	const setHelper = () => setPods(preset.value);

	useEffect(() => {
		setPreset(type.presets[0]);
	}, [type.id]);

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
							<DropdownInput options={type.presets} value={preset} setValue={setPreset} />
						</td>
					</tr>
				</tbody>
			</table>
			<ButtonInput onClick={setHelper}>Import</ButtonInput>
		</StyledPresetBox>
	);
};

export default InputPresetBox;
