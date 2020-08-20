import { ALL_CONCEPT_PRESETS } from "./Concept.presets";
import * as Source from "./Source";
import * as KeyCenter from './KeyCenter';
import * as Viewer from './Viewer';
import * as Note from './Note';
import * as Notes from './Notes';
import * as Concept from './Concept';
import * as Intervals from './Intervals';

const apiMap = {
    pw: {
        parse: Source.parseRawSource,
        keyCenter: KeyCenter,
        concept: Concept,
        source: Source,
        viewer: Viewer,
        note: Note,
        notes: Notes,
        intervals: Intervals
    }
};

const getApiNode = (path) => {
    const tree = path.split('/');
    let node = apiMap;
    let attr = null;
    while (tree.length > 0) {
        attr = tree.shift();
        node = node[attr];
    }
    return node;
}

const parseNode = (node, args) => {
    const type = typeof node;
    switch (type) {
        case 'function':
            const result = node(args);
            return parseNode(result);
        case 'number':
        case 'boolean':
        case 'object':
            return node;
        default:
            debugger;
            throw ('unsupported api node type');
    }
}

const api = (path, args = {}, level = 0) => {
    console.log("\t".repeat(level), `API - ${path}`, args);

    // make it judge fn/value by num of slashes
    const node = getApiNode(path);
    const value = parseNode(node, args);

    return value;
}

export default api;