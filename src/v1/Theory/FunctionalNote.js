import { TONIC } from '../Theory/Constants';
import CommonUtils from '../Utils/CommonUtils';
import NonfunctionalNote from './NonfunctionalNote';

export default class FunctionalNote {
    constructor(keyCenter, interval) {
        this.keyCenter = keyCenter;
        this.interval = interval;
        this.noteDegree = FunctionalNote.getDegree(this.keyCenter, this.interval);
        this.pitchClass = FunctionalNote.getPitchClass(this.keyCenter, this.interval);
        this.name = FunctionalNote.getName(this.noteDegree, this.pitchClass, this.keyCenter.accidental);
        this.octave = FunctionalNote.getOctave(this.keyCenter, this.interval);
        this.noteIndex = FunctionalNote.getNoteIndex(this.octave, this.pitchClass);
        this.frequency = NonfunctionalNote.getFrequency(this.noteIndex);
    }

    copy() {
        return new FunctionalNote(this.keyCenter, this.interval);
    }

    static getDegree(keyCenter, interval) {
        return CommonUtils.moduloSum(keyCenter.tonic.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass(keyCenter, interval) {
        return CommonUtils.moduloSum(keyCenter.tonic.pitchClass + keyCenter.accidental.offset, interval.semitones, 12, 0);
    }

    static getName(noteDegree, pitchClass, accidental) {
        let spelling = FunctionalNote._getTonicByDegree(noteDegree);
        // Get accidental offset
        let offset = pitchClass - spelling.pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        // Combine tonic name with accidental
        return spelling.name + FunctionalNote._getAccidentalString(offset);
    }

    static _getTonicByDegree(noteDegree) {
        return Object.values(TONIC)[noteDegree - 1];
    }

    static _getAccidentalString(offset) {
        switch (offset) {
            case 0:
                return ''
            case 1:
                return '#';
            case 2:
                return 'x';
            case -1:
                return 'b';
            case -2:
                return 'bb';
            default:
                return (offset < 0) ? -offset + 'b' : offset + '#';
        }
    }

    static getOctave(keyCenter, interval) {
        return keyCenter.octave + Math.floor((keyCenter.tonic.pitchClass + keyCenter.accidental.offset + interval.semitones) / 12) + interval.octaveOffset;
    }

    static getNoteIndex(noteOctave, pitchClass) {
        return (noteOctave - 4) * 12 + pitchClass;
    }
}