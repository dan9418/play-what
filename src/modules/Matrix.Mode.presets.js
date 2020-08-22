import { INTERVAL } from './Vector.Interval.presets';

export const MODE = {
  Ionian: { id: 'Ionian', name: 'Ionian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
  Dorian: { id: 'Dorian', name: 'Dorian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
  Phrygian: { id: 'Phrygian', name: 'Phrygian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
  Lydian: { id: 'Lydian', name: 'Lydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
  Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
  Aeolian: { id: 'Aeolian', name: 'Aeolian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
  Locrian: { id: 'Locrian', name: 'Locrian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.d5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
};

/* export const MODE = Object.freeze({
      Ionian: { id:'Ionian', name:'Ionian', scale:'Major', degree: 1 },
      Dorian: { id:'Dorian', name:'Dorian', scale:'Major', degree: 2 },
      Phrygian: { id:'Phrygian', name:'Phrygian', scale:'Major', degree: 3 },
      Lydian: { id:'Lydian', name:'Lydian', scale:'Major', degree: 4 },
      Mixolydian: { id:'Mixolydian', name:'Mixolydian', scale:'Major', degree: 5 },
      Aeolian: { id:'Aeolian', name:'Aeolian', scale:'Major', degree: 6 },
      Locrian: { id:'Locrian', name:'Locrian', scale:'Major', degree: 7 }
  }); */

export default {
  ...MODE,
  all: Object.values(MODE),
};
