import { NOTE_PRESETS } from '@pw-core/models/Model.presets';
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

    const santized = query.toLowerCase().replaceAll('#', 'sharp');

    ALL_PRESETS.forEach(p => {
        if (doesQueryMatch(santized, [p.name, ...p.tags, ...p.aliases])) {
            const validNames = [p.name, ...p.aliases];
            validNames.forEach(x =>
                results.push({
                    text: getName(p.modelId, x),
                    to: getLink(p.modelId, p.id)
                })
            );
        }
    });

    const noteNames = NOTE_PRESETS.filter(p => {

        const noDash = p.id.replaceAll('-', ' ');
        const nat = p.id.replaceAll('-', '').replaceAll('sharp', '#').replaceAll('flat', 'b');

        console.log('dpb', p.id, noDash, nat);

        return doesQueryMatch(
            query,
            [
                new RegExp("\\b" + p.id + "\\b"),
                new RegExp("\\b" + noDash + "\\b"),
                new RegExp("\\b" + nat + "\\b")
            ]
        )

    });

    console.log('dpb', noteNames);

    const rooted = [];
    if (noteNames.length) {
        for (let i = 0; i < results.length; i++) {
            const r = results[i];
            noteNames.forEach(x => {
                const newEntry = {
                    text: `${x.name} ${r.text}`,
                    to: `${r.to}/root/${x.id}`
                };
                rooted.push(newEntry);
            });
        }
    }

    const basics = BASIC_PAGES.filter(p => doesQueryMatch(santized, p.keywords));

    return [...rooted, ...results, ...basics];
};
