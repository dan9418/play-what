import { ModelId } from '@pw/core/src/models/Model.constants';
import _ from 'lodash';
import React from "react";
import { IActionProps } from '../../shared/getActions';
import PresetAction from './PresetAction';

const RootAction: React.FC<IActionProps> = ({ pathHead, setPathHead }) => {

	const onSubmit = presetPathHead => {
		console.log(presetPathHead);
		const newData = _.cloneDeep(pathHead);
		//_.set(newData, '', presetPathHead.config.modelValue);
		//setPathHead(newData);
	};

	return (
		<>
			<PresetAction pathHead={pathHead} setPathHead={onSubmit} type={ModelId.Note} />
		</>
	);
};

export default RootAction;
