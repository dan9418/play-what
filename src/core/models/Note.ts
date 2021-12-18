import NumberUtils from '../general/Number.utils';
import { DEGREE_PRESETS } from '../theory/Degree.constants';
import { DEFAULT_PITCH_COLOR_SCHEME } from '../theory/Pitch.constants';
import { ROOT_SCALE } from '../theory/Theory.constants';
import TuningUtils from '../tuning/Tuning.utils';
import Model from './Model';
import { ACCIDENTAL, IPod, MAX_POD, NoteId } from './Model.constants';
import { NOTE_PRESETS, NOTE_PRESET_MAP } from './Model.presets';
import Pod from './Pod';
import { arePodsEqual, reducePod } from './Pod.static';

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

    constructor(id: NoteId) {
        super(NOTE_PRESET_MAP, id);
    }

    static fromValue = (value: IPod) => Model.fromValue(NOTE_PRESETS, Note, value, arePodsEqual, reducePod);

    getColor(): string | undefined {
        return DEFAULT_PITCH_COLOR_SCHEME[this.pod[0]];
    }

    getAccidentalOffset(): number {
        const [p, d] = this.pod;

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

    getPitchClass(): number {
        return NumberUtils.modulo(this.pod[0], MAX_POD[0]);
    }

    getOctave(): number {
        const midi = false;
        const raw = Math.floor(this.pod[0] / 12);
        return midi ? raw + 4 : raw;
    }

    getDegree(): number {
        return NumberUtils.modulo(this.pod[1], MAX_POD[1]);
    }

    getSpelling(): string {
        const degree = this.getDegree();
        const spelling = DEGREE_PRESETS[degree].name;
        return spelling;
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

    getFrequency = () => {
        return `${TuningUtils.getFrequency(this.pod[0])}Hz`;
    }
}
