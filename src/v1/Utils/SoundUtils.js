import * as Tone from "tone";

const MASTER_OUT = new Tone.Synth().toMaster();

export default class SoundUtils {
    static getSynth() {
        return MASTER_OUT;
    }
    static play(frequency, duration = .5) {
        MASTER_OUT.triggerAttackRelease(frequency, duration);
    }
    static playNotes(notes, duration) {
        let synth = new Tone.PolySynth(notes.length, Tone.Synth).toMaster();
        let freqs = notes.map(n => n.frequency);
        synth.triggerAttackRelease(freqs, .5);
    }
}