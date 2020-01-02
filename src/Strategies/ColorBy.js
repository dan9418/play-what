import ColorUtils from '../Utils/ColorUtils';
import { COLORS } from '../Utils/Colors';

const DEFAULT_COLOR_SCHEMES = {
    binary: [
        null,
        COLORS.Red
    ],
    degree: [
        null,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red,
        COLORS.Orange,
        COLORS.Yellow,
        COLORS.Green,
        COLORS.Blue,
        COLORS.Purple,
        COLORS.Pink,
        COLORS.Red
    ],
    pitchClass: [
        COLORS.pc0,
        COLORS.pc1,
        COLORS.pc2,
        COLORS.pc3,
        COLORS.pc4,
        COLORS.pc5,
        COLORS.pc6,
        COLORS.pc7,
        COLORS.pc8,
        COLORS.pc9,
        COLORS.pc10,
        COLORS.pc11
    ],
    octave: [
        COLORS.Black,
        COLORS.White
    ],
    frequency: [
        COLORS.Black,
        COLORS.White
    ],
    noteIndex: [
        COLORS.Black,
        COLORS.White
    ]
};

const ColorBy = {

    none: {
        id: 'none',
        name: 'None',
        fx: () => { }
    },

    binary: {
        id: 'binary',
        name: 'Binary',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.binary) => {
            return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(1, scheme);
        }
    },

    degree: {
        id: 'degree',
        name: 'Degree',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.degree) => {
            return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(note.interval.degree, scheme);
        }
    },

    pitchClass: {
        id: 'pitchClass',
        name: 'Pitch Class',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.pitchClass) => {
            return (note) ? ColorUtils.discrete(note.pitchClass, scheme) : {};
        }
    },

    octave: {
        id: 'octave',
        name: 'Octave',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.octave) => {
            if (!note || !viewerData) return {};

            let currentOctave = note.octave;
            let minOctave = viewerData.minNote.octave;
            let maxOctave = viewerData.maxNote.octave;

            return ColorUtils.continuous(currentOctave, minOctave, maxOctave, scheme);
        }
    },

    frequency: {
        id: 'frequency',
        name: 'Frequency',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.frequency) => {
            if (!note || !viewerData) return {};

            let currentFrequency = note.frequency;
            let minFrequency = viewerData.minNote.frequency;
            let maxFrequency = viewerData.maxNote.frequency;

            return ColorUtils.continuous(currentFrequency, minFrequency, maxFrequency, scheme);
        }
    },

    noteIndex: {
        id: 'noteIndex',
        name: 'Note Index',
        fx: (note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.noteIndex) => {
            if (!note || !viewerData) return {};

            let currentIndex = note.noteIndex;
            let minIndex = viewerData.minNote.noteIndex;
            let maxIndex = viewerData.maxNote.noteIndex;

            return ColorUtils.continuous(currentIndex, minIndex, maxIndex, scheme);
        }
    }
}

export default ColorBy;