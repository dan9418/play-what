import ModelUtils from '@pw/core/src/models/Model.utils';
import _ from 'lodash';
import React, { useEffect, useState } from "react";
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';

const SupersetAction = ({ pathHead, setPathHeadConfig }) => {
	const { modelId, modelValue, modelOptions } = pathHead.config;

	const [index, setIndex] = React.useState(0);

	const supersets = ModelUtils.getSupersets(modelId, modelValue, modelOptions);

	/*useEffect(() => {
		const val = ModelUtils.getSupersets(modelId, modelValue, modelOptions);
		setSupersets(val);
	}, [pathHead]);*/

	const none = {
		id: 'None',
		name: 'None',
		modelId,
		modelOptions,
		modelValue: []
	};

	supersets.unshift(none);

	const value = supersets[index];
	const setSelection = (v, i) => setIndex(i);

	const onSubmit = () => {
		const copy = _.cloneDeep(pathHead);
		const valueCopy = _.cloneDeep(value);
		_.set(copy, 'config.modelOptions.superset', valueCopy);

		setPathHeadConfig(copy.config);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<DropdownInput options={supersets} value={value} setValue={setSelection} />
		</ActionForm>
	);
};

export default SupersetAction;
