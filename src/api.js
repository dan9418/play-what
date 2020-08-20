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
        if (!tree.length && attr === '') return [node, true];
        node = node[attr];
    }
    return [node, false];
}

const api = (path, args = {}, level = 0) => {
    console.log("\t".repeat(level), `API - ${path}`, args);

    const [node, isFn] = getApiNode(path);
    const value = isFn ? node(args) : node;

    return value;
}

export default api;