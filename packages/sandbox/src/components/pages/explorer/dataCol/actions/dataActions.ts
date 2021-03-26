import PresetAction from './PresetAction';
import SupersetAction from './SupersetAction';
import TransposeAction from './TransposeAction';
import RootAction from './RootAction';

const DATA_ACTIONS = [
	{
		name: 'Change Key',
		description: 'Set the root note (key center)',
		component: RootAction
	},
	{
		name: 'Load Preset',
		description: 'Import an existing model',
		component: PresetAction
	},
	{
		name: 'Transpose',
		description: 'Shift all the notes by the same amount',
		component: TransposeAction
	},
	{
		name: 'Apply Superset',
		description: 'Superimpose a model containing these pods',
		component: SupersetAction
	}
];

export default DATA_ACTIONS;