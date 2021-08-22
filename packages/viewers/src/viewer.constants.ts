import { IPreset } from './../../core/src/models/Model.constants';
import Fretboard from './Fretboard/Fretboard';
import { FRETBOARD_TUNING } from './Fretboard/Fretboard.api';
import Keyboard from './Keyboard/Keyboard';

export enum ViewerId {
    Guitar = 'fretboard_guitar_standard',
    Bass = 'fretboard_bass_standard',
    Piano = 'keyboard_piano_standard'
}

const formatPreset = (id: ViewerId, name: string, value: any) => ({ id, name, value });

export const VIEWER_PRESET_MAP = new Map<ViewerId, IPreset<any>>([
    [ViewerId.Guitar, formatPreset(ViewerId.Guitar, 'Guitar', {
        component: Fretboard,
        props: {
            fretRange: [0, 12],
            tuning: FRETBOARD_TUNING.standard.value
        }

    })],
    [ViewerId.Bass, formatPreset(ViewerId.Bass, 'Bass', {
        component: Fretboard,
        props: {
            fretRange: [0, 12],
            tuning: FRETBOARD_TUNING.standard.value.slice(2)
        }
    })],
    [ViewerId.Piano, formatPreset(ViewerId.Piano, 'Piano', {
        component: Keyboard,
        props: {
            keyRange: [-12, 12]
        }
    })]
]);

export const VIEWER_PRESETS = Array.from(VIEWER_PRESET_MAP).map(([k, v]) => v);
