import React from 'react';
import './KeyCenterInput.css';

import PW_Core from '@pw/core';
import ButtonInput from '../ButtonInput/ButtonInput';
import ScalarInput from '../ScalarInput/ScalarInput';

const DegreeInput = ({ degree, setDegree }) => {
	const allDegrees = PW_Core.Theory.getAllDegrees();
	return (
		<div className="degree-input">
			{allDegrees.map((d, i) => {
				const isActive = degree && degree[1] === i && degree[0] === d[0]
				return (
					<ButtonInput
						key={i}
						onClick={() => setDegree([d[0], i])}
						className={isActive ? '' : null}
					>
						{PW_Core.Theory.getDegreeMapping(d[1]).name}
					</ButtonInput>
				);
			})}
		</div>
	);
};

const AccidentalInput = ({ accidental, setAccidental }) => {
	const allAccidentals = Object.values(PW_Core.Constants.ACCIDENTAL);
	return (
		<div className="accidental-input">
			{allAccidentals.map((a, i) => {
				const isActive = accidental && accidental.offset === a.offset;
				return (
					<ButtonInput
						key={i}
						onClick={() => setAccidental(a)}
						className={isActive ? '' : null}
					>
						{a.name}
					</ButtonInput>
				);
			})}
		</div>
	);
};

const OctaveInput = ({ octave, setOctave }) => <ScalarInput value={octave} setValue={setOctave} className='octave-input' />;

const KeyCenterInput = ({ keyCenter, setKeyCenter }) => {

	const degree = PW_Core.Theory.getDegree(keyCenter[1]);
	const octave = Math.floor(keyCenter[0] / 12) + 4;
	const offset = keyCenter[0] - degree[0];
	const accidental = PW_Core.Constants.ACCIDENTAL_VALUES.find(a => a.offset === offset) || null;

	const setDegree = (d) => {
		const newKeyCenter = [
			Math.floor(keyCenter[0] / 12) * 12 + d[0],
			d[1]
		];
		setKeyCenter(newKeyCenter);
	};
	const setAccidental = a => {
		const newKeyCenter = [
			keyCenter[0] + a.offset,
			keyCenter[1]
		];
		setKeyCenter(newKeyCenter);
	};
	const setOctave = o => {
		const newKeyCenter = [
			((o - 4) * 12) + PW_Core.models.scalar.modulo(keyCenter[0], 12),
			keyCenter[1]
		];
		setKeyCenter(newKeyCenter);
	};

	return (
		<div className="key-center-input">
			<h4>Degree</h4>
			<DegreeInput degree={degree} setDegree={setDegree} />
			<h4>Accidental</h4>
			<AccidentalInput accidental={accidental} setAccidental={setAccidental} />
			<h4>Octave</h4>
			<OctaveInput octave={octave} setOctave={setOctave} />
		</div>
	);
};

export default KeyCenterInput;
