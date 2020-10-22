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
							fn: pw_core.models.index.modulo,
							propDefs: [
								{
									name: 'a',
									value: 7,
									modelType: 'index',
									podType: 'number'
								},
								{
									name: 'b',
									value: 5,
									modelType: 'index',
									podType: 'number'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'index',
								podType: 'number'
							}
						},
						{
							id: 'model/index/moduloSum',
							name: 'moduloSum: (a, b, divisor) => c',
							fn: pw_core.models.index.moduloSum,
							propDefs: [
								{
									name: 'a',
									value: 7,
									modelType: 'index',
									podType: 'number'
								},
								{
									name: 'b',
									value: 5,
									modelType: 'index',
									podType: 'number'
								},
								{
									name: 'divisor',
									value: 7,
									modelType: 'index',
									podType: 'number'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'index',
								podType: 'number'
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
							propDefs: [
								{
									name: 'a',
									value: pw_core.models.pod.interval.preset.M3.value,
									modelType: 'pod',
									podType: 'pod'
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P5.value,
									modelType: 'pod',
									podType: 'pod'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'pod',
								podType: 'pod'
							}
						},
						{
							id: 'model/pod/addPodList',
							name: 'addPodList: (a, B) => C',
							fn: pw_core.models.pod.addPodList,
							propDefs: [
								{
									name: 'a',
									value: pw_core.models.pod.note.preset.C.value,
									modelType: 'pod',
									podType: 'pod'
								},
								{
									name: 'B',
									value: pw_core.models.podList.chord.preset.Maj.value,
									modelType: 'podList',
									podType: 'podList'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'podList'
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
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'podList'
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P1.value,
									modelType: 'pod',
									podType: 'pod'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'podList'
							}
						}
					]
				}
			]
		},
		/*{
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
							propDefs: {
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
		},*/
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
							name: 'from: (a, B) => C',
							fn: pw_core.structs.cell.from,
							propDefs: [
								{
									name: 'keyCenter',
									modelType: 'pod',
									podType: 'note',
									value: pw_core.models.pod.note.preset.C.value
								},
								{
									name: 'intervals',
									modelType: 'podList',
									podType: 'intervalLIst',
									value: pw_core.models.podList.chord.preset.Dom7.value
								}
							],
							outDef: {
								name: 'notes',
								modelType: 'podList',
								podType: 'noteList'
							}
						}
					]
				}
			]
		}
	]
};

export default DOCS_CONFIG;
