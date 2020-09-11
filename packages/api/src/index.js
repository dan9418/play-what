import core from '@play-what/core';

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

const call = (path, args = {}, level = 0, userModule) => {
  console.log('\t'.repeat(level), `API - ${path}`, args);

  const root = {
    PW: core,
    ...userModule
  };

  const [endpoint, isFn] = getApiNode(path, root);
  const value = isFn ? endpoint(args) : endpoint;

  return value;
};

export default {
  call
};
