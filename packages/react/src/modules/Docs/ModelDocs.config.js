import pw_core from '@pw/core';
import './Docs.css';


const DOCS_CONFIG = {
	id: 'root',
	name: 'Play What?',
	modules: [
		{
			id: 'model',
			name: 'Models',
			submodules: [
				{
					id: 'model/index',
					name: 'Index',
					functions: [
						{
							id: 'model/index/modulo',
							name: 'modulo: (a, divisor) => c',
							fn: pw_core.models.math.index.modulo,
							props: {
								a: 7,
								b: 5
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'index',
									podType: null
								},
								{
									name: 'b',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								modelType: 'index',
								podType: null
							}
						},
						{
							id: 'model/index/moduloSum',
							name: 'moduloSum: (a, b, divisor) => c',
							fn: pw_core.models.math.index.moduloSum,
							props: {
								a: 7,
								b: 5,
								divisor: 7
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'index',
									podType: null
								},
								{
									name: 'b',
									modelType: 'index',
									podType: null
								},
								{
									name: 'divisor',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								modelType: 'index',
								podType: null
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
							fn: pw_core.models.math.pod.addPod,
							props: {
								a: pw_core.models.theory.interval.preset.M3.value,
								b: pw_core.models.theory.interval.preset.P5.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'pod',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'pod',
								podType: 'note'
							}
						},
						{
							id: 'model/pod/addpodList',
							name: 'addpodList: (a, B) => C',
							fn: pw_core.models.math.pod.addpodList,
							props: {
								a: pw_core.models.theory.note.preset.C.value,
								B: pw_core.models.theory.scale.preset.NaturalMinor.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'pod',
									podType: 'note'
								},
								{
									name: 'B',
									modelType: 'podList',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'model/podList',
					name: 'podList',
					functions: [
						{
							id: 'model/podList/addPod',
							name: 'addPod: (A, b) => C',
							fn: pw_core.models.math.podList.addPod,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								b: pw_core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						}
					]
				}
			]
		},
		{
			id: 'theory',
			name: 'Theory',
			submodules: [
				{
					id: 'pitch',
					name: 'Pitch: index',
					functions: [
						{
							id: 'theory/pitch/getName',
							name: 'getName: (p) => name',
							fn: pw_core.models.theory.pitch.getName,
							props: {
								p: pw_core.models.theory.pitch.preset.middleC.value
							},
							propDefs: [
								{
									name: 'p',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'degree',
					name: 'Degree: index',
					functions: [
						{
							id: 'theory/degree/getName',
							name: 'getName: (d) => name',
							fn: pw_core.models.theory.degree.getName,
							props: {
								d: pw_core.models.theory.degree.preset.C.value
							},
							propDefs: [
								{
									name: 'd',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'accidental',
					name: 'Accidental: index',
					functions: [
						{
							id: 'theory/accidental/getName',
							name: 'getName: (a) => name',
							fn: pw_core.models.theory.accidental.getName,
							props: {
								a: pw_core.models.theory.accidental.preset.natural.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: null
							}
						}
					]
				},
				{
					id: 'interval',
					name: 'Interval: pod',
					functions: [
						{
							id: 'theory/interval/getName',
							name: 'getName: (a) => name',
							fn: pw_core.models.theory.interval.getName,
							props: {
								A: pw_core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: 'interval'
							}
						}
					]
				},
				{
					id: 'note',
					name: 'Note: pod',
					functions: [
						{
							id: 'theory/note/getName',
							name: 'getName: (a) => name',
							fn: pw_core.models.theory.note.getName,
							props: {
								A: pw_core.models.theory.note.preset.C.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'pod',
									podType: 'note'
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'chord',
					name: 'Chord: podList',
					functions: [
						{
							id: 'theory/chord/inversion',
							name: 'inversion: (A, n) => C',
							fn: pw_core.models.theory.chord.getInversion,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								n: 0
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'n',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						},
						{
							id: 'theory/chord/transpose',
							name: 'transpose: (a, b) => C',
							fn: pw_core.models.theory.chord.transpose,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								b: pw_core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'scale',
					name: 'Scale: podList',
					functions: [
						{
							id: 'theory/scale/getNumeral',
							tags: [
								'theory', 'scale', 'getNumeral', 'roman numeral'
							],
							name: 'getNumeral: (A, d) => C',
							fn: pw_core.models.theory.scale.getNumeral,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								d: 0
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'd',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						},
						{
							id: 'theory/scale/getMode',
							name: 'getMode: (A, d) => C',
							fn: pw_core.models.theory.scale.getMode,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								d: 0
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'd',
									modelType: 'index',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						},
						{
							id: 'theory/scale/transpose',
							name: 'transpose: (a, b) => C',
							fn: pw_core.models.theory.scale.transpose,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								b: pw_core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'podList',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						}
					]
				}
			]
		},
		{
			id: 'struct',
			name: 'Structs',
			submodules: [
				{
					id: 'struct/cell',
					name: 'Cell',
					functions: [
						{
							id: 'struct/cell/from',
							name: 'modulo: (a, B) => C',
							fn: pw_core.models.struct.cell.from,
							props: {
								a: pw_core.models.theory.note.preset.C.value,
								B: pw_core.models.theory.chord.preset.Dom7.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'pod',
									podType: 'note'
								},
								{
									name: 'B',
									modelType: 'podList',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note'
							}
						}
					]
				}
			]
		}
	]
};

export default DOCS_CONFIG;
