const EMPTY = '';

const LabelUtils = {
    none: () => EMPTY,
    name: (note) => {
        if (!note) return EMPTY;

        return note.name;
    },
    degree: (note) => {
        if (!note || !note.interval) return EMPTY;

        return note.interval.degree;
    },
    interval: (note) => {
        if (!note || !note.interval) return EMPTY;

        return note.interval.id;
    },
    noteIndex: (note) => {
        if (!note) return EMPTY;

        return note.noteIndex;
    },
    pitchClass: (note) => {
        if (!note) return EMPTY;

        return note.pitchClass;
    }
    ,
    octave: (note) => {
        if (!note) return EMPTY;

        return note.octave;
    }
    ,
    frequency: (note) => {
        if (!note) return EMPTY;

        return Math.round(note.frequency);
    }
}

export default LabelUtils;