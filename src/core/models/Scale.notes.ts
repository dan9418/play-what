// import { INTERVAL_PRESET_MAP } from '../pod/Interval';
// import index from '../index/PodIndex';
// import chord from './Chord';
// import Model from './Model';

// class Scale extends Model {
// 	static getMode({ A, d }) {
// 		return chord.getInversion({ A, n: d });
// 		/*let mode = [...A];
// 		mode = utils.rotate(mode, d);
// 		const modelRoot = mode[0];
// 		const newMode = mode.map((m) => [m[0] + modelRoot[0], m[1] + modelRoot[1]]);
// 		return newMode;*/
// 	};

// 	static getAllModes({ scale, modelRoot }) {
// 		/*const modes = [];
// 		for (let i = 1; i <= scale.length; i++) {
// 			modes.push(getMode({ scale, degree: i }));
// 		}
// 		return modes.map((m, i) => ({
// 			name: `Degree ${i + 1}`,
// 			a: modelRoot,
// 			B: m
// 		}));*/
// 	};

// 	static getNumeral({ A, d }) {
// 		const LIMIT = 7;
// 		const numeral = [];
// 		for (let i = 0; i < LIMIT; i = i + 2) {
// 			const curD = index.moduloSum({ a: d, b: i, divisor: A.length });
// 			const ivl = A[curD];
// 			if (i < d) ivl[0] = ivl[0] + 12;
// 			numeral.push(ivl);
// 		}
// 		return numeral;
// 	};

// 	static getAllNumerals({ scale, modelRoot }) {
// 		/*const numerals = [];
// 		for (let i = 0; i < scale.length; i++) {
// 			numerals.push(getNumeral({ scale, modelRoot, degree: i }));
// 		}
// 		return numerals;*/
// 	};

// 	static transpose({ A, b }) {
// 		return Model.addPods({ A, b });
// 	}

// 	getName() {
// 		return '?';
// 	}

// 	getType() {
// 		return 'scale';
// 	}

// }

// Scale.preset = SCALE_PRESET_MAP;
// Scale.presetValues = SCALE_PRESETS;

// export default Scale;


// interface IScaleNameOptions {
// 	useLongName?: boolean;
// }

// export const getScaleName = (scale: IPod[], options: IScaleNameOptions = {}): string => {
// 	const preset = SCALE_PRESETS.find(v => Model.areEqual(scale, v.value));
// 	const presetName = preset ? (options.useLongName ? preset.name : preset.id) : 'Unknown Scale';
// 	return presetName;
// };
