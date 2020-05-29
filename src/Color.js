import * as Color from "color";

export const COLORS = {
    White: '#000000',
    Black: '#FFFFFF',
    d1: '#E6194B',
    d2: '#F58231',
    d3: '#FFE119',
    d4: '#3CB44B',
    d5: '#4363D8',
    d6: '#911DB4',
    d7: '#F032E6',
    pc0: '#ED1C24',
    pc1: '#F1592A',
    pc2: '#F8981E',
    pc3: '#FCB040',
    pc4: '#FFF200',
    pc5: '#8CC63F',
    pc6: '#056839',
    pc7: '#13A89E',
    pc8: '#A898C8',
    pc9: '#662D91',
    pc10: '#92278F',
    pc11: '#C2305E'
};

const SCHEMES = {
    binary: {
        active: null,
        inacitve: COLORS.Black
    },
    degree: {
        d0: null,
        d1: COLORS.d1,
        d2: COLORS.d2,
        d3: COLORS.d3,
        d4: COLORS.d4,
        d5: COLORS.d5,
        d6: COLORS.d6,
        d7: COLORS.d7
    },
    degreeForesight: {
        d0: null,
        d1: COLORS.d1,
        d2: COLORS.d5,
        d3: COLORS.d5,
        d4: COLORS.d5,
        d5: COLORS.d5,
        d6: COLORS.d5,
        d7: COLORS.d5
    },
    pitchClass: {
        pc0: COLORS.pc0,
        pc1: COLORS.pc1,
        pc2: COLORS.pc2,
        pc3: COLORS.pc3,
        pc4: COLORS.pc4,
        pc5: COLORS.pc5,
        pc6: COLORS.pc6,
        pc7: COLORS.pc7,
        pc8: COLORS.pc8,
        pc9: COLORS.pc9,
        pc10: COLORS.pc10,
        pc11: COLORS.pc11
    },
    octave: {
        min: COLORS.White,
        max: COLORS.Black
    },
    frequency: {
        min: COLORS.White,
        max: COLORS.Black
    },
    noteIndex: {
        min: COLORS.White,
        max: COLORS.Black
    }
}

export default class ColorUtils {

    static none() {
        return {};
    }

    static binary(note, scheme = SCHEMES.binary) {
        if (!note || !note.interval) return {};

        return this.getStylesFromColor(scheme.active);
    }

    static isValidDegree(note) {
        return note && typeof note.d === 'number';
    }

    static degreeBg(note, scheme = SCHEMES.degree) {
        if (!this.isValidDegree(note)) return {};
        const id = `d${note.d + 1}`;
        const s = scheme[id] ? scheme[id] : SCHEMES.degree[id];
        return s;
    }

    static degree(note) {
        if (!this.isValidDegree(note)) return {};
        return this.getStylesFromColor(this.degreeBg(note));
    }

    static degreeForesight(a, b, scheme = SCHEMES.degreeForesight) {
        const aV = this.isValidDegree(a);
        const bV = this.isValidDegree(b)
        let bg = null;
        if (!aV && !bV) return {};
        else if (aV && !bV) {
            bg = this.degreeBg(a, scheme);
            return this.getStylesFromColor(COLORS.d1, null);
        }
        else if (!aV && bV) {
            return this.getStylesFromColor(COLORS.d5, null, .5);
        }
        else if (aV && bV) {
            bg = new Color(COLORS.d1).mix(new Color(COLORS.d5));
            return this.getStylesFromColor(bg, null);
        };
    }

    static pitchClass(note, scheme = SCHEMES.pitchClass) {
        if (!note) return {};

        const pitchClass = note.getPitchClass();
        const id = `pc${pitchClass}`;

        const bg = scheme[id] ? scheme[id] : SCHEMES.pitchClass[id];

        return this.getStylesFromColor(bg);
    }

    static octave(note, minNote, maxNote, scheme = SCHEMES.octave) {
        if (!note) return {};

        const minOctave = minNote.getOctave();
        const octave = note.getOctave();
        const maxOctave = maxNote.getOctave();

        const bg = this.getColorFromContinuousScheme(octave, minOctave, maxOctave, scheme);

        return this.getStylesFromColor(bg);
    }

    static frequency(note, minNote, maxNote, scheme = SCHEMES.frequency) {
        if (!note) return {};

        const minFrequency = minNote.getFrequency();
        const frequency = note.getFrequency();
        const maxFrequency = maxNote.getFrequency();

        const bg = this.getColorFromContinuousScheme(frequency, minFrequency, maxFrequency, scheme);

        return this.getStylesFromColor(bg);
    }

    static noteIndex(note, minNote, maxNote, scheme = SCHEMES.noteIndex) {
        if (!note) return {};

        const minNoteIndex = minNote.getNoteIndex();
        const noteIndex = note.getNoteIndex();
        const maxNoteIndex = maxNote.getNoteIndex();

        const bg = this.getColorFromContinuousScheme(noteIndex, minNoteIndex, maxNoteIndex, scheme);

        return this.getStylesFromColor(bg);
    }

    // Helpers

    static getStylesFromColor(background, foreground, opacity) {
        if (!background) {
            return {};
        }
        let bg = Color(background);
        if (typeof opacity !== 'undefined') bg = bg.alpha(opacity);
        return {
            backgroundColor: bg.hsl().string(),
            color: foreground || (bg.isDark() ? COLORS.Black : COLORS.White)
        }
    }

    static getColorFromContinuousScheme(value, min, max, scheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        const initialColor = Color(scheme.min);
        const finalColor = Color(scheme.max);
        const background = initialColor.mix(finalColor, percent);

        return background;
    }
}