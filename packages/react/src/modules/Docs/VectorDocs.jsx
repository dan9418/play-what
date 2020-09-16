import PW_Core from '@pw/core';
import React, { useState } from "react";
import VectorInput from '../UI/VectorInput/VectorInput';
import "./Docs.css";

const VectorDocs = () => {

	const [a, setA] = useState([0, 0]);
	const [b, setB] = useState([1, 1]);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.vector.modulo(a, divisor);

	return (
		<div className='vector-docs'>
			<h1>Vector</h1>

			<h2>Default:</h2>
			<VectorInput value={[0, 0]} />

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
