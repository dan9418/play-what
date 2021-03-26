import { MODEL } from '@pw/core/src/models/Model.constants';
import _ from 'lodash';
import React from "react";
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';

const SupersetAction = ({ pathHead, setPathHead }) => {
	const { modelId, modelValue, modelOptions } = pathHead.config;

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
		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'modelOptions.superset', value);

		setPathHead(newData);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<DropdownInput options={supersets} value={value} setValue={setSelection} />
		</ActionForm>
	);
};

export default SupersetAction;
