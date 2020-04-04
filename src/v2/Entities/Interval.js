import { INTERVAL } from "../Tools/Presets";
import Utils from '../Tools/Utils';

export default class Interval {
    constructor(args) {
        if (typeof args === 'string') {
            const preset = INTERVAL[args].value;
            this.degree = preset.degree;
            this.semitones = preset.semitones;
            this.octaveOffset = 0;
        }
        else {
            return;
        }
    }
    matchesPitchClassFromKeyCenter(keyCenter, pitchClass) {
        return Utils.modulo(keyCenter.getRootIndex(true) + this.semitones, 12) === pitchClass;
    }

    matchesNoteIndexFromKeyCenter(keyCenter, noteIndex) {
        return keyCenter.getRootIndex() + this.octaveOffset * 12 + this.semitones === noteIndex;
    }
}