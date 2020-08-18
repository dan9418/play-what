import api from './api';

export const SCOPE = {
    Concept: 'concept',
    Progression: 'progression',
    Section: 'section',
    Chart: 'chart'
}

export const parseRawSource = (rawSource, parentProps = {}) => {
    const type = typeof rawSource;

    switch (type) {
        case 'number':
        case 'boolean':
            return rawSource;
        case 'string':
            const levelStr = rawSource;
            const path = levelStr.split('/');
            // immediate string value
            if (path.length < 2) return levelStr;
            // parent value
            if (path[0] === 'parent') {
                console.log(`RAW PARENT - ${rawSource}`, parentProps, parentProps[path[1]]);
                return parentProps[path[1]]; // TODO recursive
            }
            // other api value
            console.log('RAW API');
            return api(levelStr);
        case 'object':
            const levelObj = rawSource;

            // Null
            if (levelObj === null) throw ('Invalid raw source type');

            // Array
            if (Array.isArray(levelObj)) {
                return levelObj.map(x => parseRawSource(x, parentProps));
            }

            // Get reserved attributes
            const { fn, args, component, props, callback, ...other } = levelObj;
            if (fn && props) {
                debugger;
                throw ('only either fn or props attr allowed');
            }
            if (Object.keys(other).length) {
                debugger;
                throw ('invalid raw source attrs');
            }
            let parsedLocalProps = {};
            let parsedFnOut = {};

            // Local props
            if (props) {
                if (typeof props !== 'object') throw ('Invalid props type');

                console.log('REDUCE PROPS:', props, parentProps);
                const localOut = Object.entries(props).reduce((acc, [key, value], i, arr) => {
                    if (key === 'children') return acc;

                    console.log('REDUCE PROPS - IN', key, value);
                    const attr = parseRawSource(value, parentProps);
                    console.log('REDUCE PROPS - OUT', key, attr);

                    return { ...acc, [key]: attr };
                }, {});

                if (props.children) {
                    const mergedProps = { ...parentProps, ...localOut };
                    localOut.children = props.children.map((c, i) => parseRawSource(c, mergedProps));
                }

                parsedLocalProps = localOut;
                return parsedLocalProps;
            };

            // Function props
            if (fn) {
                if (typeof fn !== 'string') throw ('Invalid fn type');

                console.log('REDUCE ARGS:', parentProps);
                const argsOut = Object.entries(args).reduce((acc, [key, value], i, arr) => {
                    if (key === 'children') throw ('children invalid for fn args')

                    console.log('REDUCE ARGS - IN', key, value);
                    const attr = parseRawSource(value, parentProps);
                    console.log('REDUCE ARGS - OUT', key, attr);

                    return { ...acc, [key]: attr };
                }, {});

                parsedFnOut = api(fn, argsOut);
                return parsedFnOut;
            }
            throw 'unexpected config';
        default:
            debugger;
            throw ('Invalid raw source type', type);
    }
}