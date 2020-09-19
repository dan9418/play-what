import PW_Core from '@pw/core';
import pod from '@pw/core/src/modules/models/pod';
import React, { useState } from "react";
import { PodMeter } from '../Meter/Meter';
import IntegerInput from '../UI/IntegerInput/IntegerInput';
import PodInput from '../UI/PodInput/PodInput';
import "./Docs.css";
import InputRow from './InputRow';


const PodDocs = () => {
	const [max, setMax] = useState([12, 7]);

	const [a, setA] = useState(PW_Core.theory.interval.preset.M3.value);
	const [b, setB] = useState(PW_Core.theory.interval.preset.P5.value);

	const result_addPod = PW_Core.models.pod.addPod(a, b);

	return (
		<div className='pod-docs'>
			<h2>Pod</h2>

			<div className="card">
				<InputRow label="max" x>
					<PodInput value={max} setValue={setMax} />
				</InputRow>
				<InputRow label="a" x>
					<PodInput value={a} setValue={setA} />
				</InputRow>

				<PodMeter values={[a]} max={max} />
			</div>

			<h3>addPod(a, b)</h3>

			<div className="card">
				<InputRow label="a" x>
					<PodInput value={a} setValue={setA} />
				</InputRow>
				<PodMeter values={[a]} max={max} />

				<InputRow label="b" x>
					<PodInput value={b} setValue={setB} />
				</InputRow>
				<PodMeter values={[b]} max={max} />

				<InputRow label="result" x>
					<PodInput value={result_addPod} />
				</InputRow>
				<PodMeter values={[result_addPod]} max={max} />
			</div>
		</div>
	);
}

export default PodDocs;
