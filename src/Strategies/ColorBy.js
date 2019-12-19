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

export default class ColorBy {
    
    static none() {
        return {};
    }

    static binary(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.binary) {
        return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(1, scheme);
    }

    static degree(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.degree) {
        return (!note || !note.interval) ? ColorUtils.discrete(0, scheme) : ColorUtils.discrete(note.interval.degree, scheme);
    }

    static pitchClass(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.pitchClass) {
        return (note) ? ColorUtils.discrete(note.pitchClass, scheme) : ColorBy.none(); 
    }

    static octave(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.octave) {
        if(!note || !viewerData) return ColorBy.none();

        let currentOctave = note.octave;
        let minOctave = viewerData.minNote.octave;
        let maxOctave = viewerData.maxNote.octave;

        return ColorUtils.continuous(currentOctave, minOctave, maxOctave, scheme);
    }

    static frequency(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.frequency) {
        if(!note || !viewerData) return ColorBy.none();

        let currentFrequency = note.frequency;
        let minFrequency = viewerData.minNote.frequency;
        let maxFrequency = viewerData.maxNote.frequency;

        return ColorUtils.continuous(currentFrequency, minFrequency, maxFrequency, scheme);
    }

    static noteIndex(note, viewerData, scheme = DEFAULT_COLOR_SCHEMES.noteIndex) {
        if(!note || !viewerData) return ColorBy.none();

        let currentIndex = note.noteIndex;
        let minIndex = viewerData.minNote.noteIndex;
        let maxIndex = viewerData.maxNote.noteIndex;

        return ColorUtils.continuous(currentIndex, minIndex, maxIndex, scheme);
    }
}