import { IChartConfig } from "./Library.charts";
import { FolderItemType, IFolder } from "./Library.constants";
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
                itemType: FolderItemType.Item,
                name: root + ' ' + intervals,
                value: intervals
            });
        }
        sectionItems.push({
            itemType: FolderItemType.Folder,
            name: 'Section ' + section.name,
            items: chordItems
        });
    }

    return {
        itemType: FolderItemType.Folder,
        name: config.name,
        items: sectionItems
    };
}


export const getLibrary = (): IFolder => {
    return {
        itemType: FolderItemType.Folder,
        name: 'Library',
        items: Object.values(CHARTS).map(getFolderItemFromChartConfig)
    }
}

export const LIBRARY = getLibrary();
