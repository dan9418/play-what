import * as tone from 'tone'

const VOLUME = new tone.Volume(-15);

const MASTER_OUT = new tone.Synth().chain(VOLUME, tone.Master);
const MASTER_OUT_POLY = new tone.PolySynth(tone.Synth).chain(VOLUME, tone.Master);
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


const playSound = (f: number | number[], duration = .5, velocity = .5): void => {
	const masterOut: any = Array.isArray(f) ? MASTER_OUT_POLY : MASTER_OUT;
	masterOut.triggerAttackRelease(f, duration);
}

const stop = (): void => {
	MASTER_OUT_POLY.releaseAll();
}

export default {
	playSound,
	stop
}
