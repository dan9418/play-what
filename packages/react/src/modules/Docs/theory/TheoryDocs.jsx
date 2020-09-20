import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';
import ModelRow from '../ModelRow';

const max = [12, 7];

const TheoryDocs = () => {
	const [a, setA] = useState(PW_Core.models.theory.scale.preset.NaturalMinor.value[0]);
	const [B, setB] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<div className='theory-docs'>
			<h2>Theory</h2>

			<div className="card">
				<ModelRow value={a} setValue={setA} max={max} label="a" mathType="pod" theoryType="note" />
				<ModelRow value={B} setValue={setB} max={max} label="B" mathType="podList" theoryType="intervalList" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>

		</div>
	);
}

export default TheoryDocs;
