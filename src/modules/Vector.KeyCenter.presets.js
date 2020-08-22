export const KEY_CENTER = {
  NA: { id: 'NA', name: 'N/A', value: { p: 0, d: -1 } },
  Ab: { id: 'Ab', name: 'Ab', value: { p: 8, d: 0 } },
  A: { id: 'A', name: 'A', value: { p: 9, d: 0 } },
  As: { id: 'As', name: 'A#', value: { p: 10, d: 0 } },
  Bb: { id: 'Bb', name: 'Bb', value: { p: 10, d: 1 } },
  B: { id: 'B', name: 'B', value: { p: 11, d: 1 } },
  Bs: { id: 'Bs', name: 'B#', value: { p: 0, d: 1 } },
  Cb: { id: 'Cb', name: 'Cb', value: { p: 11, d: 2 } },
  C: { id: 'C', name: 'C', value: { p: 0, d: 2 } },
  Cs: { id: 'Cs', name: 'C#', value: { p: 1, d: 2 } },
  Db: { id: 'Db', name: 'Db', value: { p: 1, d: 3 } },
  D: { id: 'D', name: 'D', value: { p: 2, d: 3 } },
  Ds: { id: 'Ds', name: 'D#', value: { p: 3, d: 3 } },
  Eb: { id: 'Eb', name: 'Eb', value: { p: 3, d: 4 } },
  E: { id: 'E', name: 'E', value: { p: 4, d: 4 } },
  Es: { id: 'Es', name: 'E#', value: { p: 5, d: 4 } },
  Fb: { id: 'Fb', name: 'Fb', value: { p: 4, d: 5 } },
  F: { id: 'F', name: 'F', value: { p: 5, d: 5 } },
  Fs: { id: 'Fs', name: 'F#', value: { p: 6, d: 5 } },
  Gb: { id: 'Gb', name: 'Gb', value: { p: 6, d: 6 } },
  G: { id: 'G', name: 'G', value: { p: 7, d: 6 } },
  Gs: { id: 'Gs', name: 'G#', value: { p: 8, d: 6 } },
};

export default {
  ...KEY_CENTER,
  all: Object.values(KEY_CENTER),
};
