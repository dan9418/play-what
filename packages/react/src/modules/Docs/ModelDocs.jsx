import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../viewers/Meter/Meter';
import PodListInput from '../models/math/PodListInput/PodListInput';
import PodInput from '../models/math/PodInput/PodInput';
import InputRow from './InputRow';
import ModelRow from './ModelRow';
import Fold from './Fold';
import { GenericModuleDocs } from './GenericDocs';


const MODEL_DOCS_CONFIG = [
	{
		id: 'model/integer',
		name: 'Integer',
		functions: [
			{
				id: 'model/integer/moduloSum',
				name: 'moduloSum: (a, b, divisor) => c',
				fn: PW_Core.models.math.integer.moduloSum,
				props: {
					a: PW_Core.models.theory.interval.preset.M3.value,
					b: PW_Core.models.theory.interval.preset.P5.value,
					divisor: 7
				},
				propDefs: [
					{
						name: 'a',
						mathType: 'integer',
						theoryType: null
					},
					{
						name: 'b',
						mathType: 'integer',
						theoryType: null
					},
					{
						name: 'divisor',
						mathType: 'integer',
						theoryType: null
					}
				],
				outDef: {
					name: 'c',
					mathType: 'integer',
					theoryType: null
				}
			}
		]
	},
	{
		id: 'model/pod',
		name: 'Pod',
		functions: [
			{
				id: 'model/pod/addPod',
				name: 'addPod: (a, b) => c',
				fn: PW_Core.models.math.pod.addPod,
				props: {
					a: PW_Core.models.theory.interval.preset.M3.value,
					b: PW_Core.models.theory.interval.preset.P5.value
				},
				propDefs: [
					{
						name: 'a',
						mathType: 'pod',
						theoryType: null
					},
					{
						name: 'b',
						mathType: 'pod',
						theoryType: null
					}
				],
				outDef: {
					name: 'c',
					mathType: 'pod',
					theoryType: null
				}
			}
		]
	}
];

const ModelDocs = () => {
	return (
		<Fold label={'Models'} level={2}>
			{MODEL_DOCS_CONFIG.map((c, i) => {
				return <GenericModuleDocs config={c} key={i} />;
			})}
		</Fold>
	);
}

export default ModelDocs;
