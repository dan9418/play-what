import { IModelConfig, ModelId, NoteId, Tag } from '../models/Model.constants';
import { ALL_PRESETS, NOTE_PRESET_MAP } from './../models/Model.presets';

interface ISearchResult {
    to: string;
    text: string;
}

interface ISearchCandidate {
    text: string;
    to: string;
    keywords: string[];
}

const doesQueryMatch = (query = '', keywords: (string | RegExp)[]) => {
    return keywords.some(kw => query.match(new RegExp(kw, 'gi')));
}

const getLink = (modelType: ModelId, id: string, root?: string): string => {
    return `/browse/${modelType}/${id}${root ? `/root/${root}/` : ''}`;
}

const getName = (modelType: ModelId, name: string, root?: string): string => {
    switch (modelType) {
        case ModelId.Chord:
            return `${root ? root : ''} ${name} Chord`
        case ModelId.Scale:
            return `${root ? root : ''} ${name} Scale`
        default:
            return `${root ? root : ''} ${name}`;
    }
}

const BASIC_PAGES: ISearchCandidate[] = [
    {
        text: 'Browse',
        to: '/browse',
        keywords: ['all', 'chord', 'scale', 'browse']
    },
    {
        text: 'All Chords',
        to: '/browse/chords',
        keywords: ['all', 'chord']
    },
    {
        text: 'All Scales',
        to: '/browse/scales',
        keywords: ['all', 'scale', 'mode']
    }
];

const REGEX_NOTE_NAME = /\b[A-G](b|\sflat|\ssharp)*\b/gi; // accidental symbols should be sanitized
const REGEX_FLAT = /\b[A-G]b\b/gi;

const getNoteIdFromQuery = (query: string): string | undefined => {
    const noteMatches = query.match(REGEX_NOTE_NAME);

    if (!noteMatches || !noteMatches.length) return;

    const match = noteMatches[0];
    const noteId = match.replaceAll(' ', '-');

    return noteId;
}

const getModelIdFromQuery = (query: string): ModelId | undefined => {
    if (query.match('chord')) return ModelId.Chord;
    if (query.match('scale')) return ModelId.Scale;
}

interface IModelPresetResult extends IModelConfig {
    score: number;
}

const getTags = (query: string): Tag[] => {
    const items = [];
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
}

const extendPreset = (preset: IModelConfig, query: string, allTags: Tag[]): IModelPresetResult => {

    let score = 0;

    if (query.match(preset.name.toLowerCase())) {
        score = 100;
    }

    if (preset.name.toLowerCase().match(new RegExp(query.split(' ').join('|'), 'gi'))) {
        score = score + 50;
    }

    score = score + allTags.filter(queryTag => preset.tags.some(presetTag => presetTag === queryTag)).length;

    return {
        ...preset,
        score
    }
}

const getPresetsFromQuery = (query: string, modelId?: ModelId): IModelPresetResult[] => {
    const allTags = getTags(query);
    return ALL_PRESETS.filter(p => !(modelId && p.modelId !== modelId))
        .map(p => {
            return extendPreset(p, query, allTags);
            //return query.split(' ').some(query => query.match(query));
        });
}

const rankResults = (results: IModelPresetResult[], rootId): IModelPresetResult[] => {
    return results.filter(r => rootId || r.score).sort((a, b) => b.score - a.score)
}

const formatPresets = (presets: IModelConfig[], rootId?: string): ISearchResult[] => {
    return presets.map(p => {
        const root = rootId ? NOTE_PRESET_MAP.get(rootId as NoteId).name : undefined;
        return {
            text: getName(p.modelId, p.name, root),
            to: getLink(p.modelId, p.id, rootId)
        };
    });
}

const sanitizeQuery = query => query.trim().toLowerCase().replaceAll('#', '-sharp').replaceAll(REGEX_FLAT, m => `${m.charAt(0)}-flat`).replaceAll(/[^A-Z1-9]/gi, ' ');

export const getSearchResults = (query: string): ISearchResult[] => {
    if (!query) return BASIC_PAGES;

    const sanitized = sanitizeQuery(query);

    const rootId = getNoteIdFromQuery(sanitized);
    const modelId = getModelIdFromQuery(sanitized);

    const presets = getPresetsFromQuery(sanitized, modelId);

    const ranked = rankResults(presets, rootId);

    const results = formatPresets(ranked, rootId);

    const basics = BASIC_PAGES.filter(p => doesQueryMatch(sanitized, p.keywords));

    return [...results, ...basics];
};
