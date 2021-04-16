import { INTERVAL_PRESETS } from '@pw/core/src/models/Pod/Interval/Interval.constants';
import PodUtils from '@pw/core/src/models/Pod/Pod.utils';
import _ from 'lodash';
import React, { useEffect } from "react";
import styled from 'styled-components';
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';
import { IActionProps } from '../../shared/getActions';

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

const PRESETS = INTERVAL_PRESETS.filter(ivl => ivl.value[0])

const TransposeAction: React.FC<IActionProps> = ({ pathHead, setPathHead }) => {
	const [directionIndex, setDirectionIndex] = React.useState(0);
	const [intervalIndex, setIntervalIndex] = React.useState(0);
	const [root, setRoot] = React.useState(pathHead.config.modelOptions.modelRoot);

	const selectedDirectionOption = DIRECTION_OPTIONS[directionIndex];
	const selectedIntervalOption = PRESETS[intervalIndex];

	console.log('dpb');

	const onSubmit = () => {
		const modelRoot = selectedDirectionOption.value === 0 ?
			PodUtils.addPod(root, selectedIntervalOption.value) :
			PodUtils.subtractPod(root, selectedIntervalOption.value);

		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'config.modelOptions.modelRoot', modelRoot);
		setPathHead(newData);
		setRoot(modelRoot);
	};


	return (
		<ActionForm onSubmit={onSubmit}>

			<StyledLabel>Direction: </StyledLabel>
			<DropdownInput options={DIRECTION_OPTIONS} value={selectedDirectionOption} setValue={(v, i) => setDirectionIndex(i)} />

			<StyledLabel>Interval: </StyledLabel>
			<DropdownInput options={PRESETS} value={selectedIntervalOption} setValue={(v, i) => setIntervalIndex(i)} />

		</ActionForm>
	);
};

export default TransposeAction;
