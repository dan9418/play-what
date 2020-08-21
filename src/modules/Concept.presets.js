export const INTERVALS = Object.freeze({
  P1: {
    id: 'P1',
    name: 'Perfect Unison',
    a: {
      d: 0,
      p: 0,
    },
  },
  m2: {
    id: 'm2',
    name: 'Minor 2nd',
    a: {
      d: 1,
      p: 1,
    },
  },
  M2: {
    id: 'M2',
    name: 'Major 2nd',
    a: {
      d: 1,
      p: 2,
    },
  },
  A2: {
    id: 'A2',
    name: 'Augmented 2nd',
    a: {
      d: 1,
      p: 3,
    },
  },
  d3: {
    id: 'd3',
    name: 'Diminished 3rd',
    a: {
      d: 2,
      p: 2,
    },
  },
  m3: {
    id: 'm3',
    name: 'Minor 3rd',
    a: {
      d: 2,
      p: 3,
    },
  },
  M3: {
    id: 'M3',
    name: 'Major 3rd',
    a: {
      d: 2,
      p: 4,
    },
  },
  A3: {
    id: 'A3',
    name: 'Augmented 3rd',
    a: {
      d: 2,
      p: 5,
    },
  },
  d4: {
    id: 'd4',
    name: 'Diminished 4th',
    a: {
      d: 3,
      p: 4,
    },
  },
  P4: {
    id: 'P4',
    name: 'Perfect 4th',
    a: {
      d: 3,
      p: 5,
    },
  },
  A4: {
    id: 'A4',
    name: 'Augmented 4th',
    a: {
      d: 3,
      p: 6,
    },
  },
  d5: {
    id: 'd5',
    name: 'Diminished 5th',
    a: {
      d: 4,
      p: 6,
    },
  },
  P5: {
    id: 'P5',
    name: 'Perfect 5th',
    a: {
      d: 4,
      p: 7,
    },
  },
  A5: {
    id: 'A5',
    name: 'Augmented 5th',
    a: {
      d: 4,
      p: 8,
    },
  },
  d6: {
    id: 'd6',
    name: 'Diminished 6th',
    a: {
      d: 5,
      p: 7,
    },
  },
  m6: {
    id: 'm6',
    name: 'Minor 6th',
    a: {
      d: 5,
      p: 8,
    },
  },
  M6: {
    id: 'M6',
    name: 'Major 6th',
    a: {
      d: 5,
      p: 9,
    },
  },
  A6: {
    id: 'A6',
    name: 'Augmented 6th',
    a: {
      d: 5,
      p: 10,
    },
  },
  d7: {
    id: 'd7',
    name: 'Diminished 7th',
    a: {
      d: 6,
      p: 9,
    },
  },
  m7: {
    id: 'm7',
    name: 'Minor 7th',
    a: {
      d: 6,
      p: 10,
    },
  },
  M7: {
    id: 'M7',
    name: 'Major 7th',
    a: {
      d: 6,
      p: 11,
    },
  },
  P8: {
    id: 'P8',
    name: 'Octave',
    a: {
      d: 7,
      p: 12,
    },
  },
});

export const INTERVALS_VALUES = Object.freeze(Object.values(INTERVALS));

export const INTERVAL_PAIR = Object.freeze({
  P1: { id: 'P1', name: 'P1', B: [INTERVALS.P1.a, INTERVALS.P1.a] },
  m2: { id: 'm2', name: 'm2', B: [INTERVALS.P1.a, INTERVALS.m2.a] },
  M2: { id: 'M2', name: 'M2', B: [INTERVALS.P1.a, INTERVALS.M2.a] },
  A2: { id: 'A2', name: 'A2', B: [INTERVALS.P1.a, INTERVALS.A2.a] },
  d3: { id: 'd3', name: 'd3', B: [INTERVALS.P1.a, INTERVALS.d3.a] },
  m3: { id: 'm3', name: 'm3', B: [INTERVALS.P1.a, INTERVALS.m3.a] },
  M3: { id: 'M3', name: 'M3', B: [INTERVALS.P1.a, INTERVALS.M3.a] },
  P4: { id: 'P4', name: 'P4', B: [INTERVALS.P1.a, INTERVALS.P4.a] },
  A4: { id: 'A4', name: 'A4', B: [INTERVALS.P1.a, INTERVALS.A4.a] },
  d5: { id: 'd5', name: 'd5', B: [INTERVALS.P1.a, INTERVALS.d5.a] },
  P5: { id: 'P5', name: 'P5', B: [INTERVALS.P1.a, INTERVALS.P5.a] },
  A5: { id: 'A5', name: 'A5', B: [INTERVALS.P1.a, INTERVALS.A5.a] },
  d6: { id: 'd6', name: 'd6', B: [INTERVALS.P1.a, INTERVALS.d6.a] },
  m6: { id: 'm6', name: 'm6', B: [INTERVALS.P1.a, INTERVALS.m6.a] },
  M6: { id: 'M6', name: 'M6', B: [INTERVALS.P1.a, INTERVALS.M6.a] },
  d7: { id: 'd7', name: 'd7', B: [INTERVALS.P1.a, INTERVALS.d7.a] },
  m7: { id: 'm7', name: 'm7', B: [INTERVALS.P1.a, INTERVALS.m7.a] },
  M7: { id: 'M7', name: 'M7', B: [INTERVALS.P1.a, INTERVALS.M7.a] },
});

export const INTERVAL_PAIR_VALUES = Object.freeze(Object.values(INTERVAL_PAIR));

export const CHORD = Object.freeze({
  Maj: { id: 'Maj', name: 'Major Triad', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a] },
  Maj6: { id: 'Maj6', name: 'Major 6th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M6.a] },
  Maj7: { id: 'Maj7', name: 'Major 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M7.a] },
  Min: { id: 'Min', name: 'Minor Triad', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a] },
  Min6: { id: 'Min6', name: 'Minor 6th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.M6.a] },
  Min7: { id: 'Min7', name: 'Minor 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.m7.a] },
  MinMaj7: { id: 'MinMaj7', name: 'Minor-Major 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P5.a, INTERVALS.M7.a] },
  Dom7: { id: 'Dom7', name: 'Dominant 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.m7.a] },
  Dom7b9: { id: 'Dom7b9', name: 'Dominant 7th (b9)', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.m7.a, INTERVALS.m2.a] },
  Aug: { id: 'Aug', name: 'Augmented Triad', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a] },
  Aug7: { id: 'Aug7', name: 'Augmented 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a, INTERVALS.m7.a] },
  AugM7: { id: 'AugM7', name: 'Augmented Major 7th', B: [INTERVALS.P1.a, INTERVALS.M3.a, INTERVALS.A5.a, INTERVALS.M7.a] },
  Dim: { id: 'Dim', name: 'Diminished Triad', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a] },
  Dim7: { id: 'Dim7', name: 'Diminished 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a, INTERVALS.d7.a] },
  HalfDim7: { id: 'HalfDim7', name: 'Half-Diminished 7th', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.d5.a, INTERVALS.m7.a] },
  Sus2: { id: 'Sus2', name: 'Suspended 2nd', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.P5.a] },
  Sus4: { id: 'Sus4', name: 'Suspended 4th', B: [INTERVALS.P1.a, INTERVALS.P4.a, INTERVALS.P5.a] },
});

export const CHORD_VALUES = Object.freeze(Object.values(CHORD));

export const SCALE = Object.freeze({
  Major: { id: 'Major', name: 'Major', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },
  NaturalMinor: { id: 'NaturalMinor', name: 'Natural Minor', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },
  HarmonicMinor: { id: 'HarmonicMinor', name: 'Harmonic Minor', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.M7.a] },
  MajorPentatonic: { id: 'MajorPentatonic', name: 'Major Pentatonic', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P5.a, INTERVALS.M6.a] },
  MinorPentatonic: { id: 'MinorPentatonic', name: 'Minor Pentatonic', B: [INTERVALS.P1.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m7.a] },
  Chromatic: { id: 'Chromatic', name: 'Chromatic', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.A4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.M6.a, INTERVALS.m7.a, INTERVALS.M7.a] },
});

export const SCALE_VALUES = Object.freeze(Object.values(SCALE));

export const QUICK_MODE = {
  Ionian: { id: 'Ionian', name: 'Ionian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },
  Dorian: { id: 'Dorian', name: 'Dorian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.m7.a] },
  Phrygian: { id: 'Phrygian', name: 'Phrygian', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },
  Lydian: { id: 'Lydian', name: 'Lydian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.A4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.M7.a] },
  Mixolydian: { id: 'Mixolydian', name: 'Mixolydian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.M3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.M6.a, INTERVALS.m7.a] },
  Aeolian: { id: 'Aeolian', name: 'Aeolian', B: [INTERVALS.P1.a, INTERVALS.M2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.P5.a, INTERVALS.m6.a, INTERVALS.m7.a] },
  Locrian: { id: 'Locrian', name: 'Locrian', B: [INTERVALS.P1.a, INTERVALS.m2.a, INTERVALS.m3.a, INTERVALS.P4.a, INTERVALS.d5.a, INTERVALS.m6.a, INTERVALS.m7.a] },
};

export const QUICK_MODE_VALUES = Object.freeze(Object.values(QUICK_MODE));

/* export const MODE = Object.freeze({
    Ionian: { id:'Ionian', name:'Ionian', scale:'Major', degree: 1 },
    Dorian: { id:'Dorian', name:'Dorian', scale:'Major', degree: 2 },
    Phrygian: { id:'Phrygian', name:'Phrygian', scale:'Major', degree: 3 },
    Lydian: { id:'Lydian', name:'Lydian', scale:'Major', degree: 4 },
    Mixolydian: { id:'Mixolydian', name:'Mixolydian', scale:'Major', degree: 5 },
    Aeolian: { id:'Aeolian', name:'Aeolian', scale:'Major', degree: 6 },
    Locrian: { id:'Locrian', name:'Locrian', scale:'Major', degree: 7 }
}); */

export const ROMAN_NUMERAL = {};

/* export const ROMAN_NUMERAL = {
    i: { id: 'i', name: 'i', B: Theory.addVectorsBatch(INTERVALS.P1.a, CHORD.Min7.B)},
    ii: { id: 'ii', name: 'ii', B: Theory.addVectorsBatch(INTERVALS.M2.a, CHORD.Min7.B)},
    iii: { id: 'iii', name: 'iii', B: Theory.addVectorsBatch(INTERVALS.M3.a, CHORD.Min7.B)},
    iv: { id: 'iv', name: 'iv', B: Theory.addVectorsBatch(INTERVALS.P4.a, CHORD.Min7.B)},
    v: { id: 'v', name: 'v', B: Theory.addVectorsBatch(INTERVALS.P5.a, CHORD.Min7.B)},
    vi: { id: 'vi', name: 'vi', B: Theory.addVectorsBatch(INTERVALS.M6.a, CHORD.Min7.B)},
    vii: { id: 'vii', name: 'vii', B: Theory.addVectorsBatch(INTERVALS.M7.a, CHORD.Min7.B)},
    I: { id: 'I', name: 'I', B: Theory.addVectorsBatch(INTERVALS.P1.a, CHORD.Maj7.B)},
    II: { id: 'II', name: 'II', B: Theory.addVectorsBatch(INTERVALS.M2.a, CHORD.Maj7.B)},
    III: { id: 'III', name: 'III', B: Theory.addVectorsBatch(INTERVALS.M3.a, CHORD.Maj7.B)},
    IV: { id: 'IV', name: 'IV', B: Theory.addVectorsBatch(INTERVALS.P4.a, CHORD.Maj7.B)},
    V: { id: 'V', name: 'V', B: Theory.addVectorsBatch(INTERVALS.P5.a, CHORD.Maj7.B)},
    VI: { id: 'VI', name: 'VI', B: Theory.addVectorsBatch(INTERVALS.M6.a, CHORD.Maj7.B)},
    VII: { id: 'VII', name: 'VII', B: Theory.addVectorsBatch(INTERVALS.M7.a, CHORD.Maj7.B)}
}; */

export const ROMAN_NUMERAL_VALUES = Object.values(ROMAN_NUMERAL);

export const ALL_CONCEPT_PRESETS = {
  ...INTERVAL_PAIR, ...CHORD, ...SCALE, ...QUICK_MODE, ...ROMAN_NUMERAL,
};
export const ALL_CONCEPT_PRESET_VALUES = [...ROMAN_NUMERAL_VALUES, ...INTERVAL_PAIR_VALUES, ...CHORD_VALUES, ...SCALE_VALUES, ...QUICK_MODE_VALUES];
