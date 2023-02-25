const BASE_NOTE_INDEX = 9;
const BASE_PITCH = 440;

export const getFrequency = (p: number): number => {
  const delta = p - BASE_NOTE_INDEX;
  const exp = delta / 12;
  const multiplier = Math.pow(2, exp);
  const f = BASE_PITCH * multiplier;
  return Math.round(f);
};

// const getFrequencies = pitches => {
//     return pitches.map(p => getFrequency(p[0]));
// }

// const CALIBRATION_NOTE = {
//     frequency: 440,
//     noteIndex: 9
// };

// const CALIBRATION_CONSTANT = Math.pow(2, 1 / 12);

// export const TUNING_FN = {
// 	TET: {
// 		id: 'TET',
// 		name: 'TET',
// 		value: (pod: IPod): number | null => {
// 			if (!pod) return null;
// 			const [p, d] = pod;
// 			const a = p + 3;
// 			const b = a / 12;
// 			const c = Math.pow(2, b);
// 			const f = 440 * c;
// 			return Math.round(f);
// 		}
// 	}
// };
