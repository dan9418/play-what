import PW_Core from '@pw/core';
import React, { useState } from "react";
import { IntegerMeter } from '../viewers/Meter/Meter';
import InputRow from './InputRow';
import IntegerInput from '../models/math/IntegerInput/IntegerInput';
import "./Docs.css";

const IntegerDocs = () => {

	const [max, setMax] = useState(12);

	const [a, setA] = useState(3);
	const [b, setB] = useState(4);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	const result_modulo = PW_Core.models.math.integer.modulo(a, divisor);

	const result_moduloSum = PW_Core.models.math.integer.moduloSum(a, b, divisor, offset, subtraction);

	const colorFn = PW_Core.models.theory.pitchClass.getColor;

	return (
		<div className='integer-docs'>
			<h2>Integer</h2>

			<div className="card">
				<InputRow label="max" x>
					<IntegerInput value={max} setValue={setMax} />
				</InputRow>
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>

				<IntegerMeter values={[a]} max={max} colorFn={colorFn} />
			</div>

			<h3>Modulo</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>
				<IntegerMeter values={[a]} max={max} colorFn={colorFn} />

				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>
				<IntegerMeter values={[divisor]} max={max} colorFn={colorFn} />

				<InputRow label="result" x>
					<IntegerInput value={result_modulo} />
				</InputRow>
				<IntegerMeter values={[result_modulo]} max={max} colorFn={colorFn} />
			</div>

			<h3>Modulo Sum</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>
				<IntegerMeter values={[a]} max={max} colorFn={colorFn} />

				<InputRow label="b" x>
					<IntegerInput value={b} setValue={setB} />
				</InputRow>
				<IntegerMeter values={[b]} max={max} colorFn={colorFn} />


				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>
				<IntegerMeter values={[divisor]} max={max} colorFn={colorFn} />


				<InputRow label="offset" x>
					<IntegerInput value={offset} setValue={setOffset} />
				</InputRow>
				<IntegerMeter values={[offset]} max={max} colorFn={colorFn} />


				<InputRow label="result" x>
					<IntegerInput value={result_moduloSum} />
				</InputRow>
				<IntegerMeter values={[result_moduloSum]} max={max} colorFn={colorFn} />

			</div>

		</div>
	);
}

export default IntegerDocs;
