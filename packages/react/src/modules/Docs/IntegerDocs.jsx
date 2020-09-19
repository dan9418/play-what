import PW_Core from '@pw/core';
import React, { useState } from "react";
import { IntegerMeter } from '../Meter/Meter';
import InputRow from './InputRow';
import IntegerInput from '../UI/IntegerInput/IntegerInput';
import "./Docs.css";

const IntegerDocs = () => {

	const [defaultValue, setDefaultValue] = useState(0);
	const [max, setMax] = useState(12);

	const [a, setA] = useState(3);
	const [b, setB] = useState(4);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	const result_modulo = PW_Core.models.integer.modulo(a, divisor);

	const result_moduloSum = PW_Core.models.integer.moduloSum(a, b, divisor, offset, subtraction);

	return (
		<div className='integer-docs'>
			<h2>Integer</h2>

			<h3>Constants</h3>

			<div className="card">
				<InputRow label="Default" x>
					<IntegerInput value={defaultValue} setValue={setDefaultValue} />
				</InputRow>
				<InputRow label="Max" x>
					<IntegerInput value={max} setValue={setMax} />
				</InputRow>


				<IntegerMeter values={[defaultValue]} max={max} colorFn={PW_Core.theory.pitchClass.getColor} />
			</div>

			<h3>Modulo</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>

				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>

				<div className="result">
					<label>=</label>
					<IntegerInput value={result_modulo} />
				</div>
			</div>

			<h3>Modulo Sum</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>

				<InputRow label="b" x>
					<IntegerInput value={b} setValue={setB} />
				</InputRow>

				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>

				<InputRow label="offset" x>
					<IntegerInput value={offset} setValue={setOffset} />
				</InputRow>

				<div className="result">
					<label>=</label>
					<IntegerInput value={result_moduloSum} />
				</div>
			</div>

		</div>
	);
}

export default IntegerDocs;
