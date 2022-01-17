interface ISearchResult {
    to: string;
    text: string;
}

interface ISearchCandidate {
    text: string;
    to: string;
    keywords: string[];
}

const doesQueryMatch = (query = '', cand: ISearchCandidate) => {
    return cand.keywords.some(kw => query.match(new RegExp(kw, 'gi')));
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

    BASIC_PAGES.forEach(p => doesQueryMatch(query, p) ? results.push(p) : undefined);

    return results;
};

/*
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

const getLink = (modelType: ModelId, id: string, root?: string): string => {
    return `/browse/${modelType}/${id}${root ? `/root/${root}` : ''}`;
}

export const ALL_RESULTS: IResult[] = [];
ALL_PRESETS.forEach(p => {
    ALL_RESULTS.push({
        text: getName(p.modelId, p.name),
        to: getLink(p.modelId, p.id),
        tags: p.tags,
        isCommon: !p.tags.includes(ScaleTag.Exotic)
    });
    NOTE_PRESETS.forEach(n => {
        ALL_RESULTS.push({
            text: getName(p.modelId, p.name, n.name),
            to: getLink(p.modelId, p.id, n.id),
            tags: p.tags
        });
    })
});

*/
