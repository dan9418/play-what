/* import tone from "tone";

const VOLUME = new tone.Volume(-15);

const MASTER_OUT = new tone.Synth().chain(VOLUME, tone.Master);
const MASTER_OUT_POLY = new tone.PolySynth(12, tone.Synth).chain(VOLUME, tone.Master);
const SHAPE = 'sine'

MASTER_OUT_POLY.set({
    oscillator: {
        type: SHAPE
    },
    envelope: {
        decay: 1,
        release: 1
    }
});

export default class SoundUtils {
    static playNote(frequency, duration = .5, velocity = .5) {
        MASTER_OUT.triggerAttackRelease(frequency, duration);
    }
    static playNotes(freqs, duration = .5, velocity = .5) {
        MASTER_OUT_POLY.triggerAttackRelease(freqs, duration);
    }
    static stopNotes() {
        MASTER_OUT_POLY.releaseAll();
    }
} */
