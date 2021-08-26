import { ReactNode } from 'react';
import { ICompleteModelDetails, InputId, IPreset, PodType } from './../../core/src/models/Model.constants';
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
        [prop: string]: any;
    }
}

export interface IViewerInputConfig {
    propId: string;
    inputId: InputId;
    propName: string;
    inputProps?: {
        [prop: string]: any
    }
}

export interface IViewer {
    viewerId: ViewerId;
    component: any;
    inputs: IViewerInputConfig[];
    presets: IViewerPreset[]
}

export interface IViewerDetails {
    viewerId: ViewerId;
    component: ReactNode;
    viewerName: string;
    props: IViewerProps;
}

export interface IViewerProps {
    details?: ICompleteModelDetails;
    matchOctave?: boolean;
    hideLabel?: boolean;
    podType?: PodType;
}

const formatPreset = (id: ViewerId, name: string, component: any, inputs: IViewerInputConfig[], presets: IViewerPreset[]): IPreset<IViewer> => (
    {
        id,
        name,
        tags: [],
        value: {
            viewerId: id,
            component,
            inputs,
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
                propName: 'Match Octave',
                propId: 'matchOctave',
                inputId: InputId.Switch
            },
            {
                propName: 'Hide Label',
                propId: 'hideLabel',
                inputId: InputId.Switch
            }
            /*{
                propId: 'fretRange',
                inputId: InputId.Range
            }*/
        ],
        [
            {
                id: 'guitar',
                name: 'Guitar, Standard',
                props: {}
            },
            {
                id: 'bass',
                name: 'Bass, Standard',
                props: {
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
        ],
        [
            {
                id: 'piano',
                name: 'Piano, Small',
                props: {
                    keyRange: [0, 12]
                }
            },
            {
                id: 'piano_medium',
                name: 'Piano, Medium',
                props: {
                    keyRange: [-12, 12]
                }
            },
            {
                id: 'piano_full',
                name: 'Piano, Full',
                props: {
                    keyRange: [-44, 44]
                }
            }
        ]
    )]
]);

export const VIEWER_PRESETS = Array.from(VIEWER_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_VIEWER_ID = ViewerId.Fretboard;
export const DEFAULT_VIEWER_PRESET_ID = VIEWER_PRESET_MAP.get(DEFAULT_VIEWER_ID).value.presets[0].id;
