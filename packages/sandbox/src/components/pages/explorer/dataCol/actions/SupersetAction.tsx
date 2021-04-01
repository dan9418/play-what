import ModelUtils from '@pw/core/src/models/Model.utils';
import _ from 'lodash';
import React, { useEffect, useState } from "react";
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';

const SupersetAction = ({ pathHead, setPathHeadConfig }) => {
	const { modelId, modelValue, modelOptions } = pathHead.config;

	const [index, setIndex] = React.useState(0);

	const supersetOptions = ModelUtils.getSupersets(modelId, modelValue, modelOptions);

	console.log('supersets', supersetOptions.length, modelId, modelValue, modelOptions);

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

	supersetOptions.unshift(none);

	const selectedValue = supersetOptions[index];
	const setSelection = (v, i) => setIndex(i);

	const onSubmit = () => {
		const copy = _.cloneDeep(pathHead);
		const modelValueCopy = _.cloneDeep(selectedValue.modelValue);
		const projection = { podList: modelValueCopy };
		_.set(copy, 'config.modelOptions.projection', projection);

		setPathHeadConfig(copy.config);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<DropdownInput options={supersetOptions} value={selectedValue} setValue={setSelection} />
		</ActionForm>
	);
};

export default SupersetAction;
