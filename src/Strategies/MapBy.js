import CommonUtils from '../Utils/CommonUtils';
import FunctionalNote from '../Theory/FunctionalNote';
import NonfunctionalNote from '../Theory/NonfunctionalNote';

function getIntervalByPitchClass(keyCenter, intervals, pitchClass) {
    return intervals.find(interval => interval.matchesPitchClassFromKeyCenter(keyCenter, pitchClass)) || null;
}

function getIntervalByNoteIndex(keyCenter, intervals, noteIndex) {
    return intervals.find(interval => interval.matchesNoteIndexFromKeyCenter(keyCenter, noteIndex)) || null;
}

/*function getNoteAt(noteIndex, keyCenter, concept, filterOctave = true) {
    return filterOctave ?
        MapBy.noteIndex(noteIndex, keyCenter, concept) :
        MapBy.pitchClass.getNoteByPitchClass(noteIndex, keyCenter, concept);
}*/

const MapBy = {

    pitchClass: {
        id: 'pitchClass',
        name: 'Pitch Class',
        fx: (noteIndex, keyCenter, concept) => {
            let pitchClass = CommonUtils.modulo(noteIndex, 12);
            let interval = getIntervalByPitchClass(keyCenter, concept.intervals, pitchClass);
            if (interval === null) {
                return new NonfunctionalNote(noteIndex);
            }

            let relativeKeyCenter = {
                ...keyCenter,
                octave: NonfunctionalNote.getOctave(noteIndex - interval.semitones)
            };

            return new FunctionalNote(relativeKeyCenter, interval);
        }
    },

    noteIndex:
    {
        id: 'noteIndex',
        name: 'Note Index',
        fx: (noteIndex, keyCenter, concept) => {
            let interval = getIntervalByNoteIndex(keyCenter, concept.intervals, noteIndex, true);
            if (interval === null) {
                return new NonfunctionalNote(noteIndex);
            }

            return new FunctionalNote(keyCenter, interval);
        }
    }
}

export default MapBy;