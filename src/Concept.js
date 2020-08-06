import * as Presets from "./Concept.presets";

export const CONCEPT_DEFAULTS = {
    a: { p: 0, d: 0 },
    B: []
}

export const presets = Presets.ALL_CONCEPT_PRESETS;

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
    parseSourceConfig(props.config);
}

export const transpose = (conceptConfig, interval) => {
    const concept = { ...conceptConfig };
    concept.a = addVectors(concept.a, interval);
    return concept;
}

export const chordalInversion = (conceptConfig, inversion) => {
    const concept = { ...conceptConfig };
    concept.B = [...conceptConfig.B];
    concept.B[0] = addVectors(concept.B[0], Presets.INTERVALS.P8.a);
    concept.B = rotate(concept.B, inversion);
    return concept;
}