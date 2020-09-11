import API from '@play-what/api';

const parseJson = (rawSource, parentProps = {}, attr = 'root', level = 0, userModule = null) => {
  const type = typeof rawSource;

  switch (type) {
    case 'number':
    case 'boolean':
      console.log('\t'.repeat(level), 'IN/OUT', attr, type, rawSource);
      return rawSource;
    case 'string':
      const levelStr = rawSource;
      const path = levelStr.split('/');
      // immediate string value
      if (path.length < 2) return levelStr;
      // parent value
      if (path[0] === 'parent') {
        console.log('\t'.repeat(level), 'IN', attr, 'parent', rawSource);
        const par = parentProps[path[1]]; // TODO recursive
        console.log('\t'.repeat(level), 'OUT', attr, 'parent', par);
        return par;
      }
      // other fn value
      console.log('\t'.repeat(level), 'IN', attr, 'fn', rawSource);
      const apiRes = API.call(levelStr, {}, level + 1, userModule);
      console.log('\t'.repeat(level), 'OUT', attr, 'fn', apiRes);
      return apiRes;
    case 'object':
      const levelObj = rawSource;

      // Null
      if (levelObj === null) throw ('Invalid raw source type');

      // Array
      if (Array.isArray(levelObj)) {
        console.log('\t'.repeat(level), 'IN', attr, 'arr', rawSource);
        const arr = levelObj.map((x) => parseHelper(x, parentProps, `${attr}.arr`, level + 1, userModule));
        console.log('\t'.repeat(level), 'OUT', attr, 'arr', arr);
        return arr;
      }

      // Get reserved attributes
      const { fn, args, ...props } = levelObj;
      const numProps = Object.values(props).length;
      if (fn && numProps || args && numProps) {
        debugger;
        throw ('cannot mix fn defs with props');
      }
      let parsedLocalProps = {};
      let parsedFnOut = {};

      // Calculate props
      if (numProps) {
        if (typeof props !== 'object') throw ('Invalid props type');

        console.log('\t'.repeat(level), 'IN', attr, 'props', rawSource);
        const localOut = Object.entries(props).reduce((acc, [key, value], i, arr) => {
          if (key === 'children') return acc;
          const attr = parseHelper(value, parentProps, key, level + 1, userModule);
          return { ...acc, [key]: attr };
        }, {});
        console.log('\t'.repeat(level), 'OUT', attr, 'props', localOut);

        if (props.children) {
          console.log('\t'.repeat(level), 'IN', attr, 'children', rawSource);
          const mergedProps = { ...parentProps, ...localOut };
          localOut.children = props.children.map((c, i) => parseHelper(c, mergedProps, `${attr}.children`, level + 1, userModule));
          console.log('\t'.repeat(level), 'OUT', attr, 'children', localOut.children);
        }

        parsedLocalProps = localOut;
        return parsedLocalProps;
      }

      // Execute function
      if (fn) {
        if (typeof fn !== 'string') throw ('Invalid fn type');

        console.log('\t'.repeat(level), 'IN', attr, 'fn', rawSource);
        const argsOut = parseHelper(args, parentProps, 'args', level + 1, userModule);
        /* Object.entries(args).reduce((acc, [key, value], i, arr) => {
                    if (key === 'children') console.warn('children for fn args is experimental')
                    const attr = parseHelper(value, parentProps, key, level + 1);
                    return { ...acc, [key]: attr };
                }, {}); */
        parsedFnOut = API.call(fn, argsOut, level + 2, userModule);
        console.log('\t'.repeat(level), 'OUT', attr, 'fn', parsedFnOut);

        return parsedFnOut;
      }
      throw 'unexpected config';
    default:
      debugger;
      throw 'Invalid raw source type';
  }
};

const json = (rawSource, userModule) => {
  return parseJson(rawSource, {}, 'root', 0, userModule);
};

export default {
  json
};
