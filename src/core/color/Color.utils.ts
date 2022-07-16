import color from 'color';
import Note from '../models/Note';
import { DEFAULT_DEGREE_COLOR_SCHEME } from '../theory/Degree.constants';
import { DEFAULT_PITCH_COLOR_SCHEME } from '../theory/Pitch.constants';

export enum ColorScheme {
	Monochrome,
	HighlightRoot,
	Degree,
	PitchClass,
}

interface IColorSchemeConfig {
	id: ColorScheme;
	name: string;
	fn: (note?: Note, config?: any) => string;
}

const RED = 'red';
const BLACK = '#555';

export const COLOR_SCHEMES: IColorSchemeConfig[] = [
	{
		id: ColorScheme.Monochrome,
		name: 'Monochrome',
		fn: (note, config = BLACK) => config
	},
	{
		id: ColorScheme.HighlightRoot,
		name: 'Highlight Root',
		fn: (note, config = [RED, BLACK]) => note && note.getDegree() === 0 ? config[0] : config[1]
	},
	{
		id: ColorScheme.Degree,
		name: 'Interval Degree',
		fn: (note, config = DEFAULT_DEGREE_COLOR_SCHEME) => config[note && note.getDegree() || 0]
	},
	{
		id: ColorScheme.PitchClass,
		name: 'Pitch Class',
		fn: (note, config = DEFAULT_PITCH_COLOR_SCHEME) => config[note && note.getPitchClass() || 0]
	}
];

const getFgColor = (bg?: string): string => {
	if (!bg) return "#000";
	return color(bg).isDark() ? "#fff" : "#000";
};

const getStylesFromBgColor = (bg?: string): any => {
	if (!bg) return {};
	const fg = getFgColor(bg);
	return {
		backgroundColor: bg,
		color: fg
	}
};

/* const getColorFromContinuousScheme = (value, min, max, scheme) => {
  let percent = (value - min) / (max - min);
  percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

  const initialColor = color(scheme.min);
  const finalColor = color(scheme.max);
  const background = initialColor.mix(finalColor, percent);

  return background;
}; */

export default {
	getFgColor,
	getStylesFromBgColor
};
