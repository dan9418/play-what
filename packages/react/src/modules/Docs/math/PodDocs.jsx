import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';

const PodDocs = () => {
	const [max, setMax] = useState([12, 7]);

	const [a, setA] = useState(PW_Core.models.theory.interval.preset.M3.value);
	const [b, setB] = useState(PW_Core.models.theory.interval.preset.P5.value);

	const result_addPod = PW_Core.models.math.pod.addPod({ a, b });

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

				<Meter type='pod' value={a} max={max} />
			</div>

			<h3>addPod(a, b)</h3>

			<div className="card">
				<InputRow label="a" x>
					<PodInput value={a} setValue={setA} />
				</InputRow>
				<Meter type='pod' value={a} max={max} />

				<InputRow label="b" x>
					<PodInput value={b} setValue={setB} />
				</InputRow>
				<Meter type='pod' value={b} max={max} />

				<InputRow label="result" x>
					<PodInput value={result_addPod} />
				</InputRow>
				<Meter type='pod' value={result_addPod} max={max} />
			</div>
		</div>
	);
}

export default PodDocs;
