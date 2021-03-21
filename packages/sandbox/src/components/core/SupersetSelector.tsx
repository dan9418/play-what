import { MODEL } from '@pw/core/src/models/Model.constants';
import React from "react";
import ButtonInput from '../ui/inputs/buttons/ButtonInput';
import DropdownInput from '../ui/inputs/DropdownInput';

const SupersetSelector = ({ modelId, modelValue, modelOptions, pathHead, setPathHead }) => {
	const [index, setIndex] = React.useState(0);

	const model = MODEL[modelId];
	const supersets = model.utils.findSupersets ? model.utils.findSupersets(modelValue, modelOptions) : [];

	const none = {
		name: 'None',
		modelId,
		modelOptions,
		modelValue: []
	};

	supersets.unshift(none);

	const value = supersets[index];
	const setSelection = (v, i) => setIndex(i);

	const onSubmit = () => {
		setPathHead({
			...pathHead,
			modelOptions: {
				...pathHead.modelOptions
				// TODO
			}
		});
	};

	return (
		<>
			<DropdownInput options={supersets} value={value} setValue={setSelection} />
			<ButtonInput onClick={onSubmit}>Apply</ButtonInput>
		</>
	);
};

export default SupersetSelector;
