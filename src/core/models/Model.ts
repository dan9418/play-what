import NumberUtils from '../general/Number.utils';
import ToneUtils from '../tone/Tone.utils';
import TuningUtils from '../tuning/Tuning.utils';
import { IModelConfig, IPod, MAX_POD, ModelId, PresetId, Tag } from './Model.constants';
import { MASTER_PRESETS } from './Model.presets';

export default class Model implements IModelConfig {
    modelId: ModelId;
    id: PresetId;
    name: string;
    tags: Tag[];

    static fromValue = (presetArray, subclass, value: any, isList = false) => {
        const compareValue = isList ? Model.reduceList(value) : Model.reduce(value);
        const compareFn = isList ? Model.areEqualList : Model.areEqual;
        const preset = presetArray.find(p => compareFn(p.value, compareValue as any));
        if (!preset) {
            console.error(presetArray[0].modelId, value, isList, presetArray);
            throw new Error('Unknown model value');
        }
        return new subclass(preset.id);
    }

    // Equality

    static areEqual = (a: IPod, b: IPod): boolean => {
        if (!a || !b || a.length !== 2 || b.length !== 2) return false;
        return a[0] === b[0] && a[1] === b[1];
    }

    static areEqualList = (A: IPod[], B: IPod[]): boolean => {
        if (!A || !B || A.length !== B.length) return false;
        for (let i = 0; i < A.length; i++) {
            const a = A[i];
            const b = B[i];
            if (!this.areEqual(a, b)) return false;
        }
        return true;
    }

    // Reduction

    static reduce = (a: IPod, max = MAX_POD): IPod => {
        const p = NumberUtils.modulo(a[0], max[0]);
        const d = NumberUtils.modulo(a[1], max[1]);
        return [p, d];
    }

    static reduceList = (A: IPod[]): IPod[] => {
        return A.map((a) => this.reduce(a));
    }

    // Property Derivation

    static getPitchClass = (pod: IPod): number => {
        return NumberUtils.modulo(pod[0], MAX_POD[0]);
    }

    static getOctave = (pod: IPod, midi = false): number => {
        const raw = Math.floor(pod[0] / 12);
        return midi ? raw + 4 : raw;
    }

    static getDegree = (pod: IPod): number => {
        return NumberUtils.modulo(pod[1], MAX_POD[1]);
    }

    // Search

    static isPodAtPitch = (pod: IPod, p: number, matchOctave = false): IPod | null => {
        const pitchOffset = 0;
        const target = p - pitchOffset;
        let a = pod[0];
        let b = target;
        if (!matchOctave) {
            a = NumberUtils.modulo(a, 12);
            b = NumberUtils.modulo(b, 12);
        }
        return a === b ? pod : null;
    };

    static getPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): IPod | null => {
        const pod = A.find(a => this.isPodAtPitch(a, p, matchOctave));
        return pod ? pod : null;
    };

    // Sound

    static playSound = (note: IPod): void => {
        const frequency = TuningUtils.getFrequency(note[0]);
        ToneUtils.playSound(frequency)
    }

    static playSoundList = (notes: IPod[]): void => {
        const frequencies = notes.map(n => TuningUtils.getFrequency(n[0]));
        ToneUtils.playSound(frequencies)
    }

    // Search

    static getIndexOfPodAtPitch = (A: IPod[], p: number, matchOctave: boolean): number | null => {
        const pod = A.findIndex(a => this.isPodAtPitch(a, p, matchOctave));
        return pod !== -1 ? pod : null;
    };

    // Other

    static containsSubset = (podList: IPod[], subset: IPod[]): boolean => {
        for (let i = 0; i < subset.length; i++) {
            if (!podList.find(x => x[0] === subset[i][0] && x[1] === subset[i][1]))
                return false;
        }
        return true;
    };

    static sort = (podList: IPod[]) => {
        return podList.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            else if (a[0] > b[0]) return 1;
            else {
                if (a[1] < b[1]) return -1;
                else if (a[1] > b[1]) return 1;
                else return 0;
            }
        });
    }

    static findPreset = (podList: IPod[]): IModelConfig | undefined => {
        return MASTER_PRESETS.find(p => this.areEqualList(p.value, podList));
    }
}
