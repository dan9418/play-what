import { TONIC, ACCIDENTAL } from './Constants';

export default class KeyCenter {
    constructor(tonic, accidental, octave) {
        if (typeof arguments[0] === 'string') {
            const keyString = arguments[0];
            this.tonic = TONIC[keyString[0]] || TONIC.C;
            this.accidental = keyString[1] === '#' ? ACCIDENTAL.Sharp : keyString[1] === 'b' ? ACCIDENTAL.Flat : ACCIDENTAL.Natural;
            this.octave = 4;
        }
        else {
            this.tonic = tonic;
            this.accidental = accidental;
            this.octave = octave;
        }
    }

    copy() {
        return new KeyCenter(this.tonic, this.accidental, this.octave);
    }

    getOctaveRootIndex() {
        return (this.octave - 4) * 12;
    }

    getRootIndex(relative = false) {
        let keyRootRelative = this.tonic.pitchClass + this.accidental.offset;
        return relative ? keyRootRelative : this.getOctaveRootIndex() + keyRootRelative;
    }
}