import * as Vector from './modules/Vector';
import * as Note from './modules/Vector.Note';
import * as Interval from './modules/Vector.Interval';
import * as Matrix from './modules/Matrix';
import * as Concept from './modules/Concept';
import * as Color from './modules/Color';
import * as Text from './modules/Text';
import * as Tuning from './modules/Tuning';

export const api = {
  PW: {
    Vector: {
      ...Vector,
      Note,
      Interval
    },
    Matrix,
    Concept,
    Color,
    Text,
    Tuning
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
