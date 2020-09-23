import PW_Core from '@pw/core';
import React, { useState } from "react";
import Meter from '../viewers/Meter/Meter';
import PodListInput from '../models/math/PodListInput/PodListInput';
import PodInput from '../models/math/PodInput/PodInput';
import InputRow from './InputRow';
import ModelRow from './ModelRow';
import Fold from './Fold';
import { GenericModuleDocs } from './GenericDocs';

const max = [12, 7];

const THEORY_DOCS_CONFIG = [
	{
		id: 'scale',
		name: 'Scale',
		functions: [
			{
				id: 'theory/scale/getNumeral',
				tags: [
					'theory','scale','getNumeral','roman numeral'
				],
				name: 'getNumeral: (A, d) => C',
				fn: PW_Core.models.theory.scale.getNumeral,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					d: 0
				},
				/*
				out: {
					id: '',
					name: 'C'
				}*/
				// components?
				propDefs: [
					{
						// component: 'ModelRow',
						// props
						name: 'A',
						mathType: 'podList',
						theoryType: 'note'
					},
					{
						name: 'd',
						mathType: 'integer',
						theoryType: 'degree'
					}
				],
				// outComp??
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'note'
				}
			},
			{
				id: 'theory/scale/getMode',
				name: 'getMode: (A, d) => C',
				fn: PW_Core.models.theory.scale.getMode,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					d: 0
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'note'
					},
					{
						name: 'd',
						mathType: 'integer',
						theoryType: 'degree'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'note'
				}
			},
			{
				id: 'theory/scale/transpose',
				name: 'transpose: (a, b) => C',
				fn: PW_Core.models.theory.scale.transpose,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					b: PW_Core.models.theory.interval.preset.P1.value
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'note'
					},
					{
						name: 'b',
						mathType: 'pod',
						theoryType: 'interval'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'note'
				}
			}
		]
	},
	{
		id: 'chord',
		name: 'Chord',
		functions: [
			{
				id: 'theory/chord/inversion',
				name: 'inversion: (A, n) => C',
				fn: PW_Core.models.theory.chord.getInversion,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					n: 0
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'note'
					},
					{
						name: 'n',
						mathType: 'integer',
						theoryType: 'pitch'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'note'
				}
			},
			{
				id: 'theory/chord/transpose',
				name: 'transpose: (a, b) => C',
				fn: PW_Core.models.theory.chord.transpose,
				props: {
					A: PW_Core.models.theory.scale.preset.Major.value,
					b: PW_Core.models.theory.interval.preset.P1.value
				},
				propDefs: [
					{
						name: 'A',
						mathType: 'podList',
						theoryType: 'note'
					},
					{
						name: 'b',
						mathType: 'pod',
						theoryType: 'interval'
					}
				],
				outDef: {
					name: 'C',
					mathType: 'podList',
					theoryType: 'note'
				}
			}
		]
	}
];

const TheoryDocs = () => {
	return (
		<Fold label={'Theory'} level={2}>
			{THEORY_DOCS_CONFIG.map((c, i) => {
				return <GenericModuleDocs config={c} key={i} />;
			})}
		</Fold>
	);
}

export default TheoryDocs;
