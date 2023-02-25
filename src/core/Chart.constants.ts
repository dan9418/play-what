import * as CHARTS from "./Chart.presets";
import { ChordId, IChordPreset } from "./Chord.presets";
import { getSymbol } from "./Chord.utils";
import { NoteId } from "./Note.presets";
import { getNoteFromId } from "./Note.utils";

export type ISectionChord = [rootId: NoteId, chordId: ChordId, t: number];

export interface ISectionConfig {
  name: string;
  chords: ISectionChord[];
}

export interface IChartConfig {
  name: string;
  sections: ISectionConfig[];
  keyCenter: NoteId;
}

export const CHART_PRESETS = Object.values(CHARTS).map((chart) => {
  return {
    presetId: chart.name,
    name: chart.name,
    value: chart,
  };
});

interface IChordItem {
  t?: number;
  rootName: string;
  structureName: string;
  chord: IChordPreset;
}

interface ISectionParsed {
  name: string;
  chords: IChordItem[];
}

export interface IChartParsed {
  name: string;
  sections: ISectionParsed[];
  keyCenter: NoteId;
}

export const getParsedChart = (config: IChartConfig): IChartParsed => {
  const sections: any[] = [];

  for (let s = 0; s < config.sections.length; s++) {
    const sectionConfig = config.sections[s];
    const chords: any[] = [];

    for (let c = 0; c < sectionConfig.chords.length; c++) {
      const chordConfig = sectionConfig.chords[c];
      const [noteId, chordId, t] = chordConfig;

      const chord = new Chord(chordId, { root: getNoteFromId(noteId) });

      chords.push({
        t,
        rootName: noteId,
        structureName: getSymbol(chordId),
        chord,
      });
      //chords.push(...(new Array(t / 2).fill(chord)));
    }
    sections.push({
      name: sectionConfig.name || "Section",
      chords,
    });
  }

  return {
    ...config,
    sections,
  };
};
