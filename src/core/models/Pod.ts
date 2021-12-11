import Model from './Model';
import { IntervalId, IPod, NoteId } from './Model.constants';

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

    getIntervalListPods() {
        return [this.pod];
    }

    getPreview() {
        return this.name;
    }

    static fromValue = (presetArray, subclass, value: IPod) => {
        const preset = presetArray.find(p => Model.areEqual(p.value, Model.reduce(value)));
        if (!preset) throw new Error('Unknown pod value');
        return new subclass(preset.id);
    }

    addPod(b: Pod, subclass = undefined): Pod {
        const a = this;
        const p = a.pod[0] + b.pod[0];
        const d = a.pod[1] + b.pod[1];
        const result: IPod = [p, d];
        return subclass ? subclass.fromValue(result) : result;
    }

    subtractPod(b: Pod, subclass = undefined): Pod {
        const a = this;
        const p = a.pod[0] - b.pod[0];
        const d = a.pod[1] - b.pod[1];
        const result: IPod = [p, d];
        return subclass ? subclass.fromValue(result) : result;
    }

    addPodList(B: Pod[], subclass = undefined): Pod[] {
        const a = this;
        const result = B.map((b) => a.addPod(b, subclass));
        return subclass ? subclass.fromValue(result) : result;
    };
}
