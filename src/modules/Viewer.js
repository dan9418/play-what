import Viewers from 'play-what-react-viewers';
import * as Source from "./Source";

export const Fretboard = {
    component: Viewers.Fretboard.Viewer,
    from: args => {
        const config = { ...Viewers.Fretboard.Defaults, ...args };
        const { fretRange, tuning, labelFn, styleFn } = config;
        const [l, h] = fretRange || [0, 24];

        const strings = [];
        for (let s = 0; s < tuning.length; s++) {
            const frets = []
            for (let f = l; f <= h; f++) {
                const context = {
                    strNum: s,
                    fretNum: f,
                    fretRange,
                    tuning,
                    noteIndex: tuning[s] + f
                };
                frets.push({
                    children: labelFn ? labelFn(context) : null,
                    style: styleFn ? styleFn(context) : {}
                })
            }
            strings.push(frets);
        }
        return {
            component: Viewers.Fretboard.Viewer,
            props: {
                fretMap: strings
            }
        }
    }
}

export const repeat = ({ n, content }) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Source.parseRawSource(content))
    }
    return {
        children: result
    };
}

export const element = {
    from: ({ component, children, props }) => {
        if (typeof component !== 'string') throw ('only string component defs allowed')
        return {
            component,
            children,
            props
        }
    }
}
