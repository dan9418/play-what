import { CHARTS } from "../../../../core/src/models/Chart/Chart.constants";

export const getChartOptions = () => {
    return Object.values(CHARTS).map(chart => {
        return {
            id: chart.name,
            name: chart.name,
            value: chart
        }
    })
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

        const options = cat.id === 'charts' ? getChartOptions() : null
        return {
            id: cat.id,
            name: cat.name,
            options
        };
    }
};
