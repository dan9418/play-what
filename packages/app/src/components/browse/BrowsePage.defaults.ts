import { CHARTS, IChartConfig } from "../../../../core/src/models/Chart/Chart.constants";
import { NOTE_PRESET_MAP } from "../../../../core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESET_MAP } from "../../../../core/src/models/PodList/Chord/Chord.constants";
import { IDataItem } from "../../state/state";
import { PRACTICE_CAGED } from "../../state/Practice.constants";

const getChartListData = (config: IChartConfig): IDataItem[] => {
    const items = [];

    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];

        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [noteId, chordId, t] = chord;

            const root = NOTE_PRESET_MAP.get(noteId).value || [0, 0];
            const intervals = CHORD_PRESET_MAP.get(chordId).value || [];

            items.push({
                root,
                intervals
            });
            //...(new Array((t / 2) - 1).fill(<div className="rest" >/</div>))
        }
    }

    return items;
}

export const getChartOptions = () => {
    return Object.values(CHARTS).map(chart => {
        return {
            id: chart.name,
            name: chart.name,
            value: getChartListData(chart)
        }
    })
}

export const getPracticeOptions = () => {
    return [
        {
            id: 'CAGED',
            name: 'CAGED',
            value: PRACTICE_CAGED
        }
    ];
}

export const DEFAULT_BROWSE_TIERS = {
    id: 'cat',
    name: 'Category',
    options: [
        {
            id: 'charts',
            name: 'Charts'
        },
        {
            id: 'practice',
            name: 'Practice'
        }
    ],
    getNextTier: (cat, catIndex, currentTier, parentTiers) => {
        let options = [];
        if (cat.id === 'charts') options = getChartOptions();
        if (cat.id === 'practice') options = getPracticeOptions();

        return {
            id: cat.id,
            name: cat.name,
            options
        };
    }
};
