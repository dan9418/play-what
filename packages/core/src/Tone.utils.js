import tone from "tone";

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


const play = (f, duration = .5, velocity = .5) => {
	const root = Array.isArray(f) ? MASTER_OUT_POLY : MASTER_OUT;
	root.triggerAttackRelease(f, duration);
}

const stop = () => {
	MASTER_OUT_POLY.releaseAll();
}

export default {
	play,
	stop
}
