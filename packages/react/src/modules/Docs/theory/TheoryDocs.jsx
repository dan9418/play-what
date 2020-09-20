import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';

const max = [12, 7];

const TheoryDocs = () => {
	const [a, setA] = useState(PW_Core.models.theory.scale.preset.NaturalMinor.value[0]);
	const [B, setB] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<div className='theory-docs'>
			<h2>Theory</h2>

			<div className="card">
				<InputRow label="a" x>
					<PodInput value={a} setValue={setA} />
				</InputRow>
				<Meter type="pod" value={a} max={max} />

				<InputRow label="B">
					<PodListInput value={B} setValue={setB} />
				</InputRow>
				<Meter type="podList" value={B} max={max} />

				<InputRow label="C">
					<PodListInput value={C} />
				</InputRow>
				<Meter type="podList" value={C} max={max} />
			</div>

		</div>
	);
}

export default TheoryDocs;
