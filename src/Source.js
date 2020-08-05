import { DEGREE_MAPPING, MAX_VECTOR, SCOPE, CONCEPT_DEFAULTS } from "./Constants";
import Utils from './Utils';
import * as KeyCenter from "./KeyCenter";
import * as Theory from './Theory';
import api from './api';

export const SCOPE = {
    Concept: 'concept',
    Progression: 'progression',
    Section: 'section',
    Chart: 'chart'
}

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
        concept.a = api(concept.a).a;
    }
    if (concept.a.input) {
        const { input, props } = concept.a;
        concept.a = api(input, props).a;
    }
    if (typeof concept.B === 'string') {
        concept.B = api(concept.B).B;
    }
    if (concept.B.input) {
        const { input, props } = concept.B;
        concept.B = api(input, props).B;
    }
    /*if (concept.transforms) {
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
    }*/
    concept.C = KeyCenter.addVectorArray({ a: concept.a, B: concept.B });
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

    return concept;
};

export const parseSourceConfig = (sourceConfig, defaults = {}) => {
    const mergedDefaults = {
        ...defaults,
        ...(sourceConfig.defaults || {}),
    };
    //console.log(sourceConfig.scope)

    if (sourceConfig.children) {
        return {
            ...sourceConfig,
            id: sourceConfig.id || 'id',
            name: sourceConfig.name || 'name',
            children: sourceConfig.children.map(c => parseSourceConfig(c, mergedDefaults))
        }
    }
    return parseConceptConfig(sourceConfig, defaults);
}

export const parse = props => {
    if (!props.config) throw ('Missing config from source props');
    return parseSourceConfig(props.config);
}
