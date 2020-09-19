import PW_Core from '@pw/core';
import pod from '@pw/core/src/modules/models/pod';
import React, { useState } from "react";
import { PodMeter } from '../Meter/Meter';
import IntegerInput from '../UI/IntegerInput/IntegerInput';
import PodInput from '../UI/PodInput/PodInput';
import "./Docs.css";
import InputRow from './InputRow';


const PodDocs = () => {
	const [defaultValue, setDefaultValue] = useState(PW_Core.theory.interval.preset.P5.value);
	const [max, setMax] = useState([12, 7]);

	const [A, setA] = useState(PW_Core.theory.interval.preset.M3.value);
	const [B, setB] = useState(PW_Core.theory.interval.preset.P5.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.pod.modulo(a, divisor);

	return (
		<div className='pod-docs'>
			<h2>Pod</h2>

			<h3>Constants</h3>

			<div className="card">
				<InputRow label="Default" x>
					<PodInput value={defaultValue} setValue={setDefaultValue} />
				</InputRow>
				<InputRow label="Max" x>
					<PodInput value={max} setValue={setMax} />
				</InputRow>


				<PodMeter values={[defaultValue]} max={max} />
			</div>
		</div>
	);
}

export default PodDocs;
