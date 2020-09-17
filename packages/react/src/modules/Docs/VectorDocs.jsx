import PW_Core from '@pw/core';
import matrix from '@pw/core/src/modules/models/matrix';
import vector from '@pw/core/src/modules/models/vector';
import React, { useState } from "react";
import { VectorMeter } from '../Meter/Meter';
import VectorInput from '../UI/VectorInput/VectorInput';
import "./Docs.css";

const VectorDocs = () => {

	const [A, setA] = useState(vector.preset.interval.M3.value);
	const [B, setB] = useState(vector.preset.interval.P5.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.vector.modulo(a, divisor);

	return (
		<div className='vector-docs'>
			<h1>Vector</h1>

			<h2>Default:</h2>
			<VectorInput value={[0, 0]} />

			<VectorMeter values={[A]} />

			{/*<h2>Modulo:</h2>
			<label>a</label>
			<VectorInput value={a} setValue={setA} />
			<label>divisor</label>
			<VectorInput value={divisor} setValue={setDivisor} />
			<label>=</label>
			<VectorInput value={result_modulo} />
			*/}

		</div>
	);
}

export default VectorDocs;
