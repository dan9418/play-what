import { INTERVAL } from './Vector.Interval.presets';

export const NUMERAL = {
  I: { id: 'I', name: 'I', value: [INTERVAL.P1.value, INTERVAL.M3.value, INTERVAL.P5.value] },
};

/* export const ROMAN_NUMERAL = {
      i: { id: 'i', name: 'i', value: Theory.addVectorsBatch(INTERVAL.P1.value, CHORD.Min7.B)},
      ii: { id: 'ii', name: 'ii', value: Theory.addVectorsBatch(INTERVAL.M2.value, CHORD.Min7.B)},
      iii: { id: 'iii', name: 'iii', value: Theory.addVectorsBatch(INTERVAL.M3.value, CHORD.Min7.B)},
      iv: { id: 'iv', name: 'iv', value: Theory.addVectorsBatch(INTERVAL.P4.value, CHORD.Min7.B)},
      v: { id: 'v', name: 'v', value: Theory.addVectorsBatch(INTERVAL.P5.value, CHORD.Min7.B)},
      vi: { id: 'vi', name: 'vi', value: Theory.addVectorsBatch(INTERVAL.M6.value, CHORD.Min7.B)},
      vii: { id: 'vii', name: 'vii', value: Theory.addVectorsBatch(INTERVAL.M7.value, CHORD.Min7.B)},
      I: { id: 'I', name: 'I', value: Theory.addVectorsBatch(INTERVAL.P1.value, CHORD.Maj7.B)},
      II: { id: 'II', name: 'II', value: Theory.addVectorsBatch(INTERVAL.M2.value, CHORD.Maj7.B)},
      III: { id: 'III', name: 'III', value: Theory.addVectorsBatch(INTERVAL.M3.value, CHORD.Maj7.B)},
      IV: { id: 'IV', name: 'IV', value: Theory.addVectorsBatch(INTERVAL.P4.value, CHORD.Maj7.B)},
      V: { id: 'V', name: 'V', value: Theory.addVectorsBatch(INTERVAL.P5.value, CHORD.Maj7.B)},
      VI: { id: 'VI', name: 'VI', value: Theory.addVectorsBatch(INTERVAL.M6.value, CHORD.Maj7.B)},
      VII: { id: 'VII', name: 'VII', value: Theory.addVectorsBatch(INTERVAL.M7.value, CHORD.Maj7.B)}
  }; */

export default {
  ...NUMERAL,
  all: Object.values(NUMERAL),
};
