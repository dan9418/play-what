import { MODEL_ID } from '@pw/core/src/models/Model.constants';
import _ from 'lodash';
import React from "react";
import PresetSelector from '../core/PresetSelector';

const RootSubpanel = ({ pathHead, setPathHead }) => {

	const onSubmit = root => {
		console.log(root);
		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'modelOptions.modelRoot', root.modelValue);
		setPathHead(newData);
	};

	return (
		<>
			<PresetSelector pathHead={pathHead} setPathHead={onSubmit} type={MODEL_ID.Note} />
		</>
	);
};

export default RootSubpanel;
