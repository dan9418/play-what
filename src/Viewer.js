import Viewers from 'play-what-react-viewers';

export const presets = {
    fretboard: Viewers.Fretboard.Viewer,
    keyboard: Viewers.Keyboard.Viewer
}

export const createElement = ({ type, children, ...args }) => {
    return {
        component: type,
        children,
        props: args
    }
}
