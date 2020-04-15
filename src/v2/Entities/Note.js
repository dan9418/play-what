import Theory from '../Tools/Theory';

export default class Note {
    constructor(keyCenter, interval) {
        // Temp hack for using noteIndex as first argument
        if (typeof keyCenter === 'number') {
            this.keyCenter = null;
            this.interval = null;
            this.noteDegree = 0;
            this.pitchClass = keyCenter % 12;
            this.name = '';
            this.octave = Math.floor(keyCenter / 12);
            this.noteIndex = keyCenter;
            this.frequency = Theory.getFrequency(this.noteIndex);
        }
        else {
            this.keyCenter = keyCenter;
            this.interval = interval;
            this.noteDegree = Theory.getDegree(this.keyCenter, this.interval);
            this.pitchClass = Theory.getPitchClass(this.keyCenter, this.interval);
            this.name = Theory.getName(this.noteDegree, this.pitchClass, this.keyCenter.accidental);
            this.octave = Theory.getOctave(this.keyCenter, this.interval);
            this.noteIndex = Theory.getNoteIndex(this.octave, this.pitchClass);
            this.frequency = Theory.getFrequency(this.noteIndex);
        }

        Object.freeze(this);
    }
    toJSON() {
        return this.name;
    }
    getDegree() {
        return this.interval.degree;
    }
    getPitchClass() {
        return this.pitchClass;
    }
    getOctave() {
        return this.octave;
    }
    getNoteIndex() {
        return this.noteIndex;
    }
    getFrequency() {
        return this.frequency;
    }
}