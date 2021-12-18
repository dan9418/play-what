import NumberUtils from '../general/Number.utils';
import { DEFAULT_DEGREE_COLOR_SCHEME, DEGREE_PRESETS } from '../theory/Degree.constants';
import { ROOT_SCALE } from '../theory/Theory.constants';
import TuningUtils from '../tuning/Tuning.utils';
import IntervalSpan from './Interval';
import Model from './Model';
import { ACCIDENTAL, IntervalId, IPod, NoteId } from './Model.constants';
import { NOTE_PRESETS, NOTE_PRESET_MAP } from './Model.presets';
import Pod from './Pod';
import { addPod, arePodsEqual, reducePod } from './Pod.static';

interface INoteNameOptions {
    includeOctave?: boolean;
}

interface INoteNameParts {
    spelling: string;
    accidental: string;
    octave: number;
}

export default class Note extends Pod {

    id: NoteId;
    root?: Note;
    interval?: IntervalSpan;

    constructor(id: NoteId) {
        super(NOTE_PRESET_MAP, id);
    }

    getAccidentalOffset(): number {
        return Note.getAccidentalOffset(this.pod);
    };

    getColor(useBinaryColorScheme = false): string | undefined {
        if (!this.interval || !this.root) return;

        if (useBinaryColorScheme) {
            return this.interval.equals(new IntervalSpan(IntervalId.P1)) ? 'red' : '#333';
        }

        return DEFAULT_DEGREE_COLOR_SCHEME[this.interval.pod[1]];
    }

    static fromValue = (value: IPod) => Model.fromValue(NOTE_PRESETS, Note, value, arePodsEqual, reducePod);

    static fromRootedInterval = (root: Note, interval: IntervalSpan) => {
        const notePod = addPod(root.pod, interval.pod);
        const note = Note.fromValue(notePod);
        note.root = root;
        note.interval = interval;
        return note;
    }

    static getAccidentalOffset = (pod: IPod): number => {
        const [p, d] = pod;

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
    }

    static getAccidentalString = (offset: number): string => {
        if (offset > 0) {
            return ACCIDENTAL.sharp.symbol.repeat(offset);
        }
        else if (offset < 0) {
            return ACCIDENTAL.flat.symbol.repeat(-offset);
        }
        return '';
    };

    static createPod = (degree: number, accidental: number, octave: number): IPod => {
        const pitchClass = NumberUtils.modulo(ROOT_SCALE[degree][0] + accidental, 12);
        const pitch = (octave * 12) + pitchClass;
        return [pitch, degree];
    }

    /*static getPitchClass = (pod: IPod): number => {
        return NumberUtils.modulo(pod[0], MAX_POD[0]);
    }*/

    static getOctave = (pod: IPod, midi = false): number => {
        const raw = Math.floor(pod[0] / 12);
        return midi ? raw + 4 : raw;
    }

    /*static getDegree = (pod: IPod): number => {
        return NumberUtils.modulo(pod[1], MAX_POD[1]);
    }*/

    static getNameParts = (note: IPod, options: INoteNameOptions = {}): INoteNameParts => {
        const reducedValue = reducePod(note);

        const d = reducedValue[1];
        const offset = this.getAccidentalOffset(reducedValue);
        const accidental = this.getAccidentalString(offset);
        const spelling = DEGREE_PRESETS[d].name;
        const octave = this.getOctave(note, true);
        return { spelling, accidental, octave };
    }

    getName = (options: INoteNameOptions = {}): string => {
        const { spelling, accidental, octave } = Note.getNameParts(this.pod, options);

        const o = options.includeOctave ? octave : '';
        return `${spelling}${accidental}${o}`;
    }

    getFrequency = () => {
        return `${TuningUtils.getFrequency(this.pod[0])}Hz`;
    }
}
