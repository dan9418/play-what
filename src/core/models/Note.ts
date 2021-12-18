import NumberUtils from '../general/Number.utils';
import { DEGREE_PRESETS } from '../theory/Degree.constants';
import { ROOT_SCALE } from '../theory/Theory.constants';
import TuningUtils from '../tuning/Tuning.utils';
import IntervalSpan from './Interval';
import Model from './Model';
import { ACCIDENTAL, IPod, NoteId } from './Model.constants';
import { NOTE_PRESETS, NOTE_PRESET_MAP } from './Model.presets';
import Pod from './Pod';
import { addPod } from './Pod.static';

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

    //getColor

    static fromValue = (value: IPod) => Model.fromValue(NOTE_PRESETS, Note, value);

    static fromRootedInterval = (root: Note, interval: IntervalSpan) => {
        const notePod = addPod(root.pod, interval.pod);
        const note = Model.fromValue(NOTE_PRESETS, Note, notePod);
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

    static getNameParts = (note: IPod, options: INoteNameOptions = {}): INoteNameParts => {
        const reducedValue = Note.reducePods(note);

        const d = reducedValue[1];
        const offset = this.getAccidentalOffset(reducedValue);
        const accidental = this.getAccidentalString(offset);
        const spelling = DEGREE_PRESETS[d].name;
        const octave = Pod.getOctave(note, true);
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
