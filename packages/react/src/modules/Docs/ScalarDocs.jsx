import PW_Core from '@pw/core';
import React, { useState } from "react";
import { ScalarMeter } from '../Meter/Meter';
import InputRow from './InputRow';
import ScalarInput from '../UI/ScalarInput/ScalarInput';
import "./Docs.css";

const ScalarDocs = () => {

	const [defaultValue, setDefaultValue] = useState(0);
	const [max, setMax] = useState(12);

	const [a, setA] = useState(3);
	const [b, setB] = useState(4);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	const result_modulo = PW_Core.models.scalar.modulo(a, divisor);

	const result_moduloSum = PW_Core.models.scalar.moduloSum(a, b, divisor, offset, subtraction);

	return (
		<div className='scalar-docs'>
			<h1>Scalar</h1>

			<h3>Constants</h3>

			<div className="card">
				<InputRow label="Default" x>
					<ScalarInput value={defaultValue} setValue={setDefaultValue} />
				</InputRow>
				<InputRow label="Max" x>
					<ScalarInput value={max} setValue={setMax} />
				</InputRow>


				<ScalarMeter values={[defaultValue]} max={max} colorFn={PW_Core.theory.pitchClass.getColor} />
			</div>

			<h3>Modulo</h3>

			<div className="card">
				<InputRow label="a" x>
					<ScalarInput value={a} setValue={setA} />
				</InputRow>

				<InputRow label="divisor" x>
					<ScalarInput value={divisor} setValue={setDivisor} />
				</InputRow>

				<div className="result">
					<label>=</label>
					<ScalarInput value={result_modulo} />
				</div>
			</div>

			<h3>Modulo Sum</h3>

			<div className="card">
				<InputRow label="a" x>
					<ScalarInput value={a} setValue={setA} />
				</InputRow>

				<InputRow label="b" x>
					<ScalarInput value={b} setValue={setB} />
				</InputRow>

				<InputRow label="divisor" x>
					<ScalarInput value={divisor} setValue={setDivisor} />
				</InputRow>

				<InputRow label="offset" x>
					<ScalarInput value={offset} setValue={setOffset} />
				</InputRow>

				<div className="result">
					<label>=</label>
					<ScalarInput value={result_moduloSum} />
				</div>
			</div>

		</div>
	);
}

export default ScalarDocs;
