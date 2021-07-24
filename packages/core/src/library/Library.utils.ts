import { IChartConfig } from "./Library.charts";
import { FolderNode, IFolder } from "./Library.constants";
import * as CHARTS from './Library.charts';

export const getFolderItemFromChartConfig = (config: IChartConfig): IFolder => {
    const sectionItems = [];
    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];
        const chordItems = [];
        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [root, intervals, t] = chord;
            chordItems.push({
                nodeType: FolderNode.Item,
                text: root + ' ' + intervals,
                value: {
                    rootId: root,
                    presetId: intervals
                }
            });
        }
        sectionItems.push({
            nodeType: FolderNode.Folder,
            text: 'Section ' + section.name,
            items: chordItems
        });
    }

    return {
        nodeType: FolderNode.Folder,
        text: config.name,
        items: sectionItems
    };
}


export const getLibrary = (): IFolder => {
    return {
        nodeType: FolderNode.Folder,
        text: 'Library',
        items: Object.values(CHARTS).map(getFolderItemFromChartConfig)
    }
}

export const LIBRARY = getLibrary();
