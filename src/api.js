import { ALL_CONCEPT_PRESETS } from "./Concept.presets";
import * as Source from "./Source";
import * as KeyCenter from './KeyCenter';

const apiMap = {
    pw: {
        keyCenter: KeyCenter,
        concept: {
            presets: ALL_CONCEPT_PRESETS
        },
        source: Source
    }
};

const api = (path, props) => {
    const tree = path.split('/');
    let node = apiMap;
    let attr = null;
    while (tree.length > 0) {
        attr = tree.shift();
        node = node[attr];
    }
    console.log(`API - ${path} - IN`, props);
    const value = typeof node === 'function' ? node(props) : node;
    console.log(`API - ${path} - OUT`, value);
    return value;
}

export default api;