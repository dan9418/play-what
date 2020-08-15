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

const getOutput = (input, parentInput, parseInput) => {
    const type = typeof input;

    switch (type) {
        case 'string':
            const path = input.split('/');
            // immediate string value
            if (path.length < 2) return input;
            // referencial value
            if (path[0] === 'in') {
                if (path[1] === 'parent') {
                    // get parent value
                    return parentInput[path[2]]; // TODO recursive
                }
                // get current acc value
                debugger;
                throw ('only parent string inputs allowed')
            }
            return api(input);
        case 'object':
            // Null
            if (input === null) throw ('Null inputs not allowed');
            // Array
            if (Array.isArray(input)) {
                return input.map(x => parseInput(x, parentInput));
            }
            // Level inputs
            const { fn, args, ...levelInputs } = input;
            const levelOut = levelInputs ? Object.entries(levelInputs).reduce((acc, [key, value], i, arr) => {
                const attr = parseInput(value, parentInput);
                console.log('reduce fn', arr, i, acc, key, attr);
                return { ...acc, [key]: attr };
            }, {}) : {};
            // Funtion inputs
            let fnOut = {};
            if (fn) {
                const args = input.args ? Object.entries(input.args).reduce((acc, [key, value], i, arr) => {
                    const attr = parseInput(value, parentInput);
                    console.log('reduce direct', arr, i, acc, key, attr);
                    return { ...acc, [key]: attr };
                }, {}) : {};
                fnOut = api(input.fn, args);
            }
            // Merged output
            return { ...levelOut, ...fnOut };
        case 'number':
        case 'boolean':
            return input;
        default:
            debugger;
            throw ('Only string and object inputs allowed');
    }
}

export const parseInput = (input, parentInput = {}) => {

    const output = getOutput(input, parentInput, parseInput);

    if (input.children) {
        const mergedOutput = { ...parentInput, ...output };

        const children = input.children.map((x, i) => parseInput(x, mergedOutput));

        return {
            ...output,
            children
        };
    }

    return output;
}
