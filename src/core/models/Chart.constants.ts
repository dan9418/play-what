import * as CHARTS from './Chart.presets';
import Chord from './Chord';
import { ChordId, NoteId } from './Model.constants';
import { NOTE_PRESET_MAP } from './Model.presets';
import Note from './Note';

export type ISectionChord = [rootId: NoteId, chordId: ChordId, t: number];

export interface ISectionConfig {
    name: string;
    chords: ISectionChord[]
}

export interface IChartConfig {
    name: string;
    sections: ISectionConfig[]
}

export const CHART_PRESETS = Object.values(CHARTS).map(chart => {
    return {
        id: chart.name,
        name: chart.name,
        value: chart
    }
});

interface ISectionParsed {
    name: string;
    chords: Chord[]
}

export interface IChartParsed {
    name: string;
    sections: ISectionParsed[]
}

export const getParsedChart = (config: IChartConfig): IChartParsed => {
    const sections = [];

    for (let s = 0; s < config.sections.length; s++) {
        const sectionConfig = config.sections[s];
        const chords = [];

        for (let c = 0; c < sectionConfig.chords.length; c++) {
            const chordConfig = sectionConfig.chords[c];
            const [noteId, chordId, t] = chordConfig;

            const root = new Note(NOTE_PRESET_MAP.get(noteId).value || [0, 0]);
            const chord = new Chord(chordId, { root });

            chords.push(...(new Array(t / 2).fill(chord)));
        }
        sections.push({
            name: sectionConfig.name || 'Section',
            chords
        })
    }

    return {
        name: config.name,
        sections
    };
}
