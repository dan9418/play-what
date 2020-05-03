export default class LabelUtils {

    static none() {
        return '';
    }

    static binary(note, options) {
        if(!note || !note.interval) return '';

        return 'X';
    }

    static degree(note, options) {
        if(!note || !note.interval) return '';

        return note.interval.degree;
    }

    static interval(note, options) {
        if(!note || !note.interval) return '';

        return note.interval.id;
    }

    static name(note, options) {
        if(!note || !note.interval) return '';

        return note.getName();
    }

    static pitchClass(note, options) {
        if(!note) return {};

        return note.getPitchClass();
    }

    static octave(note, options) {
        if(!note) return {};

        return note.getOctave();
    }

    static noteIndex(note, options) {
        if(!note) return {};

        return note.getNoteIndex();
    }

    static frequency(note, options) {
        if(!note) return {};

        return Math.round(note.getFrequency());
    }

}