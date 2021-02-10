import Fretboard from './Fretboard/Fretboard';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';

import _ButtonInput from './ui/ButtonInput/ButtonInput';
import _DropdownInput from './ui/DropdownInput/DropdownInput';
import _NumericInput from './ui/NumericInput/NumericInput';
import _SwitchInput from './ui/SwitchInput/SwitchInput';

export const VIEWER = {
	fretboard: {
		id: 'fretboard',
		name: 'Fretboard',
		component: Fretboard,
		panelComponent: FretboardPanel,
		presets: [
			{
				id: 'default',
				name: 'Guitar',
				value: DEFAULT_FRETBOARD_PROPS
			},
			{
				id: 'bass',
				name: 'Bass',
				value: {
					...DEFAULT_FRETBOARD_PROPS,
					tuning: DEFAULT_FRETBOARD_PROPS.tuning.slice(0, 4)
				}
			}
		]
	}
};

export const VIEWER_VALUES = Object.values(VIEWER);

export const ButtonInput = _ButtonInput;
export const DropdownInput = _DropdownInput;
export const NumericInput = _NumericInput;
export const SwitchInput = _SwitchInput;
