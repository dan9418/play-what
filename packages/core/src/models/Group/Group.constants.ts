import { IModelPreset, IModelValue, ModelId } from '../Model.constants';
import * as CHART from './Group.charts';
import GroupUtils from './Group.utils';

export enum GroupId {
	AutumnLeaves = 'AutumnLeaves',
	BlueBossa = 'BlueBossa',
	AllOfMe = 'AllOfMe',
	ItCouldHappenToYou = 'ItCouldHappenToYou',
	SweetGeorgiaBrown = 'SweetGeorgiaBrown',
	SoWhat = 'SoWhat',
	OnGreenDolpinStreet = 'OnGreenDolpinStreet',
	HaveYouMetMissJones = 'HaveYouMetMissJones',
	AllTheThingsYouAre = 'AllTheThingsYouAre',
	StellaByStartlight = 'StellaByStartlight',
	OutOfNowhere = 'OutOfNowhere',
	ItsABlueWorld = 'ItsABlueWorld',
	AloneAgain = 'AloneAgain',
}

export const GROUP_MAP = new Map<GroupId, IModelPreset<IModelValue>>([
	[GroupId.AutumnLeaves, GroupUtils.getGroupPresetFromChartConfig(CHART.AUTUMN_LEAVES_CONFIG)],
	[GroupId.BlueBossa, GroupUtils.getGroupPresetFromChartConfig(CHART.BLUE_BOSSA_CONFIG)],
	[GroupId.AllOfMe, GroupUtils.getGroupPresetFromChartConfig(CHART.ALL_OF_ME_CONFIG)],
	[GroupId.ItCouldHappenToYou, GroupUtils.getGroupPresetFromChartConfig(CHART.IT_COULD_HAPPEN_TO_YOU_CONFIG)],
	[GroupId.SweetGeorgiaBrown, GroupUtils.getGroupPresetFromChartConfig(CHART.SWEET_GEORGIA_BROWN_CONFIG)],
	[GroupId.SoWhat, GroupUtils.getGroupPresetFromChartConfig(CHART.SO_WHAT_CONFIG)],
	[GroupId.OnGreenDolpinStreet, GroupUtils.getGroupPresetFromChartConfig(CHART.ON_GREEN_DOLPIN_STREET_CONFIG)],
	[GroupId.HaveYouMetMissJones, GroupUtils.getGroupPresetFromChartConfig(CHART.HAVE_YOU_MET_MISS_JONES_CONFIG)],
	[GroupId.AllTheThingsYouAre, GroupUtils.getGroupPresetFromChartConfig(CHART.ALL_THE_THINGS_YOU_ARE_CONFIG)],
	[GroupId.StellaByStartlight, GroupUtils.getGroupPresetFromChartConfig(CHART.STELLA_BY_STARLIGHT_CONFIG)],
	[GroupId.OutOfNowhere, GroupUtils.getGroupPresetFromChartConfig(CHART.OUT_OF_NOWHERE_CONFIG)],
	[GroupId.ItsABlueWorld, GroupUtils.getGroupPresetFromChartConfig(CHART.ITS_A_BLUE_WORLD_CONFIG)],
	[GroupId.AloneAgain, GroupUtils.getGroupPresetFromChartConfig(CHART.ALONE_AGAIN_CONFIG)]
]);

export const GROUP_PRESETS = Array.from(GROUP_MAP).map(([k, v]) => v);
