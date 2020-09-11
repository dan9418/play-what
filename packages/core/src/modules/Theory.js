// Degrees

const DEGREE_MAP = [
  {
    name: 'A',
    d: 0,
    p: 9
  },
  {
    name: 'B',
    d: 1,
    p: 11
  },
  {
    name: 'C',
    d: 2,
    p: 0
  },
  {
    name: 'D',
    d: 3,
    p: 2
  },
  {
    name: 'E',
    d: 4,
    p: 4
  },
  {
    name: 'F',
    d: 5,
    p: 5
  },
  {
    name: 'G',
    d: 6,
    p: 7
  }
];

// Accidentals

const ACCIDENTAL = Object.freeze({
  Flat: {
    id: 'Flat',
    name: 'b',
    offset: -1
  },
  Natural: {
    id: 'Natural',
    name: '♮',
    offset: 0
  },
  Sharp: {
    id: 'Sharp',
    name: '#',
    offset: 1
  }
});

const ACCIDENTAL_VALUES = Object.freeze(Object.values(ACCIDENTAL));

const getAccidentalString = (offset) => {
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

export default {
  DEGREE_MAP,
  ACCIDENTAL,
  ACCIDENTAL_VALUES,
  getAccidentalString
};
