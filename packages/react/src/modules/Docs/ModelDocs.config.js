import pw_core from '@pw/core';
import './ModelDocs.css';

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
							fn: pw_core.models.index.modulo,
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
							fn: pw_core.models.index.moduloSum,
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
							fn: pw_core.models.pod.addPod,
							props: {
								a: pw_core.models.pod.interval.preset.M3.value,
								b: pw_core.models.pod.interval.preset.P5.value
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
							fn: pw_core.models.pod.addpodList,
							props: {
								a: pw_core.models.pod.note.preset.C.value,
								B: pw_core.models.podList.scale.preset.NaturalMinor.value
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
							fn: pw_core.models.podList.addPod,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
								b: pw_core.models.pod.interval.preset.P1.value
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
							fn: pw_core.models.index.pitch.getName,
							props: {
								p: pw_core.models.index.pitch.preset.middleC.value
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
							fn: pw_core.models.index.degree.getName,
							props: {
								d: pw_core.models.index.degree.preset.C.value
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
							fn: pw_core.theory.accidental.getName,
							props: {
								a: pw_core.theory.accidental.preset.natural.value
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
							id: 'models/pod/interval/getName',
							name: 'getName: (a) => name',
							fn: pw_core.models.pod.getName,
							props: {
								A: pw_core.models.pod.interval.preset.P1.value
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
							id: 'models/pod/note/getName',
							name: 'getName: (a) => name',
							fn: pw_core.models.pod.note.getName,
							props: {
								A: pw_core.models.pod.note.preset.C.value
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
							id: 'models/podList/chord/inversion',
							name: 'inversion: (A, n) => C',
							fn: pw_core.models.podList.chord.getInversion,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
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
							id: 'models/podList/chord/transpose',
							name: 'transpose: (a, b) => C',
							fn: pw_core.models.podList.chord.transpose,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
								b: pw_core.models.pod.interval.preset.P1.value
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
							id: 'models/podList/scale/getNumeral',
							tags: [
								'theory', 'scale', 'getNumeral', 'roman numeral'
							],
							name: 'getNumeral: (A, d) => C',
							fn: pw_core.models.podList.scale.getNumeral,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
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
							id: 'models/podList/scale/getMode',
							name: 'getMode: (A, d) => C',
							fn: pw_core.models.podList.scale.getMode,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
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
							id: 'models/podList/scale/transpose',
							name: 'transpose: (a, b) => C',
							fn: pw_core.models.podList.scale.transpose,
							props: {
								A: pw_core.models.podList.scale.preset.Major.value,
								b: pw_core.models.pod.interval.preset.P1.value
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
			id: 'structs',
			name: 'Structs',
			submodules: [
				{
					id: 'structs/cell',
					name: 'Cell',
					functions: [
						{
							id: 'structs/cell/from',
							name: 'modulo: (a, B) => C',
							fn: pw_core.structs.cell.from,
							props: {
								a: pw_core.models.pod.note.preset.C.value,
								B: pw_core.models.podList.chord.preset.Dom7.value
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
