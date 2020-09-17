import PW_Core from '@pw/core';
import matrix from '@pw/core/src/modules/models/matrix';
import React, { useState } from "react";
import { VectorMeter } from '../Meter/Meter';
import MatrixInput from '../UI/MatrixInput/MatrixInput';
import "./Docs.css";

const MatrixDocs = () => {
	const [defaultValue, setDefaultValue] = useState(PW_Core.models.matrix.preset.scale.NaturalMinor.value);
	const [max, setMax] = useState([12, 7]);

	console.log(defaultValue)

	const [A, setA] = useState(matrix.preset.scale.NaturalMinor.value);
	const [B, setB] = useState(matrix.preset.scale.Major.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.matrix.modulo(a, divisor);

	return (
		<div className='matrix-docs'>
			<h1>Matrix</h1>

			<h2>Default:</h2>
			<div className="card">
				<MatrixInput value={defaultValue} setValue={setDefaultValue} />
				<VectorMeter values={defaultValue} max={max} />
			</div>

			{/*<h2>Modulo:</h2>
			<label>a</label>
			<MatrixInput value={a} setValue={setA} />
			<label>divisor</label>
			<MatrixInput value={divisor} setValue={setDivisor} />
			<label>=</label>
			<MatrixInput value={result_modulo} />
			*/}

		</div>
	);
}

export default MatrixDocs;
