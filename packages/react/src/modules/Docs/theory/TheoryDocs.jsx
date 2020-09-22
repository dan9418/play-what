import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import PodListInput from '../../models/math/PodListInput/PodListInput';
import PodInput from '../../models/math/PodInput/PodInput';
import InputRow from '../InputRow';
import ModelRow from '../ModelRow';
import Fold from '../Fold';

const max = [12, 7];

const GENERIC_CONFIG = {
	id: 'theory/chord/transpose',
	name: 'transpose: (a, b) => C',
	fn: PW_Core.models.theory.chord.transpose,
	props: {
		A: PW_Core.models.theory.scale.preset.Major.value,
		b: PW_Core.models.theory.interval.preset.P1.value
	},
	propDefs: [
		{
			name: 'A',
			mathType: 'podList',
			theoryType: 'noteList'
		},
		{
			name: 'b',
			mathType: 'pod',
			theoryType: 'interval'
		}
	],
	outDef: {
		name: 'C',
		mathType: 'podList',
		theoryType: 'noteList'
	}
}

const GenericDocs = ({ config }) => {
	const { id, name, fn, props: propsIn, propDefs, outDef } = config;

	const [props, setProps] = useState(propsIn);
	const setProp = (pName, pValue) => {
		const newProps = {
			...props,
			[pName]: pValue
		}
		setProps(newProps);
	};

	const out = fn(props);

	return (
		<Fold label={name} level={3}>
			<div className="card">
				{propDefs.map((p, i) => {
					const { name, mathType, theoryType } = p;
					const value = props[name];
					const setValue = v => setProp(name, v);
					return <ModelRow key={i} value={value} setValue={setValue} max={max} label={name} mathType={mathType} theoryType={theoryType} />;
				})}
				<ModelRow value={out} max={max} label={outDef.name} mathType={outDef.mathType} theoryType={outDef.theoryType} />
			</div>
		</Fold>
	);
}

const TransposeDocs = () => {
	const [A, setA] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const [b, setB] = useState(PW_Core.models.theory.interval.preset.P1.value);
	const C = PW_Core.models.theory.chord.transpose({ A, b });

	return (
		<Fold label={'transpose: (a, b) => C'} level={3}>
			<div className="card">
				<ModelRow value={A} setValue={setA} max={max} label="A" mathType="podList" theoryType="noteList" />
				<ModelRow value={b} setValue={setB} max={max} label="b" mathType="pod" theoryType="interval" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const InversionDocs = () => {
	const [A, setA] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const [n, setN] = useState(0);
	const C = PW_Core.models.theory.chord.getInversion({ A, n })

	return (
		<Fold label={'inversion: (A, n) => C'} level={3}>
			<div className="card">
				<ModelRow value={A} setValue={setA} max={max} label="A" mathType="podList" theoryType="noteList" />
				<ModelRow value={n} setValue={setN} label="n" mathType="integer" theoryType="pitch" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const NumeralDocs = () => {
	const [A, setA] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const [d, setD] = useState(0);
	const C = PW_Core.models.theory.scale.getNumeral({ A, d })

	return (
		<Fold label={'getNumeral: (A, d) => C'} level={3}>
			<div className="card">
				<ModelRow value={A} setValue={setA} max={max} label="A" mathType="podList" theoryType="noteList" />
				<ModelRow value={d} setValue={setD} label="d" mathType="integer" theoryType="degree" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const ModeDocs = () => {
	const [A, setA] = useState(PW_Core.models.theory.scale.preset.Major.value);
	const [d, setD] = useState(0);
	const C = PW_Core.models.theory.scale.getMode({ A, d })

	return (
		<Fold label={'getMode: (A, d) => C'} level={3}>
			<div className="card">
				<ModelRow value={A} setValue={setA} max={max} label="A" mathType="podList" theoryType="noteList" />
				<ModelRow value={d} setValue={setD} label="d" mathType="integer" theoryType="degree" />
				<ModelRow value={C} max={max} label="C" mathType="podList" theoryType="noteList" />
			</div>
		</Fold>
	);
}

const ScaleDocs = () => {
	return (
		<Fold label={'Scale'} level={3}>
			<TransposeDocs />
			<NumeralDocs />
			<ModeDocs />
		</Fold>
	);
}

const ChordDocs = () => {
	return (
		<Fold label={'Chord'} level={3}>
			<TransposeDocs />
			<GenericDocs config={GENERIC_CONFIG} />
			<InversionDocs />
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
