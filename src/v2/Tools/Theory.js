import Utils from './Utils';
import { INTERVALS } from './Presets';
import { CALIBRATION_NOTE, CALIBRATION_CONSTANT } from './Constants';
import KeyCenter from '../Entities/KeyCenter';
import Note from '../Entities/Note';

function getIntervalByPitchClass(pitchClass, keyCenter, intervals = INTERVALS) {
    return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
}

function getIntervalByNoteIndex(noteIndex, keyCenter, intervals = INTERVALS) {
    return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
}

function getOctaveFromNoteIndex(noteIndex) {
    return 4 + Math.floor(noteIndex / 12);
}

export function getNote(interval, keyCenter) {
    /*let pitchClass = Utils.modulo(keyCenter.tonic.pitchClass + interval.semitones, 12);
    let interval = getIntervalByPitchClass(pitchClass, keyCenter, intervals);
    if (interval === null) {
        return new NonfunctionalNote(noteIndex);
    }

    let relativeKeyCenter = {
        ...keyCenter,
        octave: NonfunctionalNote.getOctave(noteIndex - interval.semitones)
    };*/

    const kc = new KeyCenter(keyCenter.str);
    kc.octave = getOctaveFromNoteIndex(keyCenter.tonic.value.pitchClass + interval.semitones);

    return new Note(kc, interval);
}

export function getNotes(intervals, keyCenter) {
    return intervals.map(i => getNote(i, keyCenter));
}

export function getFrequency(noteIndex) {
    return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
}