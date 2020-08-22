import * as Source from './modules/Source';
import * as Viewer from './modules/Viewer';

import * as Vector from './modules/Vector';
import * as Note from './modules/Vector.Note';
import * as Interval from './modules/Vector.Interval';
import * as Matrix from './modules/Matrix';
import * as Concept from './modules/Concept';

const apiMap = {
  PW: {
    Source,
    Viewer,
    Vector: {
      ...Vector,
      Note,
      Interval
    },
    Matrix,
    Concept
  }
};

const getApiNode = (path) => {
  const tree = path.split('/');
  let endpoint = apiMap;
  let attr = null;
  while (tree.length > 0) {
    attr = tree.shift();
    if (!tree.length && attr === '') return [endpoint, true];
    if (!endpoint) debugger;
    endpoint = endpoint[attr];
  }
  return [endpoint, false];
};

const api = (path, args = {}, level = 0) => {
  console.log('\t'.repeat(level), `API - ${path}`, args);

  const [endpoint, isFn] = getApiNode(path);
  const value = isFn ? endpoint(args) : endpoint;

  return value;
};

export default api;
