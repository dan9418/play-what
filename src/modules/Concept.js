import { ALL_CONCEPT_PRESETS } from "./Concept.presets";

export const Presets = ALL_CONCEPT_PRESETS;

export const Defaults = {
    a: { p: 0, d: 0 },
    B: []
}

/*
export const transpose = ({ conceptConfig, interval }) => {
    const concept = { ...conceptConfig };
    concept.a = addVectors(concept.a, interval);
    return concept;
}*/

/*
export const chordalInversion = (conceptConfig, inversion) => {
    const concept = { ...conceptConfig };
    concept.B = [...conceptConfig.B];
    concept.B[0] = addVectors(concept.B[0], Presets.INTERVALS.P8.a);
    concept.B = rotate(concept.B, inversion);
    return concept;
}*/
