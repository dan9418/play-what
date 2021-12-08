import { IDataItem } from "../../../state/state";
import { ChordId, CHORD_PRESET_MAP } from "../Chord/Chord.constants";
import { NoteId, NOTE_PRESET_MAP } from "../Note/Note.constants";
import * as CHARTS from './Chart.presets';

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

const getChartListData = (config: IChartConfig): IDataItem[] => {
    const items = [];

    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];

        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [noteId, chordId, t] = chord;

            const root = NOTE_PRESET_MAP.get(noteId).value || [0, 0];
            const intervals = CHORD_PRESET_MAP.get(chordId).value || [];

            items.push({
                root,
                intervals
            });
            //...(new Array((t / 2) - 1).fill(<div className="rest" >/</div>))
        }
    }

    return items;
}

export const CHART_LIST_PRESETS = CHART_PRESETS.map(preset => ({
    ...preset,
    value: getChartListData(preset.value)
}));
