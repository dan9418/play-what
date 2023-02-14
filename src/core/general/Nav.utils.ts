import {
  IModelConfig,
  ModelId,
  ModelType,
  NoteId,
  Tag
} from "../models/Model.constants";
import { getModelRoute } from "../routing/Routing.utils";
import { ALL_PRESETS, NOTE_PRESET_MAP } from "./../models/Model.presets";
import { replaceAll } from "./String.utils";

interface ISearchResult {
  to: string;
  text: string;
  modelType?: ModelType;
  aliases?: string[];
}

interface ISearchCandidate {
  text: string;
  to: string;
  keywords: string[];
}

const doesQueryMatch = (query = "", keywords: (string | RegExp)[]) => {
  return keywords.some((kw) => query.match(new RegExp(kw, "gi")));
};

const getName = (modelType: ModelType, name: string, root?: string): string => {
  switch (modelType) {
    case ModelType.Chord:
      return `${root ? root : ""} ${name} Chord`;
    case ModelType.Scale:
      return `${root ? root : ""} ${name} Scale`;
    default:
      return `${root ? root : ""} ${name}`;
  }
};

const BASIC_PAGES: ISearchCandidate[] = [
  {
    text: "Browse",
    to: "/browse",
    keywords: ["all", "chord", "scale", "browse"],
  },
  {
    text: "All Chords",
    to: getModelRoute(ModelType.Chord),
    keywords: ["all", "chord"],
  },
  {
    text: "All Scales",
    to: getModelRoute(ModelType.Scale),
    keywords: ["all", "scale", "mode"],
  },
];

const REGEX_NOTE_NAME = /\b[A-G](b|\sflat|\ssharp)*\b/gi; // accidental symbols should be sanitized
const REGEX_FLAT = /\b[A-G]b\b/gi;

const getNoteIdFromQuery = (query: string): string | undefined => {
  const noteMatches = query.match(REGEX_NOTE_NAME);

  if (!noteMatches || !noteMatches.length) return;

  const match = noteMatches[0];
  const noteId = replaceAll(match, " ", "-");

  return noteId;
};

const getModelTypeFromQuery = (query: string): ModelType | undefined => {
  if (query.match("chord")) return ModelType.Chord;
  if (query.match("scale")) return ModelType.Scale;
};

interface IModelPresetResult extends IModelConfig {
  score: number;
}

const getTags = (query: string): Tag[] => {
  const items: Tag[] = [];
  if (query.match(/maj|major/)) items.push(Tag.Major);
  if (query.match(/min|minor/)) items.push(Tag.Minor);
  if (query.match(/triad|chord/)) items.push(Tag.Triad);
  if (query.match(/aug|augmented/)) items.push(Tag.Augmented);
  if (query.match(/dim|diminished/)) items.push(Tag.Diminished);
  if (query.match(/sus|suspended/)) items.push(Tag.Suspended);
  if (query.match(/dom|dominant/)) items.push(Tag.Dominant);
  if (query.match(/pent|pentatonic/)) items.push(Tag.Pentatonic);
  if (query.match(/hex|hexatonic/)) items.push(Tag.Hexatonic);
  if (query.match(/oct|octatonic/)) items.push(Tag.Octatonic);
  if (query.match(/dia|diatonic/)) items.push(Tag.Diatonic);
  if (query.match(/2|2nd|two|second/)) items.push(Tag.Second);
  if (query.match(/3|3rd|three|third/)) items.push(Tag.Third);
  if (query.match(/4|4th|four|fourth/)) items.push(Tag.Fourth);
  if (query.match(/5|5th|five|fifth/)) items.push(Tag.Fifth);
  if (query.match(/6|6th|six|sixth/)) items.push(Tag.Sixth);
  if (query.match(/7|7th|seven|seventh/)) items.push(Tag.Seventh);
  if (query.match(/beb|bebop/)) items.push(Tag.Bebop);
  if (query.match(/blu|blues/)) items.push(Tag.Blues);
  if (query.match(/mel|melodic|minor/)) items.push(Tag.MelodicMode);
  if (query.match(/harm|harmonic|minor/)) items.push(Tag.HarmonicMode);
  return items;
};

const extendPreset = (
  preset: IModelConfig,
  query: string,
  allTags: Tag[]
): IModelPresetResult => {
  let score = 0;

  if (query.match(preset.name.toLowerCase())) {
    score = 100;
  }

  if (
    preset.name
      .toLowerCase()
      .match(new RegExp(query.split(" ").join("|"), "gi"))
  ) {
    score = score + 50;
  }

  score =
    score +
    allTags.filter((queryTag) =>
      preset.tags.some((presetTag) => presetTag === queryTag)
    ).length;

  return {
    ...preset,
    score,
  };
};

const getPresetsFromQuery = (
  query: string,
  modelType?: ModelType
): IModelPresetResult[] => {
  const allTags = getTags(query);
  return ALL_PRESETS.filter(
    (p) => !(modelType && p.modelType !== modelType)
  ).map((p) => {
    return extendPreset(p, query, allTags);
    //return query.split(' ').some(query => query.match(query));
  });
};

const rankResults = (
  results: IModelPresetResult[],
  rootId
): IModelPresetResult[] => {
  return results
    .filter((r) => rootId || r.score)
    .sort((a, b) => b.score - a.score);
};

const formatPresets = (
  presets: IModelConfig[],
  rootId?: string
): ISearchResult[] => {
  return presets.map((p) => {
    const root = rootId
      ? (NOTE_PRESET_MAP.get(rootId as NoteId) as IModelConfig).name
      : undefined;
    return {
      text: getName(p.modelType, p.name, root),
      to: getModelRoute(p.modelType, p.modelId as ModelId, rootId as NoteId),
      aliases: p.aliases,
      modelType: p.modelType,
    };
  });
};

const sanitizeQuery = (query) =>
  query
    .trim()
    .toLowerCase()
    .replaceAll("#", "-sharp")
    .replaceAll(REGEX_FLAT, (m) => `${m.charAt(0)}-flat`)
    .replaceAll(/[^A-Z1-9]/gi, " ");

const getAliases = (presets: ISearchResult[]): ISearchResult[] => {
  const ret: any[] = [];
  for (let i = 0; i < presets.length; i++) {
    const p = presets[i];
    ret.push(p);
    if (p.aliases) {
      p.aliases.forEach((a) =>
        ret.push({
          to: p.to,
          text: `${a} ${p.modelType === ModelType.Chord ? " Chord" : " Scale"}`,
        })
      );
    }
  }
  return ret;
};

export const getSearchResults = (query: string): ISearchResult[] => {
  if (!query) return BASIC_PAGES;

  const sanitized = sanitizeQuery(query);

  const rootId = getNoteIdFromQuery(sanitized);
  const modelType = getModelTypeFromQuery(sanitized);

  const presets = getPresetsFromQuery(sanitized, modelType);

  const ranked = rankResults(presets, rootId);

  const results = formatPresets(ranked, rootId);

  const resultsWithAliases = getAliases(results);

  const basics = BASIC_PAGES.filter((p) =>
    doesQueryMatch(sanitized, p.keywords)
  );

  return [...resultsWithAliases, ...basics];
};
