import { ModelId } from '../models/Model.constants';
import { ALL_PRESETS } from './../models/Model.presets';

interface ISearchResult {
    to: string;
    text: string;
}

interface ISearchCandidate {
    text: string;
    to: string;
    keywords: string[];
}

const doesQueryMatch = (query = '', keywords: string[]) => {
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

export const getSearchResults = (query: string): ISearchResult[] => {
    const results: ISearchResult[] = [];

    if (!query) return BASIC_PAGES;

    BASIC_PAGES.forEach(p => doesQueryMatch(query, p.keywords) ? results.push(p) : undefined);

    ALL_PRESETS.forEach(p => {
        if (doesQueryMatch(query, [p.name, ...p.tags])) {
            const validNames = [p.name, ...p.aliases];
            validNames.forEach(x =>
                results.push({
                    text: getName(p.modelId, x),
                    to: getLink(p.modelId, p.id)
                })
            );
        }
    });

    return results;
};
