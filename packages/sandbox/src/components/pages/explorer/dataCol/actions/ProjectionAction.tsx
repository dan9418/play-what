import ModelUtils from '@pw/core/src/models/Model.utils';
import { IPod } from 'core/src/models/Model.constants';
import _ from 'lodash';
import React, { useEffect, useState } from "react";
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';
import { IActionProps } from '../../shared/getActions';

const ProjectionAction: React.FC<IActionProps> = ({ pathHead, setPathHead }) => {
	const { modelId, modelValue, modelOptions } = pathHead.config;

	const [index, setIndex] = React.useState(0);

	const supersetOptions = ModelUtils.getSupersets(modelId, modelValue as IPod[], modelOptions);

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

		setPathHead(copy);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<DropdownInput options={supersetOptions} value={selectedValue} setValue={setSelection} />
		</ActionForm>
	);
};

export default ProjectionAction;
