import * as Note from './Note';

export const from = ({ a, B }) => {
    return B.map(b => Note.add({ x: a, y: b }))
}