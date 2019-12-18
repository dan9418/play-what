import * as Tone from "tone";

const MASTER_OUT = new Tone.Synth().toMaster();

export default class SoundUtils {
    static getSynth() {
        return MASTER_OUT;
    }
    static play(frequency, duration) {
        MASTER_OUT.triggerAttackRelease(frequency, duration);
    }
}