import { INTERVAL } from "../Tools/Presets";

export default class Interval {
    constructor(args) {
        if (typeof args === 'string') {
            const preset = INTERVAL[args].value;
            this.degree = preset.degree;
            this.semitones = preset.semitones;
        }
        else {
            return;
        }
    }
    getDegree() {
        return this.degree;
    }
}