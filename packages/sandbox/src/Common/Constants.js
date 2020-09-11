export const DEFAULTS = {
    a: 'C',
    B: 'Maj',
    transforms: []
}

export const ZOOM = {
    Concept: 'concept',
    Section: 'section',
    Progression: 'progression',
    Chart: 'chart'
};

const DEFAULT_CONCEPT = { a: { p: 0, d: 0 }, B: [], C: [] };
const DEFAULT_PROGRESSION = { concepts: [DEFAULT_CONCEPT] };
const DEFAULT_SECTION = { progressions: [DEFAULT_PROGRESSION] };
const DEFAULT_CHART = { sections: [DEFAULT_SECTION] };