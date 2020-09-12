import Parse from '@play-what/parse';
import { atom, selector } from 'recoil';
import RAW_SOURCE from './source';

// ATOMS

export const rawSourceState = atom({
    key: 'rawSource',
    default: RAW_SOURCE
});

export const menuOpenState = atom({
    key: 'menuOpen',
    default: false
});

// SELECTORS

export const parsedSourceState = selector({
    key: 'parsedSource',
    get: ({ get }) => {
        const source = get(rawSourceState);
        let parsedSource = {};
        //try {
        parsedSource = Parse.json(source);
        //}
        //catch (e) {
        //    console.error(e)
        //}
        return parsedSource
    }
});
