import { IModelPreset, IModelValue } from '../Model.constants';
import GroupUtils from './Group.utils';
import * as CHART from './Group.charts';

export enum GroupPresetId {
	AllOfMe = 'AllOfMe'
}

export const GROUP: { [x: string]: IModelPreset<IModelValue> } = {
	[GroupPresetId.AllOfMe]: GroupUtils.getGroupPresetFromChartConfig(CHART.ALL_OF_ME_CONFIG)
};

export const GROUP_VALUES = Object.values(GROUP);
