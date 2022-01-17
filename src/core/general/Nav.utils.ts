interface ISearchResult {
    to: string;
    text: string;
}

export const getSearchResults = (query: string): ISearchResult[] => {
    const results: ISearchResult[] = [];

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
