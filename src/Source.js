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

export const parseLevel = (level, parentProps = {}, localProps = {}) => {
    const type = typeof level;

    switch (type) {
        case 'string':
            const levelStr = level;
            const path = levelStr.split('/');
            // immediate string value
            if (path.length < 2) return levelStr;
            // parent value
            if (path[0] === 'parent') {
                console.log(`PARENT - ${level}`, localProps, parentProps, parentProps[path[1]]);
                return parentProps[path[1]]; // TODO recursive
            }
            // local value
            else if (path[0] === 'props') {
                console.log(`PROPS - ${level}`, localProps, parentProps, localProps[path[1]]);
                return localProps[path[1]]; // TODO recursive
            }
            return api(levelStr);
        case 'object':
            const levelObj = level;
            // Null
            if (levelObj === null) throw ('Null inputs not allowed');
            // Array
            if (Array.isArray(levelObj)) {
                return levelObj.map(x => parseLevel(x, parentProps));
            }
            // Get reserved attributes
            const { fn, args, component, props: allProps, callback, ...other } = levelObj;
            const { children, ...props } = allProps || {};
            if (Object.keys(other).length) {
                debugger;
                throw ('invalid object properties');
            }
            // Level props
            console.log('REDUCE PROPS', props, parentProps)
            let parsedLevelProps = props ? Object.entries(props).reduce((acc, [key, value], i, arr) => {
                console.log('REDUCE PROPS - IN', key, value);
                const attr = parseLevel(value, parentProps);
                console.log('REDUCE PROPS - OUT', key, attr);
                return { ...acc, [key]: attr };
            }, {}) : {};
            // Function props
            if (fn) {
                const ctxProps = { ...parsedLevelProps, ...localProps };
                console.log('REDUCE ARGS', parentProps, ctxProps);
                const parsedArgs = args ? Object.entries(args).reduce((acc, [key, value], i, arr) => {
                    console.log('REDUCE ARGS - IN', key, value);
                    const attr = parseLevel(value, parentProps, { ...parsedLevelProps, ...localProps });
                    console.log('REDUCE ARGS - OUT', key, attr);
                    return { ...acc, [key]: attr };
                }, {}) : {};
                const fnOut = api(fn, parsedArgs);
                parsedLevelProps = { ...fnOut, ...parsedLevelProps };
            }
            // Children
            if (parsedLevelProps.children) {
                parsedLevelProps.children = parseLevel(c, parentProps, { ...parsedLevelProps, ...localProps })
            }
            const levelProps = { ...parentProps, ...parsedLevelProps };
            return levelProps;
        case 'number':
        case 'boolean':
            return level;
        default:
            debugger;
            throw ('Only string and object inputs allowed');
    }
}