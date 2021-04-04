import PresetAction from './PresetAction';
import ProjectionAction from './ProjectionAction';
import TransposeAction from './TransposeAction';
import RootAction from './RootAction';

const DATA_ACTIONS = [
	{
		name: 'Set Root',
		description: 'Set the root note (key center) for intervals',
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
		name: 'Apply Projection',
		description: 'Superimpose additional pods over these pods',
		component: ProjectionAction
	}
];

export default DATA_ACTIONS;
