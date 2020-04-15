import Utils from './Utils';
import { INTERVALS } from './Presets';
import { TONICS } from '../Tools/Presets';
import { CALIBRATION_NOTE, CALIBRATION_CONSTANT } from './Constants';
import KeyCenter from '../Entities/KeyCenter';
import Note from '../Entities/Note';

export default class Theory {

    static getOctaveFromNoteIndex(noteIndex) {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getNote(interval, keyCenter) {
        const kc = new KeyCenter(keyCenter.str);
        // kc.octave = Theory.getOctaveFromNoteIndex(keyCenter.tonic.pitchClass + interval.semitones);

        return new Note(kc, interval);
    }

    static getNotes(intervals, keyCenter) {
        return intervals.map(i => Theory.getNote(i, keyCenter));
    }

    static getFrequency(noteIndex) {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }

    static getDegree(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.degreeInC, interval.degree, 7, 1);
    }

    static getPitchClass(keyCenter, interval) {
        return Utils.moduloSum(keyCenter.tonic.pitchClass + keyCenter.accidental.offset, interval.semitones, 12, 0);
    }

    static getName(noteDegree, pitchClass, accidental) {
        let spelling = Theory._getTonicByDegree(noteDegree);
        // Get accidental offset
        let offset = pitchClass - spelling.pitchClass;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        // Combine tonic name with accidental
        return spelling.name + Theory._getAccidentalString(offset);
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
        return keyCenter.octave + Math.floor((keyCenter.tonic.pitchClass + keyCenter.accidental.offset + interval.semitones) / 12) + interval.octaveOffset;
    }

    static getNoteIndex(noteOctave, pitchClass) {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    static getIntervalByPitchClass(pitchClass, keyCenter, intervals = INTERVALS) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }
    
    static getIntervalByNoteIndex(noteIndex, keyCenter, intervals = INTERVALS) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    static getNoteByPitchClass(notes, pitchClass) {
        return notes.find(note => note.pitchClass === pitchClass) || null;
    }

    static getNoteByNoteIndex(notes, noteIndex) {
        const note = notes.find(note => note.noteIndex === noteIndex) || null;
        return note ? note : new Note(noteIndex);
    }

}