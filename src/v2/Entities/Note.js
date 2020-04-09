import Theory from '../Tools/Theory';

export default class Note {
    constructor(keyCenter, interval) {
        this.keyCenter = keyCenter;
        this.interval = interval;
        this.noteDegree = Theory.getDegree(this.keyCenter, this.interval);
        this.pitchClass = Theory.getPitchClass(this.keyCenter, this.interval);
        this.name = Theory.getName(this.noteDegree, this.pitchClass, this.keyCenter.accidental);
        this.octave = Theory.getOctave(this.keyCenter, this.interval);
        this.noteIndex = Theory.getNoteIndex(this.octave, this.pitchClass);
        this.frequency = Theory.getFrequency(this.noteIndex);

        Object.freeze(this);
    }
    toJSON() {
        return this.name;
    }
}