import pw_core from '@pw/core';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './PlaybackTab.css';

const DEFAULT_TEMPO = 160;
const NOP = () => null;

const useToggle = (initValue = false) => {
	const [value, setValue] = useState(initValue);
	return [value, () => setValue(!value)];
};

const PlaybackTab = () => {

	const [position, setPosition] = useRecoilState(positionState);
	const bivector = useRecoilValue(conceptState);
	const nextConcept = useRecoilValue(nextConceptState);
	const nextPosition = useRecoilValue(nextPositionState);

	const t = bivector.t ? bivector.t : 4;
	const nextT = nextConcept.t ? nextConcept.t : 4;

	// State (Compound)
	const [state, setState] = useState([0, t]);
	// State helpers
	const [beatIndex, remBeats] = state;
	// Playback
	const [tempo, setTempo] = useState(DEFAULT_TEMPO);
	const [playing, togglePlay] = useToggle(false);

	if (!playing) {
		pw_core.Sound.stopNotes();
	}
	else {
		const beatDuration = 1 / (tempo / 60);
		if (remBeats === t) {
			const freqs = pw_core.Theory.getFrequencies(bivector.C);
			const pulseDuration = beatDuration * t; // seconds
			pw_core.Sound.playNotes(freqs, pulseDuration / 2);
			console.log(beatIndex, 'P');
		}
		if (remBeats > 1) {
			setTimeout(() => {
				setState([beatIndex + 1, remBeats - 1]);
			}, beatDuration * 1000);
			console.log(beatIndex, remBeats, '-', state);
		}
		else if (remBeats === 1) {
			setTimeout(() => {
				setPosition(nextPosition);
				setState([beatIndex + 1, nextT]);
			}, beatDuration * 1000)
			console.log(beatIndex, remBeats, '>', state);
		}
	}

	return (
		<div className='tab-body playback-tab'>

			<div className="input-row">
				<div className={`blinker ${beatIndex % 2 === 0 ? 'pulse' : ''}`} />
				<ButtonInput className='pw-accent' onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</ButtonInput>
			</div>

			<h3>Tempo</h3>
			<div className="input-row">
				<label>bpm</label>
				<ScalarInput value={tempo} setValue={setTempo} className="bpm" />
			</div>

			<h3>Metronome</h3>
			<div className="input-row"></div>
			<h3>Volume</h3>
			<div className="input-row"></div>
			<h3>Voice</h3>
			<div className="input-row"></div>
		</div>
	);
}

export default PlaybackTab;
