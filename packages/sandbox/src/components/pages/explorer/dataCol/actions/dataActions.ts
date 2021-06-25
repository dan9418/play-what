import { ModelId } from '@pw/core/src/models/Model.constants';
import { IModalAction } from '@pw/sandbox/src/components/ui/layout/Modal';
import PresetAction from './PresetAction';
import ProjectionAction from './ProjectionAction';
import RootAction from './RootAction';
import TransposeAction from './TransposeAction';

const DATA_ACTIONS: IModalAction[] = [
	{
		name: 'Set Root',
		description: 'Set the root note (key center) for intervals',
		component: RootAction,
		validTypes: [ModelId.Chord, ModelId.Scale]
	},
	{
		name: 'Load Preset',
		description: 'Import an existing model',
		component: PresetAction
	},
	{
		name: 'Transpose',
		description: 'Shift all the notes by the same amount',
		component: TransposeAction,
		validTypes: [ModelId.Note, ModelId.Chord, ModelId.Scale]
	},
	{
		name: 'Apply Projection',
		description: 'Superimpose additional pods over these pods',
		component: ProjectionAction,
		validTypes: [ModelId.Chord, ModelId.Scale]
	}
];

export default DATA_ACTIONS;
