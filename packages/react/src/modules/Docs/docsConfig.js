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
					id: 'model/scalar',
					name: 'Scalar',
					functions: [
						{
							id: 'model/scalar/modulo',
							name: 'modulo: (a, divisor) => c',
							fn: pw_core.models.math.scalar.modulo,
							props: {
								a: 7,
								b: 5
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'scalar',
									podType: null
								},
								{
									name: 'b',
									modelType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								modelType: 'scalar',
								podType: null
							}
						},
						{
							id: 'model/scalar/moduloSum',
							name: 'moduloSum: (a, b, divisor) => c',
							fn: pw_core.models.math.scalar.moduloSum,
							props: {
								a: 7,
								b: 5,
								divisor: 7
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'scalar',
									podType: null
								},
								{
									name: 'b',
									modelType: 'scalar',
									podType: null
								},
								{
									name: 'divisor',
									modelType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'c',
								modelType: 'scalar',
								podType: null
							}
						}
					]
				},
				{
					id: 'model/vector',
					name: 'Vector',
					functions: [
						{
							id: 'model/vector/addVector',
							name: 'addVector: (a, b) => c',
							fn: pw_core.models.math.vector.addVector,
							props: {
								a: pw_core.models.theory.interval.preset.M3.value,
								b: pw_core.models.theory.interval.preset.P5.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'vector',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'c',
								modelType: 'vector',
								podType: 'note'
							}
						},
						{
							id: 'model/vector/addMatrix',
							name: 'addMatrix: (a, B) => C',
							fn: pw_core.models.math.vector.addMatrix,
							props: {
								a: pw_core.models.theory.note.preset.C.value,
								B: pw_core.models.theory.scale.preset.NaturalMinor.value
							},
							propDefs: [
								{
									name: 'a',
									modelType: 'vector',
									podType: 'note'
								},
								{
									name: 'B',
									modelType: 'matrix',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'model/matrix',
					name: 'Matrix',
					functions: [
						{
							id: 'model/matrix/addVector',
							name: 'addVector: (A, b) => C',
							fn: pw_core.models.math.matrix.addVector,
							props: {
								A: pw_core.models.theory.scale.preset.Major.value,
								b: pw_core.models.theory.interval.preset.P1.value
							},
							propDefs: [
								{
									name: 'A',
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
					name: 'Pitch: scalar',
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
									modelType: 'scalar',
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
					name: 'Degree: scalar',
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
									modelType: 'scalar',
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
					name: 'Accidental: scalar',
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
									modelType: 'scalar',
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
					name: 'Interval: vector',
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
									modelType: 'vector',
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
					name: 'Note: vector',
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
									modelType: 'vector',
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
					name: 'Chord: matrix',
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
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'n',
									modelType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
								podType: 'note'
							}
						}
					]
				},
				{
					id: 'scale',
					name: 'Scale: matrix',
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
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'd',
									modelType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'd',
									modelType: 'scalar',
									podType: null
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
									modelType: 'matrix',
									podType: 'note'
								},
								{
									name: 'b',
									modelType: 'vector',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
									modelType: 'vector',
									podType: 'note'
								},
								{
									name: 'B',
									modelType: 'matrix',
									podType: 'interval'
								}
							],
							outDef: {
								name: 'C',
								modelType: 'matrix',
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
