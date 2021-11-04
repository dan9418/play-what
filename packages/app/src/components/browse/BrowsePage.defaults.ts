import { CHART_LIST_PRESETS } from "../../../../core/src/models/Chart/Chart.constants";
import { SCALE_PRESETS } from '../../../../core/src/models/PodList/Scale/Scale.constants';
import { PRACTICE_PRESETS } from "../../state/Practice.constants";
import { INTERVAL_PRESETS } from './../../../../core/src/models/Pod/Interval/Interval.constants';
import { CHORD_PRESETS } from './../../../../core/src/models/PodList/Chord/Chord.constants';

export const DEFAULT_BROWSE_TIERS = {
    id: 'cat',
    name: 'Category',
    options: [
        {
            id: 'chords',
            name: 'Chords'
        },
        {
            id: 'scales',
            name: 'Scales'
        },
        {
            id: 'intervals',
            name: 'Intervals'
        },
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
        if (cat.id === 'chords') options = CHORD_PRESETS;
        if (cat.id === 'scales') options = SCALE_PRESETS
        if (cat.id === 'intervals') options = INTERVAL_PRESETS;
        if (cat.id === 'charts') options = CHART_LIST_PRESETS;
        if (cat.id === 'practice') options = PRACTICE_PRESETS;

        return {
            id: cat.id,
            name: cat.name,
            options
        };
    }
};
