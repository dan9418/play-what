import { IChartConfig } from "./Chart.constants";
import { IChordPreset } from "./Chord.constants";
import { getSymbol } from "./Chord.utils";
import { NoteId } from "./Note.constants";
import { getNoteFromId } from "./Note.utils";

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
