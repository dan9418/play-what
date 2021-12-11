import Model from './Model';
import { IntervalId, IPod, NoteId } from './Model.constants';

export default class Pod extends Model {

    id: NoteId | IntervalId;
    value: IPod;

    constructor(presetMap, presetId: NoteId | IntervalId) {
        super(presetMap, presetId);
    }

    getIntervalListPods() {
        return [this.value];
    }

    getPreview() {
        return this.name;
    }

    static fromValue = (presetArray, subclass, value: IPod) => {
        const preset = presetArray.find(p => Model.areEqual(p.value, Model.reduce(value)));
        if (!preset) throw new Error('Unknown pod value');
        return new subclass(preset.id);
    }

    static addPod = (a: IPod, b: IPod, reduceResult = false, modelClass = undefined): IPod => {
        const p = a[0] + b[0];
        const d = a[1] + b[1];
        const result: IPod = [p, d];
        const resultPod = reduceResult ? this.reduce(result) : result;
        return modelClass ? new modelClass.fromValue(resultPod) : resultPod;
    }

    static subtractPod = (a: IPod, b: IPod, reduceResult = false, modelClass = undefined): IPod => {
        const p = a[0] - b[0];
        const d = a[1] - b[1];
        const result: IPod = [p, d];
        const resultPod = reduceResult ? this.reduce(result) : result;
        return modelClass ? new modelClass.fromValue(resultPod) : resultPod;
    }

    static addPodList = (a: IPod, B: IPod[], modelClass = undefined): IPod[] => {
        const newValue = B.map((b) => Pod.addPod(a, b, undefined, modelClass));
        return newValue;
    };
}
