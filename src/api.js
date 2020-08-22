import * as Source from './modules/Source';
import * as Viewer from './modules/Viewer';

import * as Vector from './modules/Vector';
import * as Matrix from './modules/Matrix';
import * as Concept from './modules/Concept';

const apiMap = {
  PW: {
    Source,
    Viewer,
    Vector,
    Matrix,
    Concept
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
};

const api = (path, args = {}, level = 0) => {
  console.log('\t'.repeat(level), `API - ${path}`, args);

  const [node, isFn] = getApiNode(path);
  const value = isFn ? node(args) : node;

  return value;
};

export default api;
