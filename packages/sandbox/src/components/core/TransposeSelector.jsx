import { MODEL } from '@pw/core/src/models/Model.constants';
import { INTERVAL_VALUES } from '@pw/core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownInput from '../ui/inputs/DropdownInput';
import SubpanelFooter from '../ui/layout/SubpanelFooter';

const StyledTransposeSelector = styled.div`
	padding: 16px;

	select {
		width: 100%;
	}
`;

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

const DIRECTION_OPTIONS = [
	{
		value: 0,
		name: 'Ascending'
	},
	{
		value: 1,
		name: 'Descending'
	}
];

const TransposeSelector = ({ pathHead, setPathHead }) => {
	const [directionIndex, setDirectionIndex] = useState(0);
	const [intervalIndex, setIntervalIndex] = useState(0);

	const selectedDirectionOption = DIRECTION_OPTIONS[directionIndex];
	const selectedIntervalOption = INTERVAL_VALUES[intervalIndex];



	const onSubmit = () => {
		const initModelRoot = pathHead.modelRoot;
		const modelRoot = selectedDirectionOption.value === 0 ?
			PodUtils.addPod(initModelRoot, selectedIntervalOption.value) :
			PodUtils.subtractPod(initModelRoot, selectedIntervalOption.value);

		const { modelId, modelValue } = pathHead;
		const model = MODEL[modelId];

		setPathHead({
			modelRoot,
			name: model.utils.getName(modelValue, modelRoot),
			preview: model.utils.getPreview(modelValue, modelRoot)
		});
	};

	return (
		<>
			<StyledTransposeSelector>

				<StyledLabel>Direction: </StyledLabel>
				<DropdownInput options={DIRECTION_OPTIONS} value={selectedDirectionOption} setValue={(v, i) => setDirectionIndex(i)} />

				<StyledLabel>Interval: </StyledLabel>
				<DropdownInput options={INTERVAL_VALUES} value={selectedIntervalOption} setValue={(v, i) => setIntervalIndex(i)} />

			</StyledTransposeSelector>
			<SubpanelFooter onSubmit={onSubmit} />
		</>
	);
};

export default TransposeSelector;
