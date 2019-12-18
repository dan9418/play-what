import Concept from '../Concept';

export default class Chord extends Concept {
    constructor(id, name, intervals, inversion = 0) {
        super(id, name, intervals);
        //this.chordInversion(inversion); // TODO verify
    }

    chordInversion(inversion) {
        let intervalsCopy = [...this.intervals];
        for (let i = 0; i < inversion; i++) {
            let shifted = intervalsCopy.shift();
            shifted = {...shifted};
            shifted.octaveOffset = shifted.octaveOffset + 1;
            intervalsCopy.push(shifted);
        }
        return new Chord(this.id, this.name, intervalsCopy, this.inversion + inversion)
        // TODO reverse inversions
    }
}