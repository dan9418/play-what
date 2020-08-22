import api from '../api';

export const x = 0;

export const parse = (rawSource, parentProps = {}, attr = 'root', level = 0) => {
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
      const apiRes = api(levelStr, {}, level + 1);
      console.log('\t'.repeat(level), 'OUT', attr, 'fn', apiRes);
      return apiRes;
    case 'object':
      const levelObj = rawSource;

      // Null
      if (levelObj === null) throw ('Invalid raw source type');

      // Array
      if (Array.isArray(levelObj)) {
        console.log('\t'.repeat(level), 'IN', attr, 'arr', rawSource);
        const arr = levelObj.map((x) => parse(x, parentProps, `${attr}.arr`, level + 1));
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
          const attr = parse(value, parentProps, key, level + 1);
          return { ...acc, [key]: attr };
        }, {});
        console.log('\t'.repeat(level), 'OUT', attr, 'props', localOut);

        if (props.children) {
          console.log('\t'.repeat(level), 'IN', attr, 'children', rawSource);
          const mergedProps = { ...parentProps, ...localOut };
          localOut.children = props.children.map((c, i) => parse(c, mergedProps, `${attr}.children`, level + 1));
          console.log('\t'.repeat(level), 'OUT', attr, 'children', localOut.children);
        }

        parsedLocalProps = localOut;
        return parsedLocalProps;
      }

      // Execute function
      if (fn) {
        if (typeof fn !== 'string') throw ('Invalid fn type');

        console.log('\t'.repeat(level), 'IN', attr, 'fn', rawSource);
        const argsOut = parse(args, parentProps, 'args', level + 1);
        /* Object.entries(args).reduce((acc, [key, value], i, arr) => {
                    if (key === 'children') console.warn('children for fn args is experimental')
                    const attr = parse(value, parentProps, key, level + 1);
                    return { ...acc, [key]: attr };
                }, {}); */
        parsedFnOut = api(fn, argsOut, level + 2);
        console.log('\t'.repeat(level), 'OUT', attr, 'fn', parsedFnOut);

        return parsedFnOut;
      }
      throw 'unexpected config';
    default:
      debugger;
      throw 'Invalid raw source type';
  }
};
