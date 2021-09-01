import { ReactNode } from 'react';
import { ICompleteModelDetails, InputId, IPreset, PodType } from './../../core/src/models/Model.constants';
import Fretboard from './Fretboard/Fretboard';
import { FRETBOARD_TUNING_VALUES } from './Fretboard/Fretboard.api';
import DEFAULT_FRETBOARD_PROPS from './Fretboard/Fretboard.defaults';
import Keyboard from './Keyboard/Keyboard';
import DEFAULT_KEYBOARD_PROPS from './Keyboard/Keyboard.defaults';

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
    },
    useValueProperty?: boolean;
}

export interface IViewerProps {
    details?: ICompleteModelDetails;
    matchOctave?: boolean;
    hideLabel?: boolean;
    podType?: PodType;
}

export interface IViewer {
    viewerId: ViewerId;
    component: any;
    defaultProps: IViewerProps;
    inputs: IViewerInputConfig[];
    presets: IViewerPreset[]
}

export interface IViewerDetails {
    viewerId: ViewerId;
    component: ReactNode;
    viewerName: string;
    props: IViewerProps;
}

const formatPreset = (id: ViewerId, name: string, component: any, defaultProps: IViewerProps, inputs: IViewerInputConfig[], presets?: IViewerPreset[]): IPreset<IViewer> => (
    {
        id,
        name,
        tags: [],
        value: {
            viewerId: id,
            component,
            defaultProps,
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
        DEFAULT_FRETBOARD_PROPS,
        [
            {
                propName: 'Tuning',
                propId: 'tuning',
                inputId: InputId.Dropdown,
                inputProps: {
                    options: FRETBOARD_TUNING_VALUES
                },
                useValueProperty: true
            },
            {
                propName: 'Fret Range',
                propId: 'fretRange',
                inputId: InputId.Range,
                inputProps: {
                    min: 0,
                    max: 24
                }
            },
            {
                propName: 'Match Octave',
                propId: 'matchOctave',
                inputId: InputId.Switch
            },
            {
                propName: 'Hide Labels',
                propId: 'hideLabel',
                inputId: InputId.Switch
            }
        ]
    )],
    [ViewerId.Keyboard, formatPreset(
        ViewerId.Keyboard,
        'Keyboard',
        Keyboard,
        DEFAULT_KEYBOARD_PROPS as any,
        [
            {
                propName: 'Key Range',
                propId: 'keyRange',
                inputId: InputId.Range
            }
        ]
    )]
]);

export const VIEWER_PRESETS = Array.from(VIEWER_PRESET_MAP).map(([k, v]) => v);

export const DEFAULT_VIEWER_ID = ViewerId.Fretboard;
