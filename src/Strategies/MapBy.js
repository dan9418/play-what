import CommonUtils from '../Utils/CommonUtils';
import FunctionalNote from '../Theory/FunctionalNote';
import NonfunctionalNote from '../Theory/NonfunctionalNote';

export default class MapBy {

    // Private

    static _getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
        return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
    }

    static _getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
        return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
    }

    static _getNoteAt(noteIndex, keyCenter, concept, filterOctave = true) {
        return filterOctave ?
            MapBy.noteIndex(noteIndex, keyCenter, concept) :
            MapBy.pitchClass.getNoteByPitchClass(noteIndex, keyCenter, concept);
    }

    // Public

    static pitchClass(noteIndex, keyCenter, concept) {
        let pitchClass = CommonUtils.modulo(noteIndex, 12);
        let interval = MapBy._getIntervalByPitchClass(keyCenter, concept.intervals, pitchClass);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        let relativeKeyCenter = {
            ...keyCenter,
            octave: NonfunctionalNote.getOctave(noteIndex - interval.semitones)
        };

        return new FunctionalNote(relativeKeyCenter, interval);
    }

    static noteIndex(noteIndex, keyCenter, concept) {
        let interval = MapBy._getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
        if (interval === null) {
            return new NonfunctionalNote(noteIndex);
        }

        return new FunctionalNote(keyCenter, interval);
    }
}