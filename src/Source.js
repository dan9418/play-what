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

/*export const parseConceptConfig = (conceptConfig, parentInput = {}) => {
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
    // else if (Array.isArray(conceptConfig)) {
    //     throw ('');
    //     const inputReducer = (acc, cur, i, arr) => {
    //         return parseTransform({ value: cur.value, props: { ...acc, ...cur.props } });
    //     };
    //     return conceptConfig.reduce(inputReducer, {});
    // }
    else {
        throw ('');
        return {};
    }
};*/

/*export const parseInputString = (input, parentInput = {}) => {
    const tree = input.split('/');
    const first = tree[0];
    if (first === 'pw') return api(input, parentInput);
    if (first === 'in') return parentInput[tree[1]];
    throw ('Invalid input string');
}*/

/*export const parseInputObject = (value, parentInput = {}, parse = () => null) => {

    const localInput = value.input || {};
    const mergedInput = { ...parentInput, ...localInput };

    // function
    if (typeof value.endpoint !== 'undefined')
        const fnInput = parse(value.input, parentInput);
    return api(value.endpoint, fnInput);
    // transforms
    let output = null;
    if (source.transforms) {
        const inputReducer = (acc, cur, i, arr) => {
            const input = { ...parentInput, ...(cur.input || {}) };
            return null;
        };
        const result = source.transforms.reduce(inputReducer, output);
        output = result;
    }
    else {
        output = parseTransform(mergedInput);
    }


    console.log(`SRC - ${source.name}\n\tDATA`, source, '\n\tIN', mergedInput, '\n\tOUT', output);

    //console.log(source.scope)

    if (source.children) {
        return {
            ...source,
            id: source.id || 'id',
            name: source.name || 'name',
            parentInput,
            localInput: source.input,
            mergedInput,
            children: source.children.map(c => parse(c, mergedInput))
        }
    }
}*/

export const parseInput = (input, parentInput = {}) => {
    const type = typeof input;

    switch (type) {
        case 'string':
            const path = input.split('/');
            if (path.length < 2) { return input; /* valid string value */debugger; throw ('Invalid input string'); };
            return api(input);
        case 'object':
            if (input === null) throw ('Null inputs not allowed');
            if (Array.isArray(input)) {
                return input.map(x => parseInput(x));
            }
            // direct object
            if (!input.fn) {
                return Object.entries(input).reduce((acc, [key, value], i, arr) => {
                    const attr = parseInput(value, parseInput);
                    console.log('reduce direct', arr, i, acc, key, attr);
                    return { ...acc, [key]: attr };
                }, {});
            }
            // function object
            const args = Object.entries(input.args).reduce((acc, [key, value], i, arr) => {
                const attr = parseInput(value, parentInput);
                console.log('reduce fn', arr, i, acc, key, attr);
                return { ...acc, [key]: attr };
            }, {});
            return api(input.fn, args);
        case 'number':
        case 'boolean':
            return input;
        default:
            debugger;
            throw ('Only string and object inputs allowed');
    }
}
