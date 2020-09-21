import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';
import ModelRow from '../ModelRow';
import Fold from '../Fold';

const max = [12, 7];

const TransposeDocs = ({ A }) => {
	const [b, setB] = useState(PW_Core.models.theory.interval.preset.P1.value);
	const C = PW_Core.models.math.podList.addPod({ A, b });

	return (
		<Fold label={'Transpose'} level={3}>
			<div className="card">
				<ModelRow value={b} setValue={setB} max={max} label="b" mathType="pod" theoryType="interval" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const InversionDocs = ({ A }) => {
	const [n, setN] = useState(0);
	const C = PW_Core.models.theory.chord.getInversion({ A, n })

	return (
		<Fold label={'Inversion'} level={3}>
			<div className="card">
				<ModelRow value={n} setValue={setN} label="n" mathType="integer" theoryType="pitch" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const NumeralDocs = ({ A }) => {
	const [d, setD] = useState(0);
	const C = PW_Core.models.theory.scale.getNumeral({ A, d })

	return (
		<Fold label={'Roman Numeral'} level={3}>
			<div className="card">
				<ModelRow value={d} setValue={setD} label="d" mathType="integer" theoryType="degree" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const ScaleDocs = () => {
	// Definition
	const [a, setA] = useState(PW_Core.models.theory.note.preset.C.value);
	const [B, setB] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<Fold label={'Scale'} level={3}>
			<Fold label={'Definition'} level={4}>
				<div className="card">
					<ModelRow value={a} setValue={setA} max={max} label="a" mathType="pod" theoryType="note" />
					<ModelRow value={B} setValue={setB} max={max} label="B" mathType="podList" theoryType="intervalList" />
					<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
				</div>
			</Fold>
			<TransposeDocs A={C} />
			<NumeralDocs A={C} />
		</Fold>
	);
}

const ChordDocs = () => {
	// Definition
	const [a, setA] = useState(PW_Core.models.theory.note.preset.C.value);
	const [B, setB] = useState(PW_Core.models.theory.chord.preset.Maj7.value);
	const C = PW_Core.models.math.pod.addPodList({ a, B });

	return (
		<Fold label={'Chord'} level={3}>
			<Fold label={'Definition'} level={4}>
				<div className="card">
					<ModelRow value={a} setValue={setA} max={max} label="a" mathType="pod" theoryType="note" />
					<ModelRow value={B} setValue={setB} max={max} label="B" mathType="podList" theoryType="intervalList" />
					<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
				</div>
			</Fold>
			<TransposeDocs A={C} />
			<InversionDocs A={C} />
		</Fold>
	);
}

const TheoryDocs = () => {
	return (
		<Fold label={'Theory'} level={2}>
			<ScaleDocs />
			<ChordDocs />
		</Fold>
	);
}

export default TheoryDocs;
