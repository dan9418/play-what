import { INTERVAL, INTERVALS } from "../Tools/Presets";
import Utils from '../Tools/Utils';

export default class Interval {
    constructor(args) {
        if (typeof args === 'string') {
            const preset = INTERVAL[args];
            this.id = preset.id;
            this.name = preset.id;
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

    toJSON() {
        return this.id;
    }
}

/*export class IntervalV2 {

    static fromPreset(preset) {
        return INTERVAL[preset];
    }

    static fromConfig(config) {
        this.id = INTERVAL[args].id;
        this.name = INTERVAL[args].id;
        this.degree = preset.degree;
        this.semitones = preset.semitones;
        this.octaveOffset = 0;
    }

    static matchesPitchClassFromKeyCenter(interval, keyCenter, pitchClass) {
        return Utils.modulo(keyCenter.getRootIndex(true) + interval.semitones, 12) === pitchClass;
    }

    static matchesNoteIndexFromKeyCenter(interval, keyCenter, noteIndex) {
        return keyCenter.getRootIndex() + interval.octaveOffset * 12 + interval.semitones === noteIndex;
    }
}*/