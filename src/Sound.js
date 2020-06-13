import * as Tone from "tone";

const MASTER_OUT = new Tone.Synth().toMaster();
const MASTER_OUT_POLY = new Tone.PolySynth(12, Tone.Synth).toMaster();
const SHAPE = 'sine';
const VOLUME = new Tone.Volume();

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
}