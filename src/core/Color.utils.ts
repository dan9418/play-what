import ArrayUtils from "./Array.utils";
import { IPreset } from "./Model.constants";
import { getPitchClass } from "./Note.utils";
import { IPod } from "./Pod.presets";
import { getDegree } from "./Pod.utils";

export enum ColorSchemeId {
  None = "none",
  Monochrome = "monochrome",
  HighlightRoot = "highlight-root",
  Degree = "degree",
  PitchClass = "pitch-class",
}

export type ColorSchemeFn = (
  note?: IPod,
  interval?: IPod,
  config?: string[]
) => string | undefined;

export interface IColorSchemePreset extends IPreset<ColorSchemeId> {
  defaultConfig: string[];
  fn: ColorSchemeFn;
}

const RED = "#dd1122";
const BLACK = "#6b6b7b";

const DEFAULT_MONOCHROME_CONFIG = [BLACK];

const DEFAULT_HIGHLIGHT_ROOT_CONFIG = [RED, BLACK];

const DEFAULT_DEGREE_COLOR_SCHEME = [
  "#E6194B",
  "#F58231",
  "#FFE119",
  "#3CB44B",
  "#4363D8",
  "#911DB4",
  "#F032E6",
];

const DEFAULT_PITCH_COLOR_SCHEME = [
  "#ED1C24",
  "#F1592A",
  "#F8981E",
  "#FCB040",
  "#FFF200",
  "#8CC63F",
  "#056839",
  "#13A89E",
  "#A898C8",
  "#662D91",
  "#92278F",
  "#C2305E",
];

export const COLOR_SCHEME_PRESET_MAP: Map<ColorSchemeId, IColorSchemePreset> =
  new Map([
    [
      ColorSchemeId.Monochrome,
      {
        presetId: ColorSchemeId.Monochrome,
        name: "Monochrome",
        defaultConfig: DEFAULT_MONOCHROME_CONFIG,
        fn: (note, interval, config = DEFAULT_MONOCHROME_CONFIG) =>
          note ? config[0] : undefined,
      },
    ],
    [
      ColorSchemeId.HighlightRoot,
      {
        presetId: ColorSchemeId.HighlightRoot,
        name: "Highlight Root",
        defaultConfig: DEFAULT_HIGHLIGHT_ROOT_CONFIG,
        fn: (note, interval, config = DEFAULT_HIGHLIGHT_ROOT_CONFIG) =>
          interval
            ? getDegree(interval) === 0
              ? config[0]
              : config[1]
            : undefined,
      },
    ],
    [
      ColorSchemeId.Degree,
      {
        presetId: ColorSchemeId.Degree,
        name: "Interval Degree",
        defaultConfig: DEFAULT_DEGREE_COLOR_SCHEME,
        fn: (note, interval, config = DEFAULT_DEGREE_COLOR_SCHEME) =>
          interval ? config[getDegree(interval) || 0] : undefined,
      },
    ],
    [
      ColorSchemeId.PitchClass,
      {
        presetId: ColorSchemeId.PitchClass,
        name: "Pitch Class",
        defaultConfig: DEFAULT_PITCH_COLOR_SCHEME,
        fn: (note, interval, config = DEFAULT_PITCH_COLOR_SCHEME) =>
          note ? config[getPitchClass(note) || 0] : undefined,
      },
    ],
  ]);

export const COLOR_SCHEME_PRESETS = ArrayUtils.mapToArray(
  COLOR_SCHEME_PRESET_MAP
);

// const getFgColor = (bg?: string): string => {
//   if (!bg) return "#000";
//   return color(bg).isDark() ? "#fff" : "#000";
// };

// const getStylesFromBgColor = (bg?: string): any => {
//   if (!bg) return {};
//   const fg = getFgColor(bg);
//   return {
//     backgroundColor: bg,
//     color: fg,
//   };
// };

// const getColorFromContinuousScheme = (value, min, max, scheme) => {
//   let percent = (value - min) / (max - min);
//   percent = percent <= 0 ? 0 : percent >= 1 ? 1 : percent;

//   const initialColor = color(scheme.min);
//   const finalColor = color(scheme.max);
//   const background = initialColor.mix(finalColor, percent);

//   return background;
// };
