import { IChartConfig } from './Group.charts';
import { IModelPreset, IModelValue } from "../Model.constants";

const getGroupPresetFromChartConfig = (chartConfig: IChartConfig): IModelPreset<IModelValue> | null => {

    const chartValue: IModelValue = [];

    return {
        id: chartConfig.name.replace(' ', ''),
        name: chartConfig.name,
        value: chartValue
    }
}

export default {
    getGroupPresetFromChartConfig
};
