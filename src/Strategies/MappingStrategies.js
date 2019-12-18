import CommonUtils from '../Utils/CommonUtils';
import FunctionalNote from '../Theory/FunctionalNote';
import NonfunctionalNote from '../Theory/NonfunctionalNote';

export default class MappingStrategies {
    // Private

    static _getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }

    static _getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    // Public

    static getNoteByPitchClass(noteIndex, keyCenter, concept) {
        let pitchClass = CommonUtils.modulo(noteIndex, 12);
        let interval = MappingStrategies._getIntervalByPitchClass(keyCenter, concept.intervals, pitchClass);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        let relativeKeyCenter = {
            ...keyCenter,
            octave: NonfunctionalNote.getOctave(noteIndex - interval.semitones)
        };

        return new FunctionalNote(relativeKeyCenter, interval);
    }

    static getNoteByNoteIndex(noteIndex, keyCenter, concept) {
        let interval = MappingStrategies._getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        return new FunctionalNote(keyCenter, interval);
    }

    static getNoteAt(noteIndex, keyCenter, concept, filterOctave = true) {
        return filterOctave ?
            MappingStrategies.getNoteByNoteIndex(noteIndex, keyCenter, concept) :
            MappingStrategies.getNoteByPitchClass(noteIndex, keyCenter, concept);
    }
}