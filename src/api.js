import { ALL_CONCEPT_PRESETS } from "./Concept.presets";
import * as Source from "./Source";
import * as KeyCenter from './KeyCenter';
import * as Viewer from './Viewer';
import * as Note from './Note';
import * as Concept from './Concept';

const apiMap = {
    pw: {
        keyCenter: KeyCenter,
        concept: Concept,
        source: Source,
        viewer: Viewer,
        note: Note
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
        case 'number':
        case 'boolean':
            return node;
        case 'function':
            const result = node(args);
            return parseNode(result);
        case 'object':
            return node;
        default:
            debugger;
            throw ('unsupported api node type');
    }
}

const api = (path, args) => {
    console.log(`API - ${path}\n\tIN`, args);

    const node = getApiNode(path);
    const value = parseNode(node, args);

    console.log(`API - ${path}\n\tOUT`, value);
    return value;
}

export default api;