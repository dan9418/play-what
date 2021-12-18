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
