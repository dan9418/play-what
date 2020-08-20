import Viewers from 'play-what-react-viewers';
import { parseRawSource } from './Source';

export const fretboard = {
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

export const createElement = ({ type, children, ...args }) => {
    if (typeof type !== 'string') throw ('only string types allowed')
    return {
        component: type,
        children,
        props: args
    }
}
