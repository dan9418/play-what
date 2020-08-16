import Viewers from 'play-what-react-viewers';

export const fretboard = {
    component: Viewers.Fretboard.Viewer,
    create: args => {
        const { fretRange, tuning } = args;
        const [l, h] = fretRange || [0, 24];

        const strings = [];
        for (let s = 0; s < tuning.length; s++) {
            const frets = []
            for (let f = l; f <= h; f++) {
                frets.push({
                    children: s + ' ' + f
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
