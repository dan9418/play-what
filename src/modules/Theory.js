// Degrees

export const DEGREE_MAPPING = [
  {
    name: 'A',
    pitch: 9,
  },
  {
    name: 'B',
    pitch: 11,
  },
  {
    name: 'C',
    pitch: 0,
  },
  {
    name: 'D',
    pitch: 2,
  },
  {
    name: 'E',
    pitch: 4,
  },
  {
    name: 'F',
    pitch: 5,
  },
  {
    name: 'G',
    pitch: 7,
  },
];

// Accidentals

export const ACCIDENTAL = Object.freeze({
  Flat: {
    id: 'Flat',
    name: 'b',
    offset: -1,
  },
  Natural: {
    id: 'Natural',
    name: '♮',
    offset: 0,
  },
  Sharp: {
    id: 'Sharp',
    name: '#',
    offset: 1,
  },
});

export const ACCIDENTAL_VALUES = Object.freeze(Object.values(ACCIDENTAL));

export const getAccidentalString = (offset) => {
  switch (offset) {
    case 0:
      return '';
    case 1:
      return '#';
    case 2:
      return 'x';
    case -1:
      return 'b';
    case -2:
      return 'bb';
    default:
      return (offset < 0) ? `(${-offset}b)` : `(${offset}#)`;
  }
};
