import { ReactNode } from 'react';
import { ICompleteModelDetails, InputId, IPreset, PodType } from './../../../core/src/models/Model.constants';
import Fretboard from './fretboard/Fretboard';
import { FRETBOARD_TUNING_VALUES } from './fretboard/Fretboard.api';
import DEFAULT_FRETBOARD_PROPS from './fretboard/Fretboard.defaults';

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
    podType?: PodType;
}

export interface IViewer {
    viewerId: ViewerId;
    component: any;
    defaultProps: IViewerProps;
}

export interface IViewerDetails {
    viewerId: ViewerId;
    component: ReactNode;
    viewerName: string;
    props: IViewerProps;
}

export enum LabelBy {
    None = 'none',
    Note = 'note',
    Interval = 'interval'
}

export const LABEL_BY_OPTIONS = [
    {
        id: LabelBy.Interval,
        value: LabelBy.Interval,
        name: 'Interval'
    },
    {
        id: LabelBy.Note,
        value: LabelBy.Note,
        name: 'Note'
    },
    {
        id: LabelBy.None,
        value: LabelBy.None,
        name: 'None'
    }
];

const formatPreset = (id: ViewerId, name: string, component: any, defaultProps: IViewerProps): IPreset<IViewer> => (
    {
        id,
        name,
        tags: [],
        value: {
            viewerId: id,
            component,
            defaultProps
        }
    }
);

export const VOICING_INPUTS = [
    {
        propName: 'Match Octave',
        propId: 'matchOctave',
        inputId: InputId.Switch
    }
];

export const FRETBOARD_INPUTS = [
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
        propName: 'Show Fret Numbers',
        propId: 'showFretNumbers',
        inputId: InputId.Switch
    },
    {
        propName: 'Show Fret Dots',
        propId: 'showFretDots',
        inputId: InputId.Switch
    }
];

export const LABEL_INPUTS = [
    {
        propName: 'Label By',
        propId: 'labelBy',
        inputId: InputId.Dropdown,
        inputProps: {
            options: LABEL_BY_OPTIONS
        },
        useValueProperty: true
    }
];

export const FRETBOARD_CONFIG = formatPreset(
    ViewerId.Fretboard,
    'Fretboard',
    Fretboard,
    DEFAULT_FRETBOARD_PROPS
)

export const DEFAULT_VIEWER_ID = ViewerId.Fretboard;
