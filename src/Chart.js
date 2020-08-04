import { DEGREE_MAPPING, MAX_VECTOR, SCOPE, CONCEPT_DEFAULTS } from "./Constants";
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

export const parseConceptHelper = (conceptConfig) => {
    let concept = { ...conceptConfig };
    if (typeof concept.a === 'string') {
        concept.a = Theory.parseKeyString(concept.a);
    }
    if (typeof concept.B === 'string') {
        concept.B = Theory.findPresetWithId(concept.B).B;
    }
    if (concept.transforms) {
        concept.transforms.forEach(t => {
            switch (t.id) {
                case 'transpose':
                    concept = Theory.transpose(concept, t.args.a);
                    break;
                case 'chordalInversion':
                    concept = Theory.chordalInversion(concept, t.args.inversion)
                    break;
            }
        })
    }
    concept.C = Theory.addVectorsBatch(concept.a, concept.B);
    return concept;
};

export const parseConceptConfig = (conceptConfig, defaults) => {
    const { id, name } = conceptConfig;

    const mergedDefaults = {
        ...CONCEPT_DEFAULTS,
        ...defaults
    };

    const mergedConfig = { ...mergedDefaults, ...conceptConfig };

    const concept = parseConceptHelper(mergedConfig);

    return {
        id: id || `concept`,
        name: name || getConceptName(concept),
        a: concept.a,
        B: concept.B,
        C: concept.C,
        outputs: concept.outputs
    };
};

export const parseSourceConfig = (sourceConfig, defaults = {}) => {
    const mergedDefaults = {
        ...defaults,
        ...(sourceConfig.defaults || {}),
    };
    console.log(sourceConfig.scope)
    switch (sourceConfig.scope) {
        case SCOPE.Chart:
        case SCOPE.Section:
        case SCOPE.Progression:
            return {
                ...sourceConfig,
                id: sourceConfig.id || sourceConfig.scope,
                name: sourceConfig.name || sourceConfig.scope,
                children: sourceConfig.children.map(c => parseSourceConfig(c, mergedDefaults))
            }
        case SCOPE.Concept:
            return parseConceptConfig(sourceConfig, defaults);
        default:
            throw ('Invalid source config scope');
    }
}


