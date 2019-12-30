export default class KeyCenter {
    constructor(tonic, accidental, octave) {
        this.tonic = tonic;
        this.accidental = accidental;
        this.octave = octave; 
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