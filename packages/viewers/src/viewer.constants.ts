import { ICompleteModelDetails, IPreset } from './../../core/src/models/Model.constants';
import Fretboard from './Fretboard/Fretboard';
import { FRETBOARD_TUNING } from './Fretboard/Fretboard.api';
import Keyboard from './Keyboard/Keyboard';

export enum ViewerId {
    Fretboard = 'fretboard',
    Keyboard = 'keyboard'
}

export interface IViewerPreset {
    id: string;
    name: string;
    props: {
        matchOctave: boolean;
        [prop: string]: any;
    }
}

export interface IViewer {
    viewerId: ViewerId;
    component: any;
    presets: IViewerPreset[]
}

export interface IViewerState {
    viewerId: ViewerId;
    presetId: string;
}

export interface IViewerDetails extends IViewerState {
    component: any;
    viewerName: string;
    presetName: string;
    props: any;
}

export interface IViewerProps {
    details?: ICompleteModelDetails;
    matchOctave: boolean;
    hideLabel: boolean;
}

const formatPreset = (id: ViewerId, name: string, component: any, presets: IViewerPreset[]): IPreset<IViewer> => (
    {
        id,
        name,
        tags: [],
        value: {
            viewerId: id,
            component,
            presets
        }
    }
);

export const VIEWER_PRESET_MAP = new Map<ViewerId, IPreset<IViewer>>([
    [ViewerId.Fretboard, formatPreset(
        ViewerId.Fretboard,
        'Fretboard',
        Fretboard,
        [
            {
                id: 'guitar',
                name: 'Guitar, Standard',
                props: {
                    matchOctave: true,
                    fretRange: [0, 12],
                    tuning: FRETBOARD_TUNING.standard.value
                }
            },
            {
                id: 'bass',
                name: 'Bass, Standard',
                props: {
                    matchOctave: true,
                    fretRange: [0, 12],
                    tuning: FRETBOARD_TUNING.standard.value.slice(2)
                }
            }
        ]
    )],
    [ViewerId.Keyboard, formatPreset(
        ViewerId.Keyboard,
        'Keyboard',
        Keyboard,
        [
            {
                id: 'piano',
                name: 'Piano',
                props: {
                    matchOctave: true,
                    keyRange: [0, 12]
                }
            },
            {
                id: 'full_piano',
                name: 'Full Piano',
                props: {
                    matchOctave: true,
                    keyRange: [-44, 44]
                }
            }
        ]
    )]
]);

export const VIEWER_PRESETS = Array.from(VIEWER_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_VIEWER_ID = ViewerId.Fretboard;
export const DEFAULT_VIEWER_PRESET_ID = VIEWER_PRESET_MAP.get(DEFAULT_VIEWER_ID).value.presets[0].id;
