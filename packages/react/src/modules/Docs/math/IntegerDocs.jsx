import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../../viewers/Meter/Meter';
import InputRow from '../InputRow';
import IntegerInput from '../../models/math/IntegerInput/IntegerInput';

const IntegerDocs = () => {

	const [max, setMax] = useState(12);

	const [a, setA] = useState(3);
	const [b, setB] = useState(4);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	const result_modulo = PW_Core.models.math.integer.modulo(a, divisor);

	const result_moduloSum = PW_Core.models.math.integer.moduloSum(a, b, divisor, offset, subtraction);

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

				<Meter type='integer' value={[a]} max={max} />
			</div>

			<h3>Modulo</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>
				<Meter type='integer' value={[a]} max={max} />

				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>
				<Meter type='integer' value={[divisor]} max={max} />

				<InputRow label="result" x>
					<IntegerInput value={result_modulo} />
				</InputRow>
				<Meter type='integer' value={[result_modulo]} max={max} />
			</div>

			<h3>Modulo Sum</h3>

			<div className="card">
				<InputRow label="a" x>
					<IntegerInput value={a} setValue={setA} />
				</InputRow>
				<Meter type='integer' value={[a]} max={max} />

				<InputRow label="b" x>
					<IntegerInput value={b} setValue={setB} />
				</InputRow>
				<Meter type='integer' value={[b]} max={max} />


				<InputRow label="divisor" x>
					<IntegerInput value={divisor} setValue={setDivisor} />
				</InputRow>
				<Meter type='integer' value={[divisor]} max={max} />


				<InputRow label="offset" x>
					<IntegerInput value={offset} setValue={setOffset} />
				</InputRow>
				<Meter type='integer' value={[offset]} max={max} />


				<InputRow label="result" x>
					<IntegerInput value={result_moduloSum} />
				</InputRow>
				<Meter type='integer' value={[result_moduloSum]} max={max} />

			</div>

		</div>
	);
}

export default IntegerDocs;
