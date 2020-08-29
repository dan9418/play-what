import INTERVAL from './Vector.Interval.presets';

export const MODE = {
  Ionian: { id: 'Ionian', name: 'Ionian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
  Dorian: { id: 'Dorian', name: 'Dorian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
  Phrygian: { id: 'Phrygian', name: 'Phrygian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
  Lydian: { id: 'Lydian', name: 'Lydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.A4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.M7.value] },
  Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.M3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.M6.value, INTERVAL.m7.value] },
  Aeolian: { id: 'Aeolian', name: 'Aeolian', value: [INTERVAL.P1.value, INTERVAL.M2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.P5.value, INTERVAL.m6.value, INTERVAL.m7.value] },
  Locrian: { id: 'Locrian', name: 'Locrian', value: [INTERVAL.P1.value, INTERVAL.m2.value, INTERVAL.m3.value, INTERVAL.P4.value, INTERVAL.d5.value, INTERVAL.m6.value, INTERVAL.m7.value] }
};

export default MODE;
