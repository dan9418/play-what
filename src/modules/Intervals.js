import { ALL_CONCEPT_PRESETS } from "./Concept.presets";

export const from = ({ preset }) => {
    if (!preset) throw ('only preset supported')
    return ALL_CONCEPT_PRESETS[preset].B;
}
