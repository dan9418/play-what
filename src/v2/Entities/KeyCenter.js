import { TONIC, ACCIDENTAL } from "../Tools/Presets";

export default class KeyCenter {
    constructor(args) {
        if (typeof args === 'string') {
            this.str = args;
            this.tonic = TONIC[args[0]].value || TONIC.C.value;
            this.accidental = args[1] === '#' ? ACCIDENTAL.Sharp : args[1] === 'b' ? ACCIDENTAL.Flat : ACCIDENTAL.Natural;
            this.octave = 4;
        }
        else {
            console.error('KeyCenter error')
            return;
        }
    }

    getOctaveRootIndex() {
        return (this.octave - 4) * 12;
    }

    getRootIndex(relative = false) {
        let keyRootRelative = this.tonic.pitchClass + this.accidental.offset;
        return relative ? keyRootRelative : this.getOctaveRootIndex() + keyRootRelative;
    }
}