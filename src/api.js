import Color from './modules/Color';
import Concept from './modules/Concept';
import Log from './modules/Log';
import Matrix from './modules/Matrix';
import Tuning from './modules/Tuning';
import Utils from './modules/Utils';
import Vector from './modules/Vector';

export const api = {
  PW: {
    Vector,
    Matrix,
    Concept,
    Color,
    Tuning,
    Utils,
    Log
  }
};

const getApiNode = (path, root) => {
  const tree = path.split('/');
  let endpoint = root;
  let attr = null;
  while (tree.length > 0) {
    attr = tree.shift();
    if (!tree.length && attr === '') return [endpoint, true];
    if (!endpoint) debugger;
    endpoint = endpoint[attr];
  }
  return [endpoint, false];
};

export const call = (path, args = {}, level = 0, userModule) => {
  console.log('\t'.repeat(level), `API - ${path}`, args);

  const root = { ...api, ...userModule };

  const [endpoint, isFn] = getApiNode(path, root);
  const value = isFn ? endpoint(args) : endpoint;

  return value;
};
