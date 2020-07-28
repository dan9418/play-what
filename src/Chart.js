import { DEGREE_MAPPING, MAX_VECTOR } from "./Constants";
import Utils from './Utils';
import * as Presets from "./Presets";
import * as Theory from './Theory';

export const getConceptAt = (chart, position) => {
    const { a, B } = conceptConfig;
    const tonic = Theory.getNoteName(a);
    const preset = Theory.findPreset(B);
    return `${tonic} ${preset.name || '?'}`;
}

export const getConceptName = (conceptConfig) => {
    const { a, B } = conceptConfig;
    const tonic = Theory.getNoteName(a);
    const preset = Theory.findPreset(B);
    return `${tonic} ${preset.name || '?'}`;
}