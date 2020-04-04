import KeyCenter from "../Entities/KeyCenter";
import Chord from '../Entities/Concepts/Chord';
import Scale from '../Entities/Concepts/Scale';

const getConcept = (args) => {
    if (typeof args === 'object') {
        switch (args.strategy) {
            case 'INTERVAL_PAIR':
                return null;
            case 'CHORD':
                return new Chord(args.args);
            case 'SCALE':
                return new Scale(args.args);
            case 'MODE':
                return null;
            case 'ROMAN_NUMERAL':
                return null;
            default:
                return null;
        }
    }
    return null;
}

const notesFromIntervals = args => {
    if (typeof args === 'array') {
        return null;
    }
    else if (typeof args === 'object') {
        const keyCenter = new KeyCenter(args.keyCenter);
        const concept = getConcept(args.intervals);

        return concept.getNotes(keyCenter);
    }
    return null;
}

const parse = config => {
    switch (config.strategy) {
        case 'NOTES_FROM_INTERVALS':
            return notesFromIntervals(config.args);
        default:
            return null;
    }
}

export default parse;