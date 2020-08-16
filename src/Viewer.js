import Viewers from 'play-what-react-viewers';

export const fretboard = {
    component: Viewers.Fretboard.Viewer,
    create: args => {
        return {
            component: Viewers.Fretboard.Viewer,
            props: {
                fretMap: [[{ children: 'test' }]]
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
