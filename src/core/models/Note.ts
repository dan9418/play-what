import NumberUtils from '../general/Number.utils';
import { DegreeId, DEGREE_PRESETS } from '../theory/Degree.constants';
import { DEFAULT_PITCH_COLOR_SCHEME } from '../theory/Pitch.constants';
import { ROOT_SCALE } from '../theory/Theory.constants';
import TuningUtils from '../tuning/Tuning.utils';
import { toDashedCase } from './../general/String.utils';
import { ACCIDENTAL, IPod, MAX_POD, NoteId } from './Model.constants';
import { NOTE_PRESET_MAP } from './Model.presets';
import Pod from './Pod';
import { reducePod } from './Pod.static';

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

    constructor(pod: IPod) {
        super(undefined);
        this.pod = pod;
        this.tags = []; // TODO
        this.name = this.getName();
        this.id = toDashedCase(this.name) as any;
    }

    static fromId = (id: string) => {
        let sharps = (id.match(/-sharp/g) || []).length;
        let flats = (id.match(/-flat/g) || []).length;
        const nativeNoteId = id.slice(0, 1) as NoteId;
        const notePreset = NOTE_PRESET_MAP.get(nativeNoteId).value;
        const note = new Note(notePreset);
        const pod = [NumberUtils.modulo(note.pod[0] + sharps - flats, 12), note.pod[1]]
        note.pod = pod as IPod;
        // @ts-ignore TODO
        note.value = note.pod;
        note.id = id as any;
        return note;
    }

    getColor(): string | undefined {
        return DEFAULT_PITCH_COLOR_SCHEME[this.getPitch()];
    }

    getAccidentalOffset(): number {
        const [p, d] = reducePod(this.pod);

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

    getAccidentalString(): string {
        const offset = this.getAccidentalOffset();
        if (offset > 0) {
            return ACCIDENTAL.sharp.symbol.repeat(offset);
        }
        else if (offset < 0) {
            return ACCIDENTAL.flat.symbol.repeat(-offset);
        }
        return '';
    };

    getPitch(): number {
        return this.pod[0];
    }

    getPitchClass(): number {
        return NumberUtils.modulo(this.getPitch(), MAX_POD[0]);
    }

    getOctave(): number {
        const midi = false;
        const raw = Math.floor(this.getPitch() / 12);
        return midi ? raw + 4 : raw;
    }

    getDegreeId(): DegreeId {
        const degree = this.getDegree();
        return DEGREE_PRESETS[degree].id;
    }

    getSpelling(): string {
        return this.getDegreeId();
    }

    getNameParts(): INoteNameParts {
        const accidental = this.getAccidentalString();
        const spelling = this.getSpelling();
        const octave = this.getOctave();
        return { spelling, accidental, octave };
    }

    getName = (options: INoteNameOptions = {}): string => {
        const { spelling, accidental, octave } = this.getNameParts();

        const o = options.includeOctave ? octave : '';
        return `${spelling}${accidental}${o}`;
    }

    getFrequency = (format = false) => {
        const f = TuningUtils.getFrequency(this.getPitch());
        return format ? `${f.toFixed(2)}Hz` : f;
    }
}
