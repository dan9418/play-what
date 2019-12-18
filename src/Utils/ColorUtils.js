import * as Color from "color";
import { COLORS } from './Colors';

export default class ColorUtils {
    
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

        return ColorUtils.getColorStyles(background);
    }

    static continuous(value, min, max, colorScheme) {
        let percent = (value - min) / (max - min);
        percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

        let initialColor = Color(colorScheme[0]);
        let finalColor = Color(colorScheme[1]);
        let background = initialColor.mix(finalColor, percent);

        return ColorUtils.getColorStyles(background);
    }
}