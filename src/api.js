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

const api = (path, args) => {
    console.log(`API - ${path}\n\tIN`, args);

    const tree = path.split('/');
    let node = apiMap;
    let attr = null;
    while (tree.length > 0) {
        attr = tree.shift();
        node = node[attr];
    }

    let value = null;
    if (args && args.component) {
        value = { component: node, props: args.props };
    }
    else if (typeof node === 'function') {
        value = node(args);
    }
    else {
        value = node;
    }

    console.log(`API - ${path}\n\tOUT`, value);
    return value;
}

export default api;