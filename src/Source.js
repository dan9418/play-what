import api from './api';
import * as KeyCenter from "./KeyCenter";
import * as Note from './Note';
import { CONCEPT_DEFAULTS } from './Concept';

export const SCOPE = {
    Concept: 'concept',
    Progression: 'progression',
    Section: 'section',
    Chart: 'chart'
}

export const getConceptAt = (chart, position) => {
    const { a, B } = conceptConfig;
    const tonic = Note.getNoteName(a);
    const preset = { name: '?' };
    return `${tonic} ${preset.name || '?'}`;
}

export const getConceptName = (conceptConfig) => {
    const { a, B } = conceptConfig;
    const tonic = Note.getNoteName(a);
    const preset = { name: '?' };
    return `${tonic} ${preset.name || '?'}`;
}

export const parseA = a => {
    if (typeof a === 'string') {
        return api(a).a;
    }
    return a;
    if (a.input) {
        const { input, props } = a;
        return api(input, props).a;
    }
}

export const parseB = B => {
    if (typeof B === 'string') {
        return api(B).B;
    }
    if (B.input) {
        const { input, props } = B;
        return api(input, props).B;
    }
    if (Array.isArray(B)) {
        // handle array of config case
        return B;
    }
}

export const parseConceptHelper = (conceptConfig) => {
    let concept = {};
    concept.a = parseA(conceptConfig.a);
    concept.B = parseB(conceptConfig.B);
    concept.C = KeyCenter.addVectorArray({ a: concept.a, B: concept.B });
    return concept;
};

export const parseConceptConfig = (conceptConfig, parentInput = {}) => {
    const { id, name } = conceptConfig;

    if (typeof conceptConfig === 'string') {
        return api(conceptConfig);
    }
    else if (typeof conceptConfig === 'object') {
        // sketchy logic for determining parser on leaf
        if (typeof conceptConfig.value !== 'undefined')
            return api(conceptConfig.value, conceptConfig.props);
        // only case to handle now
        const mergedConfig = { ...CONCEPT_DEFAULTS, ...parentInput, ...conceptConfig };
        const concept = parseConceptHelper(mergedConfig);
        return concept;
    }
    /*else if (Array.isArray(conceptConfig)) {
        throw ('');
        const inputReducer = (acc, cur, i, arr) => {
            return parseTransform({ value: cur.value, props: { ...acc, ...cur.props } });
        };
        return conceptConfig.reduce(inputReducer, {});
    }*/
    else {
        throw ('');
        return {};
    }
};

const parseTransform = (transform) => {
    if (!transform) return {};

    if (typeof transform === 'string') {
        return api(transform);
    }
    else if (typeof transform === 'object') {
        if (typeof transform.value !== 'undefined')
            return api(transform.value, transform.props);
        return transform;
    }
    else {
        throw ('only string and object transforms allowed')
        return {};
    }
}

export const parseSourceConfig = (sourceConfig, parentInput = {}) => {

    const mergedInput = { ...parentInput, ...sourceConfig.input };

    let output = null;
    if (sourceConfig.transforms) {
        const inputReducer = (acc, cur, i, arr) => {
            return parseTransform({ value: cur.value, props: { ...acc, ...cur.props } });
        };
        const result = sourceConfig.transforms.reduce(inputReducer, output);
        output = result;
    }
    else {
        output = parseTransform(mergedInput);
    }

    console.log(`SRC - ${sourceConfig.name}\n\tDATA`, sourceConfig, '\n\tIN', mergedInput, '\n\tOUT', output);

    //console.log(sourceConfig.scope)

    if (sourceConfig.children) {
        return {
            ...sourceConfig,
            id: sourceConfig.id || 'id',
            name: sourceConfig.name || 'name',
            input: mergedInput,
            children: sourceConfig.children.map(c => parseSourceConfig(c, mergedInput))
        }
    }
    return parseConceptConfig(sourceConfig, mergedInput);
}

export const parse = props => {
    if (!props.config) throw ('Missing config from source props');
    return parseSourceConfig(props.config);
}
