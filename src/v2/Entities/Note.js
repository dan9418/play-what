import { TONICS } from '../Tools/Presets';
import Utils from '../Tools/Utils';
import { getFrequency } from '../Tools/Theory';

export default class Note {
    constructor(keyCenter, interval) {
        this.keyCenter = keyCenter;
        this.interval = interval;
        this.noteDegree = Note.getDegree(this.keyCenter, this.interval);
        this.pitchClass = Note.getPitchClass(this.keyCenter, this.interval);
        this.name = Note.getName(this.noteDegree, this.pitchClass, this.keyCenter.accidental);
        this.octave = Note.getOctave(this.keyCenter, this.interval);
        this.noteIndex = Note.getNoteIndex(this.octave, this.pitchClass);
        this.frequency = getFrequency(this.noteIndex);
    }

    static getDegree(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.value.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.value.pitchClass + keyCenter.accidental.offset, interval.semitones, 12, 0);
    }

    static getName(noteDegree, pitchClass, accidental) {
        let spelling = Note._getTonicByDegree(noteDegree);
        // Get accidental offset
        let offset = pitchClass - spelling.value.pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        // Combine tonic name with accidental
        return spelling.name + Note._getAccidentalString(offset);
    }

    static _getTonicByDegree(noteDegree) {
        return TONICS[noteDegree - 1];
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
        return keyCenter.octave + Math.floor((keyCenter.tonic.value.pitchClass + keyCenter.accidental.offset + interval.semitones) / 12) + interval.octaveOffset;
    }

    static getNoteIndex(noteOctave, pitchClass) {
        return (noteOctave - 4) * 12 + pitchClass;
    }
}