import * as Tone from "tone";

const MASTER_OUT = new Tone.Synth().toMaster();

export default class SoundUtils {
    static getSynth() {
        return MASTER_OUT;
    }
    static play(frequency, duration = .5) {
        MASTER_OUT.triggerAttackRelease(frequency, duration);
    }
    static playNotes(freqs, duration = .5) {
        let synth = new Tone.PolySynth(freqs.length, Tone.Synth).toMaster();
        // freqs = freqs.map(f => f.p);
        synth.triggerAttackRelease(freqs, duration);
    }
}