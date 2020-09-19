import PW_Core from '@pw/core';
import podList from '@pw/core/src/modules/models/podList';
import React, { useState } from "react";
import { PodMeter } from '../Meter/Meter';
import PodListInput from '../UI/PodListInput/PodListInput';
import PodInput from '../UI/PodInput/PodInput';
import "./Docs.css";
import InputRow from './InputRow';

const PodListDocs = () => {
	const [testValue, setTestValue] = useState(PW_Core.theory.scale.preset.NaturalMinor.value);
	const [max, setMax] = useState([12, 7]);

	const [A, setA] = useState(PW_Core.theory.scale.preset.NaturalMinor.value);
	const [B, setB] = useState(PW_Core.theory.scale.preset.Major.value);
	const [divisor, setDivisor] = useState(2);
	const [offset, setOffset] = useState(1);
	const [subtraction, setSubtraction] = useState(false);

	//const result_modulo = PW_Core.models.podList.modulo(a, divisor);

	return (
		<div className='podList-docs'>
			<h2>PodList</h2>

			<div className="card">
				<InputRow label="max" x>
					<PodInput value={max} setValue={setMax} />
				</InputRow>
				<InputRow label="testValue">
					<PodListInput value={testValue} setValue={setTestValue} />
				</InputRow>

				<PodMeter values={testValue} max={max} />
			</div>

		</div>
	);
}

export default PodListDocs;
