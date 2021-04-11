import { IModelPreset, IModelValue } from '../Model.constants';
import GroupUtils from './Group.utils';
import * as CHART from './Group.charts';

export enum GroupId {
	AllOfMe = 'AllOfMe'
}

export const GROUP_MAP = new Map<GroupId, IModelPreset<IModelValue>>([
	[GroupId.AllOfMe, GroupUtils.getGroupPresetFromChartConfig(CHART.ALL_OF_ME_CONFIG)]
]);

export const GROUP_PRESETS = Object.values(GROUP_MAP);
