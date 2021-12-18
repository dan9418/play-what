import NumberUtils from '../general/Number.utils';
import Model from './Model';
import { IntervalId, IPod, MAX_POD, NoteId } from './Model.constants';

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

    static reducePods = (a: IPod, max = MAX_POD): IPod => {
        const p = NumberUtils.modulo(a[0], max[0]);
        const d = NumberUtils.modulo(a[1], max[1]);
        return [p, d];
    }

    static arePodsEqual = (a: IPod, b: IPod): boolean => {
        if (!a || !b || a.length !== 2 || b.length !== 2) return false;
        return a[0] === b[0] && a[1] === b[1];
    }

    /*static getPitchClass = (pod: IPod): number => {
        return NumberUtils.modulo(pod[0], MAX_POD[0]);
    }*/

    static getOctave = (pod: IPod, midi = false): number => {
        const raw = Math.floor(pod[0] / 12);
        return midi ? raw + 4 : raw;
    }

    /*static getDegree = (pod: IPod): number => {
        return NumberUtils.modulo(pod[1], MAX_POD[1]);
    }*/
}
