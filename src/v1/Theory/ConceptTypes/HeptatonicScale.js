import Scale from "./Scale";
import RomanNumeral from "./RomanNumeral";

export default class HeptatonicScale extends Scale {
    constructor(id, name, intervals) {
        if (intervals.length !== 7) {
            throw 'Heptatonic scale must have exactly 7 intervals';
        }
        super(id, name, intervals);
    }

    getRomanNumeral(degree) {
        return new RomanNumeral(this, degree);
    }
}