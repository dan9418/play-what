import CommonUtils from "../Utils/CommonUtils";
import { INTERVAL } from "./Constants";

export class Interval {
    constructor(baseInterval, ascending = true, octaveOffset = 0) {
        this.baseInterval = baseInterval;
        this.degree = baseInterval.degree;
        this.semitones = baseInterval.semitones;
        this.id = baseInterval.id;
        this.name = baseInterval.name;
        this.ascending = ascending;
        this.octaveOffset = octaveOffset;
    }

    copy() {
        return new Interval(this, this.ascending, this.octaveOffset);
    }

    matchesPitchClassFromKeyCenter(keyCenter, pitchClass) {
        return CommonUtils.modulo(keyCenter.getRootIndex(true) + this.semitones, 12) === pitchClass;
    }

    matchesNoteIndexFromKeyCenter(keyCenter, noteIndex) {
        return keyCenter.getRootIndex() + this.octaveOffset * 12 + this.semitones === noteIndex;
    }

    subtract(interval) {
        return this.add(interval, true);
    }

    add(interval, subtract = false) {
        let newDegree = CommonUtils.moduloSum(this.degree, interval.degree, 7, 1, subtract);
        let newSemitones = CommonUtils.moduloSum((this.octaveOffset * 12) + this.semitones, (interval.octaveOffset * 12) + interval.semitones, 12, 0, subtract);
        //return new Interval(newDegree, newSemitones, newDegree, newDegree);
        let allIntervals = Object.values(INTERVAL);
        let newInterval = allIntervals.find((i) => i.degree === newDegree && i.semitones === newSemitones);
        return newInterval ? new Interval(newInterval) : null;
    }
}