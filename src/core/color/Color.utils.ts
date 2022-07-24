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

export interface IColorScheme {
	id: ColorScheme;
	name: string;
	defaultConfig: string[]
	fn: (note?: Note, config?: string[]) => string | false;
}

const RED = 'red';
const BLACK = '#555';

export const COLOR_SCHEMES: IColorScheme[] = [
	{
		id: ColorScheme.Monochrome,
		name: 'Monochrome',
		defaultConfig: [BLACK],
		fn: (note, config = [BLACK]) => note ? config[0] : false
	},
	{
		id: ColorScheme.HighlightRoot,
		name: 'Highlight Root',
		defaultConfig: [RED, BLACK],
		fn: (note, config = [RED, BLACK]) => note ? (note.getDegree() === 0 ? config[0] : config[1]) : false
	},
	{
		id: ColorScheme.Degree,
		name: 'Interval Degree',
		defaultConfig: DEFAULT_DEGREE_COLOR_SCHEME,
		fn: (note, config = DEFAULT_DEGREE_COLOR_SCHEME) => note ? config[note.getDegree() || 0] : false
	},
	{
		id: ColorScheme.PitchClass,
		name: 'Pitch Class',
		defaultConfig: DEFAULT_PITCH_COLOR_SCHEME,
		fn: (note, config = DEFAULT_PITCH_COLOR_SCHEME) => note ? config[note.getPitchClass() || 0] : false
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
