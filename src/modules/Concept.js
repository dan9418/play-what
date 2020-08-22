import * as Vector from './Vector';

export const Defaults = {
  a: { p: 0, d: 0 },
  B: []
};

export const notesFrom = ({ a, B }) => Vector.addMatrix({ a, B });

/*
export const chordalInversion = (conceptConfig, inversion) => {
    const concept = { ...conceptConfig };
    concept.B = [...conceptConfig.B];
    concept.B[0] = addVectors(concept.B[0], Presets.INTERVALS.P8.a);
    concept.B = rotate(concept.B, inversion);
    return concept;
} */
