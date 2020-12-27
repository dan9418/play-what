import { VIEWER_VALUES } from "@pw/react";
import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import DropdownInput from "@pw/react/src/ui/DropdownInput/DropdownInput";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import useOutputContext from "../../../../contexts/OutputContext";

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

const OutputPresetBox = () => {
	const [type, setType] = useState(VIEWER_VALUES[0]);
	const [preset, setPreset] = useState(VIEWER_VALUES[0].presets[0]);
	const { viewerProps, setViewerProps, viewerId, setViewerId } = useOutputContext();

	useEffect(() => {
		setPreset(type.presets[0]);
	}, [type.id]);

	const setHelper = () => {
		console.log(preset);
		setViewerId(type.id);
		setViewerProps(preset.value);
	};

	return (
		<StyledPresetBox>
			<table>
				<thead>
					<tr>
						<th>Viewer</th>
						<th>Preset</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<DropdownInput options={VIEWER_VALUES} value={type} setValue={setType} />
						</td>
						<td>
							<DropdownInput options={type.presets} value={preset} setValue={setPreset} />
						</td>
					</tr>
				</tbody>
			</table>
			<ButtonInput onClick={setHelper}>Update</ButtonInput>
		</StyledPresetBox>
	);
};

export default OutputPresetBox;
