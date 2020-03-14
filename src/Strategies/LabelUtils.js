const EMPTY = '';

/*const LabelUtils = {
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
    },
    octave: (note) => {
        if (!note) return EMPTY;

        return note.octave;
    },
    frequency: (note) => {
        if (!note) return EMPTY;

        return Math.round(note.frequency);
    }
}*/

const LabelUtils = {
    none: {
        id: 'none',
        name: 'None',
        fx: () => EMPTY
    },
    name: {
        id: 'name',
        name: 'Name',
        fx: (note) => {
            if (!note) return EMPTY;
    
            return note.name;
        }
    },
    degree: {
        id: 'degree',
        name: 'Degree',
        fx: (note) => {
            if (!note || !note.interval) return EMPTY;
    
            return note.interval.degree;
        }
    },
    interval: {
        id: 'interval',
        name: 'Interval',
        fx: (note) => {
            if (!note || !note.interval) return EMPTY;
    
            return note.interval.id;
        }
    },
    noteIndex: {
        id: 'noteIndex',
        name: 'Note Index',
        fx: (note) => {
            if (!note) return EMPTY;
    
            return note.noteIndex;
        }
    },
    pitchClass: {
        id: 'pitchClass',
        name: 'Pitch Class',
        fx: (note) => {
            if (!note) return EMPTY;
    
            return note.pitchClass;
        }
    },
    octave: {
        id: 'octave',
        name: 'Octave',
        fx: (note) => {
            if (!note) return EMPTY;
    
            return note.octave;
        }
    },
    frequency: {
        id: 'frequency',
        name: 'Frequency',
        fx: (note) => {
            if (!note) return EMPTY;
    
            return Math.round(note.frequency);
        }
    }
};

export default LabelUtils;