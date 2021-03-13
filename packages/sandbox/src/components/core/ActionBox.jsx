import React from 'react';
import styled from 'styled-components';
import PresetSelector from './PresetSelector';
import SupersetSelector from './SupersetSelector';

const StyledActionList = styled.ul`
	display: flex;
	> li {
		padding: 8px;
		color: darkblue;
		padding-right: 8px;
		cursor: pointer;
	}
`;

const StyledActionBox = styled.div`
	padding: 8px;
`;

const ActionBox = ({ modelId, modelValue, modelRoot, setModel, setSuperset }) => {

	return (
		<StyledActionBox>
			<StyledActionList>
				<li>Load Preset</li>
				<li>Apply Superset</li>
				<li>Transpose</li>
				<li>Inversion</li>
			</StyledActionList>

			<PresetSelector modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setModel={setModel} />
			<SupersetSelector modelId={modelId} modelValue={modelValue} modelRoot={modelRoot} setSuperset={setSuperset} />
		</StyledActionBox>
	);
};

export default ActionBox;
