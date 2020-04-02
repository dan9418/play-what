import { TONIC, ACCIDENTAL } from "../Tools/Presets";

export default class KeyCenter {
    constructor(args) {
        if (typeof args === 'string') {
            this.tonic = TONIC[args[0]].value || TONIC.C.value;
            this.accidental = args[1] === '#' ? ACCIDENTAL.Sharp : args[1] === 'b' ? ACCIDENTAL.Flat : ACCIDENTAL.Natural;
            this.octave = 4;
        }
        else {
            console.error('KeyCenter error')
            return;
        }
    }
}