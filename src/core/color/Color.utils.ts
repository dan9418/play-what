import color from "color";
import { IPod } from "../models/Model.constants";
import { getDegree } from "../models/Pod.static";
import { DEFAULT_DEGREE_COLOR_SCHEME } from "../theory/Degree.constants";
import { DEFAULT_PITCH_COLOR_SCHEME } from "../theory/Pitch.constants";

export enum ColorSchemeId {
  None,
  Monochrome,
  HighlightRoot,
  Degree,
  PitchClass,
}

export interface IColorScheme {
  id: ColorSchemeId;
  name: string;
  defaultConfig: string[];
  fn: (note?: IPod, interval?: IPod, config?: string[]) => string | false;
  labelFn: (index: number) => string;
}

const RED = "#dd1122";
const BLACK = "#6b6b7b";

export const COLOR_SCHEMES: IColorScheme[] = [
  {
    id: ColorSchemeId.Monochrome,
    name: "Monochrome",
    defaultConfig: [BLACK],
    fn: (note, interval, config = [BLACK]) => (note ? config[0] : false),
    labelFn: (index) => "*",
  },
  {
    id: ColorSchemeId.HighlightRoot,
    name: "Highlight Root",
    defaultConfig: [RED, BLACK],
    fn: (note, interval, config = [RED, BLACK]) =>
      interval ? (getDegree(interval) === 0 ? config[0] : config[1]) : false,
    labelFn: (index) => (index === 0 ? "R" : "*"),
  },
  {
    id: ColorSchemeId.Degree,
    name: "Interval Degree",
    defaultConfig: DEFAULT_DEGREE_COLOR_SCHEME,
    fn: (note, interval, config = DEFAULT_DEGREE_COLOR_SCHEME) =>
      interval ? config[getDegree(interval) || 0] : false,
    labelFn: (index) => index + 1 + "",
  },
  {
    id: ColorSchemeId.PitchClass,
    name: "Pitch Class",
    defaultConfig: DEFAULT_PITCH_COLOR_SCHEME,
    fn: (note, interval, config = DEFAULT_PITCH_COLOR_SCHEME) =>
      note ? config[note.getPitchClass() || 0] : false,
    labelFn: (index) => index + "",
  },
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
    color: fg,
  };
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
  getStylesFromBgColor,
};
