const EMPTY = '';

export default class LabelBy {

    static none() {
        return EMPTY;
    }

    static name(note) {
        if(!note) return EMPTY;

        return note.name;
    }

    static degree(note) {
        if(!note || !note.interval) return EMPTY;

        return note.interval.degree;
    }

    static interval(note) {
        if(!note || !note.interval) return EMPTY;

        return note.interval.id;
    }

    static noteIndex(note) {
        if(!note) return EMPTY;

        return note.noteIndex;
    }

    static pitchClass(note) {
        if(!note) return EMPTY;

        return note.pitchClass;
    }

    static octave(note) {
        if(!note) return EMPTY;

        return note.noteOctave;
    }

    static frequency(note) {
        if(!note) return EMPTY;

        return Math.round(note.frequency);
    }
}
