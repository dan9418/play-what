import PresetAction from './PresetAction';
import ProjectionAction from './ProjectionAction';
import TransposeAction from './TransposeAction';

const DATA_ACTIONS = [
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
