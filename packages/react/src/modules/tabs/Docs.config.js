import pw_core from '@pw/core';

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
									podType: 'note',
									theoryType: 'note'
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P5.value,
									modelType: 'pod',
									podType: 'interval',
									theoryType: 'interval'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'pod',
								podType: 'note',
								theoryType: 'note'
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
									podType: 'note',
									theoryType: 'note'
								},
								{
									name: 'B',
									value: pw_core.models.podList.chord.preset.Maj.value,
									modelType: 'podList',
									podType: 'interval',
									theoryType: 'chord'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note',
								theoryType: 'chord'
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
									podType: 'note',
									theoryType: 'scale'
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P1.value,
									modelType: 'pod',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note',
								theoryType: 'scale'
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
							fn: pw_core.models.pitch.getName,
							propDefs: [
								{
									name: 'p',
									value: pw_core.models.pitch.preset.middleC.value,
									modelType: 'index',
									podType: null,
									theoryType: null
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
							fn: pw_core.models.degree.getName,
							propDefs: [
								{
									name: 'd',
									value: pw_core.models.degree.preset.C.value,
									modelType: 'index',
									podType: null,
									theoryType: null
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
							propDefs: [
								{
									name: 'a',
									value: pw_core.theory.accidental.preset.natural.value,
									modelType: 'index',
									podType: null,
									theoryType: null
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: null,
								theoryType: null
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
							propDefs: [
								{
									name: 'a',
									value: pw_core.models.pod.interval.preset.P1.value,
									modelType: 'pod',
									podType: 'interval',
									theoryType: null
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
							propDefs: [
								{
									name: 'a',
									value: pw_core.models.pod.note.preset.C.value,
									modelType: 'pod',
									podType: 'note',
									theoryType: null
								}
							],
							outDef: {
								name: 'name',
								modelType: 'string',
								podType: 'note',
								theoryType: null
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
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'note',
									theoryType: null
								},
								{
									name: 'n',
									value: 0,
									modelType: 'index',
									podType: null,
									theoryType: null
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
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'note',
									theoryType: null
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P1.value,
									modelType: 'pod',
									podType: 'interval',
									theoryType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note',
								theoryType: null
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
							name: 'getNumeral: (A, d) => C',
							fn: pw_core.models.podList.scale.getNumeral,
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'note',
									theoryType: null
								},
								{
									name: 'd',
									value: 0,
									modelType: 'index',
									podType: null,
									theoryType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note',
								theoryType: null
							}
						},
						{
							id: 'models/podList/scale/getMode',
							name: 'getMode: (A, d) => C',
							fn: pw_core.models.podList.scale.getMode,
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'note',
									theoryType: null
								},
								{
									name: 'd',
									value: 0,
									modelType: 'index',
									podType: null,
									theoryType: null
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
							propDefs: [
								{
									name: 'A',
									value: pw_core.models.podList.scale.preset.Major.value,
									modelType: 'podList',
									podType: 'note',
									theoryType: null
								},
								{
									name: 'b',
									value: pw_core.models.pod.interval.preset.P1.value,
									modelType: 'pod',
									podType: 'interval',
									theoryType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'podList',
								podType: 'note',
								theoryType: null
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
							name: 'from: (a, B) => C',
							fn: pw_core.structs.cell.from,
							propDefs: [
								{
									name: 'keyCenter',
									value: pw_core.models.pod.note.preset.C.value,
									modelType: 'pod',
									podType: 'note',
									theoryType: 'note'
								},
								{
									name: 'intervals',
									value: pw_core.models.podList.chord.preset.Dom7.value,
									modelType: 'podList',
									podType: 'interval',
									theoryType: 'chord'
								}
							],
							outDef: {
								name: 'notes',
								modelType: 'podList',
								podType: 'note',
								theoryType: 'chord'
							}
						}
					]
				}
			]
		}
	]
};

export default DOCS_CONFIG;
