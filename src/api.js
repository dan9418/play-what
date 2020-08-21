import * as Source from "./modules/Source";
import * as KeyCenter from './modules/KeyCenter';
import * as Viewer from './modules/Viewer';
import * as Note from './modules/Note';
import * as NoteList from './modules/NoteList';
import * as Concept from './modules/Concept';
import * as IntervalList from './modules/IntervalList';

const apiMap = {
    PW: {
        KeyCenter,
        Concept,
        Source,
        Viewer,
        Note,
        NoteList,
        IntervalList
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