import PW_Core from '@pw/core';
import React, { useState } from "react";
import { PodMeter } from '../Meter/Meter';
import PodInput from '../models/mathdels/math/PodInput/PodInput';
import "./Docs.css";
import InputRow from './InputRow';

const PodDocs = () => {
	const [defaultValue, setDefaultValue] = useState(PW_Core.models.theory.interval.preset.P5.value);
	const [max, setMax] = useState([12, 7]);

	const [A, setA] = useState(PW_Core.models.theory.interval.preset.M3.value);
	const [B, setB] = useState(PW_Core.models.theory.interval.preset.P5.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.math.pod.modulo(a, divisor);

	return (
		<div className='pod-docs'>
			<h2>Interval</h2>

			<h3>Constants</h3>

			<div className="card">

				<InputRow label="testValue" x>
					<PodInput value={defaultValue} setValue={setDefaultValue} />
				</InputRow>



				<PodMeter values={[defaultValue]} max={max} />
			</div>
		</div>
	);
}

export default PodDocs;
