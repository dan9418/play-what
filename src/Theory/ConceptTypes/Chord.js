import Concept from '../Concept';

export default class Chord extends Concept {
    constructor(id, name, intervals, inversion = 0) {
        super(id, name, intervals);
        // TODO initial inversions
    }

    copy() {
        let intervalsCopy = [...this.intervals];
        return new Chord(this.id, this.name, intervalsCopy, this.inversion);
    }

    chordInversion(inversion) {
        for (let i = 0; i < inversion; i++) {
            let shifted = this.intervals.shift();
            shifted = {...shifted};
            shifted.octaveOffset = shifted.octaveOffset + 1;
            this.intervals.push(shifted);
        }
        this.inversion = this.inversion + inversion;
        return this;
        // TODO reverse inversions
    }
}