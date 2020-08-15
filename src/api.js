import { ALL_CONCEPT_PRESETS } from "./Concept.presets";
import * as Source from "./Source";
import * as KeyCenter from './KeyCenter';
import * as Viewer from './Viewer';

const apiMap = {
    pw: {
        keyCenter: KeyCenter,
        concept: {
            presets: ALL_CONCEPT_PRESETS
        },
        source: Source,
        viewer: Viewer
    }
};

const api = (path, props) => {
    console.log(`API - ${path}\n\tIN`, props);

    const tree = path.split('/');
    let node = apiMap;
    let attr = null;
    while (tree.length > 0) {
        attr = tree.shift();
        node = node[attr];
    }

    let value = null;
    if (props && props.component) {
        value = { component: node };
    }
    else if (typeof node === 'function') {
        value = node(props);
    }
    else {
        value = node;
    }

    console.log(`API - ${path}\n\tOUT`, value);
    return value;
}

export default api;