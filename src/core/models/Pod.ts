import Model from './Model';
import { IntervalId, IPod, NoteId } from './Model.constants';
import { addPods, arePodsEqual } from './Pod.static';

export default class Pod extends Model {

    id: NoteId | IntervalId;
    pod: IPod;

    constructor(presetMap, presetId: NoteId | IntervalId) {
        super();
        const preset = presetMap.get(presetId);
        if (!preset) throw new Error(`Unknown presetId: ${presetId}`);

        this.modelId = preset.modelId;
        this.id = preset.id;
        this.name = preset.name;
        this.tags = preset.tags;
        this.pod = preset.value;
    }

    equals(b: Pod) {
        return arePodsEqual(this.pod, b.pod);
    }
}
