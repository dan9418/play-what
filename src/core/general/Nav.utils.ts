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

const REGEX_NOTE_NAME = /\b[A-G](b|\sflat|\ssharp)*\b/gi; // accidental symbols should be sanitized
const REGEX_FLAT = /\b[A-G]b\b/gi;

const getNoteIdFromQuery = (query: string): string | undefined => {
    const noteMatches = query.match(REGEX_NOTE_NAME);

    if (!noteMatches || !noteMatches.length) return;

    const match = noteMatches[0];
    const noteId = match.replaceAll(' ', '-');

    return noteId;
}

const sanitizeQuery = query => query.trim().toLowerCase().replaceAll('#', '-sharp').replaceAll(REGEX_FLAT, m => `${m.charAt(0)}-flat`).replaceAll(/[^A-Z1-9]/gi, ' ');

export const getSearchResults = (query: string): ISearchResult[] => {
    const results: ISearchResult[] = [];

    if (!query) return BASIC_PAGES;

    const sanitized = sanitizeQuery(query);
    console.log(query, sanitized);

    getNoteIdFromQuery(sanitized);


    /*if (noteNames.length) {
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
    }*/

    const basics = BASIC_PAGES.filter(p => doesQueryMatch(sanitized, p.keywords));

    return [...basics];
};
