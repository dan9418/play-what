import NumberUtils from "../general/Number.utils";
import { DegreeId, DEGREE_PRESETS } from "../theory/Degree.constants";
import { ROOT_SCALE } from "../theory/Theory.constants";
import TuningUtils from "../tuning/Tuning.utils";
import {
  INotePreset,
  NoteId,
  NOTE_PRESETS,
  NOTE_PRESET_MAP,
} from "./Note.presets";
import { IPod, MAX_POD } from "./Pod.presets";
import { arePodsEqual, getDegree, reducePod } from "./Pod.utils";

interface INoteNameOptions {
  includeOctave?: boolean;
}

interface INoteNameParts {
  spelling: string;
  accidental: string;
  octave: number;
}

export const getNoteFromPod = (pod: IPod) => {
  return NOTE_PRESETS.find((note) => arePodsEqual(note, pod));
};

export const getNoteFromId = (id: NoteId) => {
  return NOTE_PRESET_MAP.get(id);
};

export const getNoteWithOctave = (noteId: NoteId, octave: number): IPod => {
  const notePreset = NOTE_PRESET_MAP.get(noteId) as INotePreset;
  return [
    (octave - 4) * 12 + NumberUtils.modulo(notePreset.value[0], 12),
    notePreset.value[1],
  ];
};

// export const  fromId = (presetId: string, octave = 4) => {
//   let sharps = (presetId.match(/-sharp/g) || []).length;
//   let flats = (presetId.match(/-flat/g) || []).length;
//   const nativeNoteId = presetId.slice(0, 1) as NoteId;
//   const nativePod = (NOTE_PRESET_MAP.get(nativeNoteId) as IModelConfig).value;
//   const octaveBasePitch =
//     typeof octave === "undefined" ? 0 : (octave - 4) * 12;
//   const pitch = octaveBasePitch + nativePod[0] + sharps - flats;
//   const pod = [pitch, nativePod[1]] as IPod;
//   //const pod = [NumberUtils.modulo(nativePod[0] + sharps - flats, 12), nativePod[1]] as IPod;
//   const note = new Note(pod);
//   note.modelType = ModelType.Pod;
//   note.presetType = PresetType.Note;
//   note.presetId = presetId as any;
//   note.name = getName();
//   note.pod = pod as IPod;
//   // @ts-ignore TODO
//   note.value = note.pod;
//   return note;
// };

export const getAccidentalOffset = (pod: IPod): number => {
  const [p, d] = reducePod(pod);

  let offset = p - ROOT_SCALE[d][0];

  // If offset spans more than half an octave, it's going the wrong way
  // TODO need to formally confirm this
  if (offset > 5) offset = offset - 12;
  if (offset < -5) offset = offset + 12;

  // Examples
  // if (d === 0 && offset === 11) offset = offset - 12;
  // if (d === 0 && offset === 10) offset = offset - 12;
  // if (d === 0 && offset === 9) offset = offset - 12;
  // if (d === 1 && offset === 9) offset = offset - 12;
  // if (d === 1 && offset === 8) offset = offset - 12;
  // if (d === 5 && offset === -9) offset = offset + 12;
  // if (d === 6 && offset === -11) offset = offset + 12;
  // if (d === 6 && offset === -10) offset = offset + 12;
  // if (d === 6 && offset === -9) offset = offset + 12;
  //console.log(`${p} - ${ROOT_SCALE[d][0]} = ${offset}, d = ${d}`);

  return offset;
};

export const getAccidentalString = (pod: IPod): string => {
  const offset = getAccidentalOffset(pod);
  if (offset > 0) {
    return ACCIDENTAL.sharp.symbol.repeat(offset);
  } else if (offset < 0) {
    return ACCIDENTAL.flat.symbol.repeat(-offset);
  }
  return "";
};

export const getPitch = (pod: IPod): number => {
  return pod[0];
};

export const getPitchClass = (pod: IPod): number => {
  return NumberUtils.modulo(getPitch(pod), MAX_POD[0]);
};

export const getOctave = (pod: IPod): number => {
  const midi = true;
  const raw = Math.floor(getPitch(pod) / 12);
  return midi ? raw + 4 : raw;
};

export const getDegreeId = (pod: IPod): DegreeId => {
  const degree = getDegree(pod);
  return DEGREE_PRESETS[degree].id;
};

export const getSpelling = (pod: IPod): string => {
  return getDegreeId(pod);
};

export const getNameParts = (pod: IPod): INoteNameParts => {
  const spelling = getSpelling(pod);
  const accidental = getAccidentalString(pod);
  const octave = getOctave(pod);
  return { spelling, accidental, octave };
};

export const getName = (pod: IPod, options: INoteNameOptions = {}): string => {
  const { spelling, accidental, octave } = getNameParts(pod);

  const o = options.includeOctave ? octave : "";
  return `${spelling}${accidental}${o}`;
};

export const getFrequency = (pod: IPod, format = false) => {
  const f = TuningUtils.getFrequency(getPitch(pod));
  return format ? `${f.toFixed(0)} Hz` : f;
};
