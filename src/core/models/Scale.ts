import Model from './Model';
import { IPod, ScaleId } from './Model.constants';
import { SCALE_PRESETS, SCALE_PRESET_MAP } from './Model.presets';
import { arePodListsEqual, reducePodList } from './Pod.static';
import PodList from './PodList';

export default class Scale extends PodList {

    constructor(id: ScaleId, options = undefined) {
        super(SCALE_PRESET_MAP, id, options);
    }

    static fromValue = (value: IPod[]) => Model.fromValue(SCALE_PRESETS, Scale, value, arePodListsEqual, reducePodList);
}
