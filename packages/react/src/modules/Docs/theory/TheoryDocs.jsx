import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';
import ModelRow from '../ModelRow';
import Fold from '../Fold';

const max = [12, 7];

const ChordDefinitionDocs = () => {
	const [a, setA] = useState(PW_Core.models.theory.pitchClass.preset.middleC);
	const [B, setB] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<Fold label={'Definition'} level={3}>
			<div className="card">
				<ModelRow value={a} setValue={setA} max={max} label="a" mathType="pod" theoryType="note" />
				<ModelRow value={B} setValue={setB} max={max} label="B" mathType="podList" theoryType="intervalList" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const ChordDocs = () => {
	const [a, setA] = useState(PW_Core.models.theory.pitchClass.preset.middleC);
	const [B, setB] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<Fold label={'Chord'} level={2}>
			<Fold label={'Definition'} level={3}>
				<div className="card">
					<ModelRow value={a} setValue={setA} max={max} label="a" mathType="pod" theoryType="note" />
					<ModelRow value={B} setValue={setB} max={max} label="B" mathType="podList" theoryType="intervalList" />
					<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
				</div>
			</Fold>
		</Fold>
	);
}

const TheoryDocs = () => {
	return (
		<Fold label={'Theory'} level={2}>
			<ChordDocs />
		</Fold>
	);
}

export default TheoryDocs;
