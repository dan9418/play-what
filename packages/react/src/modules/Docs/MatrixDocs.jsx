import PW_Core from '@pw/core';
import podList from '@pw/core/src/modules/models/podList';
import React, { useState } from "react";
import { VectorMeter } from '../Meter/Meter';
import MatrixInput from '../UI/MatrixInput/MatrixInput';
import VectorInput from '../UI/VectorInput/VectorInput';
import "./Docs.css";
import InputRow from './InputRow';

const MatrixDocs = () => {
	const [defaultValue, setDefaultValue] = useState(PW_Core.theory.scale.preset.NaturalMinor.value);
	const [max, setMax] = useState([12, 7]);

	console.log(defaultValue)

	const [A, setA] = useState(PW_Core.theory.scale.preset.NaturalMinor.value);
	const [B, setB] = useState(PW_Core.theory.scale.preset.Major.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.podList.modulo(a, divisor);

	return (
		<div className='podList-docs'>
			<h1>Matrix</h1>

			<h3>Constants</h3>

			<div className="card">
				<InputRow label="Default">
					<MatrixInput value={defaultValue} setValue={setDefaultValue} />
				</InputRow>
				<InputRow label="Max" x>
					<VectorInput value={max} setValue={setMax} />
				</InputRow>

				<VectorMeter values={defaultValue} max={max} />
			</div>

		</div>
	);
}

export default MatrixDocs;
