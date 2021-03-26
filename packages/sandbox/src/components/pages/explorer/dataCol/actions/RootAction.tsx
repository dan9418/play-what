import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import _ from 'lodash';
import React from "react";
import PresetAction from './PresetAction';

const RootAction = ({ pathHead, setPathHead }) => {

	const onSubmit = root => {
		console.log(root);
		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'modelOptions.modelRoot', root.modelValue);
		setPathHead(newData);
	};

	return (
		<>
			<PresetAction pathHead={pathHead} setPathHead={onSubmit} type={MODEL_ID.Note} />
		</>
	);
};

export default RootAction;
