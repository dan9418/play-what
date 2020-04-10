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

const DEGREE = [
    null,
    COLORS.d1,
    COLORS.d2,
    COLORS.d3,
    COLORS.d4,
    COLORS.d5,
    COLORS.d6,
    COLORS.d7
]

export default class ColorUtils {

    static byDegree(note, config) {
        if(!note || !note.interval) return {};

        const degreeString = `d${note.interval.degree}`;
        const customColor = config ? config[degreeString] : null;

        return customColor ? this.getColorStyles(customColor) : this.discrete(note.interval.degree, DEGREE);
    }
    
    static getColorStyles(background, foreground) {
        if (!background) {
            return {};
        }
        let bg = Color(background);
        return {
            backgroundColor: bg.hsl().string(),
            color: foreground || (bg.isDark() ? COLORS.Black : COLORS.White)
        }
    }

    static discrete(value, colorScheme) {
        let background = colorScheme[value];

        return this.getColorStyles(background);
    }

    static continuous(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let initialColor = Color(colorScheme[0]);
        let finalColor = Color(colorScheme[1]);
        let background = initialColor.mix(finalColor, percent);

        return this.getColorStyles(background);
    }
}