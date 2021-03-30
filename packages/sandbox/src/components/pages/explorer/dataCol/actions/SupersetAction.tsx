import ModelUtils from '@pw/core/src/models/Model.utils';
import _ from 'lodash';
import React from "react";
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';

const SupersetAction = ({ pathHead, setPathHeadConfig }) => {
	const { modelId, modelValue, modelOptions } = pathHead.config;

	const [index, setIndex] = React.useState(0);

	const supersets = ModelUtils.getSupersets(modelId, modelValue, modelOptions);

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
		_.set(newData, 'config.modelOptions.superset', value);

		setPathHeadConfig(newData);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<DropdownInput options={supersets} value={value} setValue={setSelection} />
		</ActionForm>
	);
};

export default SupersetAction;
