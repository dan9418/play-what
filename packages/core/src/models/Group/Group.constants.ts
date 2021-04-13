import { IModelPreset, IModelValue, ModelId } from '../Model.constants';
import GroupUtils from './Group.utils';
import * as CHART from './Group.charts';

export enum GroupId {
	AllOfMe = 'AllOfMe'
}

export const GROUP_MAP = new Map<GroupId, IModelPreset<IModelValue>>([
	[GroupId.AllOfMe, GroupUtils.getGroupPresetFromChartConfig(CHART.ALL_OF_ME_CONFIG)]
]);

export const GROUP_PRESETS = Array.from(GROUP_MAP).map(([k, v]) => v);

export const EMPTY_GROUP = {
	modelId: ModelId.Group,
	modelOptions: { name: 'Custom Group' },
	modelValue: []
}
