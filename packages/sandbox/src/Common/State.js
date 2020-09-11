import PW from '@play-what/core';
import PW_React from '@play-what/react';
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
        parsedSource = PW.parse(source, PW_React);
        //}
        //catch (e) {
        //    console.error(e)
        //}
        return parsedSource
    }
});
