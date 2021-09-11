import { NoteId } from "../Pod/Note/Note.constants";
import { ChordId } from "../PodList/Chord/Chord.constants";
import * as _CHARTS from './Chart.presets';

export type ISectionChord = [rootId: NoteId, chordId: ChordId, t: number];

export interface ISectionConfig {
    name: string;
    chords: ISectionChord[]
}

export interface IChartConfig {
    name: string;
    sections: ISectionConfig[]
}

export const CHARTS = _CHARTS;
