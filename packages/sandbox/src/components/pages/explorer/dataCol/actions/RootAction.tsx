import { ModelId } from '@pw/core/src/models/Model.constants';
import _ from 'lodash';
import React from "react";
import PresetAction from './PresetAction';

const RootAction = ({ pathHead, setPathHeadConfig }) => {

	const onSubmit = root => {
		console.log(root);
		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'modelOptions.modelRoot', root.modelValue);
		setPathHeadConfig(newData);
	};

	return (
		<>
			<PresetAction pathHead={pathHead} setPathHeadConfig={onSubmit} type={ModelId.Note} />
		</>
	);
};

export default RootAction;
